/**
 * Shared state manager for Obsidian scripts
 */

// Create the state manager instance
const stateManagerInstance = {
    currentFile: null,
    processQueue: [], // Array for ordered processing
    completedFiles: new Set(),
    currentOperations: new Set(), // Track operations for current file
    operationLog: [], // Track operation history
    scriptLock: false,
    lockTimeout: 30000, // 30 seconds
    operationOrder: ['permalink', 'rename', 'source'], // Enforce operation order

    /**
     * Log an operation with timestamp and details
     * @param {string} operation - The operation being performed
     * @param {string} filePath - The file being operated on
     * @param {string} details - Additional details about the operation
     */
    logOperation(operation, filePath, details) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            operation,
            filePath,
            details,
            currentFile: this.currentFile,
            queueSize: this.processQueue.length,
            completedCount: this.completedFiles.size,
            hasLock: this.scriptLock
        };
        console.log(`[${timestamp}] ${operation} - ${filePath} - ${details}`);
        this.operationLog.push(logEntry);
    },

    /**
     * Try to acquire the script lock
     * @returns {Promise<boolean>}
     */
    async acquireLock() {
        this.logOperation('LOCK_ATTEMPT', 'system', 'Attempting to acquire lock');
        const startTime = Date.now();
        while (this.scriptLock) {
            if (Date.now() - startTime > this.lockTimeout) {
                this.logOperation('LOCK_TIMEOUT', 'system', 'Lock acquisition timed out');
                return false;
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        this.scriptLock = true;
        this.logOperation('LOCK_ACQUIRED', 'system', 'Lock acquired successfully');
        return true;
    },

    /**
     * Release the script lock
     */
    releaseLock() {
        this.logOperation('LOCK_RELEASE', 'system', 'Releasing lock');
        this.scriptLock = false;
    },

    /**
     * Queue up files for processing
     * @param {string[]} filePaths - Array of file paths to process
     */
    queueFiles(filePaths) {
        this.logOperation('QUEUE', 'multiple', `Queueing ${filePaths.length} files`);
        filePaths.forEach(path => {
            // Don't queue if:
            // 1. Already completed
            // 2. Already in queue
            // 3. Currently being processed
            // 4. Has any operations completed (partial processing)
            if (this.completedFiles.has(path)) {
                this.logOperation('QUEUE_SKIP', path, 'Already completed');
            } else if (this.processQueue.includes(path)) {
                this.logOperation('QUEUE_SKIP', path, 'Already in queue');
            } else if (path === this.currentFile) {
                this.logOperation('QUEUE_SKIP', path, 'Currently being processed');
            } else if (this.currentOperations.size > 0 && path === this.currentFile) {
                this.logOperation('QUEUE_SKIP', path, 'Partial processing in progress');
            } else {
                this.processQueue.push(path);
                this.logOperation('QUEUE_ADD', path, 'Added to queue');
            }
        });
    },

    /**
     * Get next file to process
     * @param {string} operation - The operation being performed
     * @returns {string|null} Next file path or null if queue empty
     */
    getNextFile(operation) {
        // If we have a current file, check if it's ready for this operation
        if (this.currentFile) {
            // Check if this operation is next in sequence
            const nextOp = this.operationOrder[this.currentOperations.size];
            if (operation !== nextOp) {
                this.logOperation('NEXT_FILE_SKIP', this.currentFile, `Waiting for ${nextOp}`);
                return null;
            }

            // Continue with current file
            this.logOperation('NEXT_FILE', this.currentFile, `Continuing with ${operation}`);
            return this.currentFile;
        }

        // If no current file and queue is empty, we're done
        if (this.processQueue.length === 0) {
            this.logOperation('QUEUE_EMPTY', 'none', 'No more files to process');
            return null;
        }

        // Get next file from queue (but don't remove it yet)
        const nextFile = this.processQueue[0];
        
        // Skip if somehow already completed
        if (this.completedFiles.has(nextFile)) {
            this.processQueue.shift(); // Remove completed file from queue
            this.logOperation('NEXT_FILE_SKIP', nextFile, 'Already completed');
            return null;
        }

        // Start processing next file
        this.currentFile = nextFile;
        this.currentOperations.clear();
        this.logOperation('NEXT_FILE', nextFile, `Starting new file with ${operation}`);
        return nextFile;
    },

    /**
     * Mark current operation as complete
     * @param {string} filePath - The file that's complete
     * @param {string} operation - The operation completed
     * @param {boolean} [skipCheck=false] - Whether to skip current file check
     */
    markOperationComplete(filePath, operation, skipCheck = false) {
        // Verify this is the current file (unless explicitly skipped)
        if (!skipCheck && filePath !== this.currentFile) {
            this.logOperation('ERROR', filePath, `Attempted to complete operation on non-current file`);
            return;
        }

        // Add operation to completed set
        this.currentOperations.add(operation);
        this.logOperation('OPERATION_COMPLETE', filePath, `Completed ${operation}`);

        // Check if all operations are complete for this file
        if (this.currentOperations.size === this.operationOrder.length) {
            // Mark file as complete
            this.completedFiles.add(filePath);
            
            // Remove from queue
            const index = this.processQueue.indexOf(filePath);
            if (index > -1) {
                this.processQueue.splice(index, 1);
            }
            
            // Clear current file state
            this.currentFile = null;
            this.currentOperations.clear();
            
            this.logOperation('FILE_COMPLETE', filePath, 'All operations completed');
        }
    },

    /**
     * Skip current operation and mark it as complete
     * @param {string} filePath - The file being processed
     * @param {string} operation - The operation to skip
     * @param {string} reason - Why the operation was skipped
     */
    skipOperation(filePath, operation, reason) {
        // If this isn't the current file, make it current
        if (filePath !== this.currentFile) {
            // If we have a different current file, can't skip
            if (this.currentFile !== null) {
                this.logOperation('SKIP_ERROR', filePath, `Cannot skip operation on non-current file`);
                return;
            }
            this.currentFile = filePath;
            this.currentOperations.clear();
        }

        // Log the skip
        this.logOperation('SKIP', filePath, `Skipping ${operation}: ${reason}`);

        // Mark the operation as complete
        this.markOperationComplete(filePath, operation, true);
    },

    /**
     * Clear all state
     */
    clearState() {
        this.logOperation('CLEAR_STATE', 'all', 'Clearing all state');
        this.currentFile = null;
        this.processQueue = [];
        this.completedFiles.clear();
        this.currentOperations.clear();
        this.scriptLock = false;
        // Keep the operation log for debugging
    },

    /**
     * Start processing a folder
     * @param {string} folderPath - The folder path being processed
     */
    startFolderProcessing(folderPath) {
        this.logOperation('START_FOLDER', folderPath, 'Starting folder processing');
        this.clearState();
    },

    /**
     * Check if a file is currently being processed
     * @param {string} filePath - The file path to check
     * @returns {boolean}
     */
    isFileInProgress(filePath) {
        const inProgress = this.currentFile === filePath;
        this.logOperation('CHECK_PROGRESS', filePath, `In progress: ${inProgress}`);
        return inProgress;
    },

    /**
     * Check if a file has been processed for a specific operation
     * @param {string} filePath - The file path to check
     * @param {string} operation - The operation being performed
     * @returns {boolean}
     */
    isFileProcessed(filePath, operation) {
        // If this is the current file, check current operations
        if (filePath === this.currentFile) {
            const isProcessed = this.currentOperations.has(operation);
            this.logOperation('CHECK_PROCESSED', filePath, `${operation} processed: ${isProcessed}`);
            return isProcessed;
        }
        
        // If file is in completed set, all operations are done
        const isComplete = this.completedFiles.has(filePath);
        this.logOperation('CHECK_PROCESSED', filePath, `${operation} processed: ${isComplete}`);
        return isComplete;
    },

    /**
     * Check if a file is ready for an operation
     * @param {string} filePath - The file path to check
     * @param {string} operation - The operation to check
     * @returns {boolean}
     */
    isFileReadyForOperation(filePath, operation) {
        // If file is completed, it's not ready for any operation
        if (this.completedFiles.has(filePath)) {
            this.logOperation('CHECK_READY', filePath, `Not ready: already completed`);
            return false;
        }

        // If this isn't the current file and we have a current file, not ready
        if (filePath !== this.currentFile && this.currentFile !== null) {
            this.logOperation('CHECK_READY', filePath, `Not ready: another file in progress`);
            return false;
        }

        // If this is the current file, check if this operation is next
        if (filePath === this.currentFile) {
            const nextOp = this.operationOrder[this.currentOperations.size];
            const isReady = operation === nextOp;
            this.logOperation('CHECK_READY', filePath, `Ready for ${operation}: ${isReady}`);
            return isReady;
        }

        // If no current file and this file is next in queue, it's ready for first operation
        if (this.currentFile === null && this.processQueue[0] === filePath) {
            const isReady = operation === this.operationOrder[0];
            this.logOperation('CHECK_READY', filePath, `Ready as next file: ${isReady}`);
            return isReady;
        }

        this.logOperation('CHECK_READY', filePath, `Not ready: waiting in queue`);
        return false;
    },

    /**
     * Get debug information about current state
     * @returns {Object} Debug information
     */
    getDebugInfo() {
        return {
            currentFile: this.currentFile,
            queueSize: this.processQueue.length,
            queuedFiles: [...this.processQueue],
            completedFiles: Array.from(this.completedFiles),
            currentOperations: Array.from(this.currentOperations),
            operationLog: this.operationLog,
            hasLock: this.scriptLock
        };
    }
};

// Make it globally available
if (typeof window !== 'undefined') {
    window.obsidianStateManager = stateManagerInstance;
}

/**
 * Function to get the state manager instance
 * This maintains compatibility with Templater's expectation of a function
 * while still allowing direct access via window.obsidianStateManager
 * @returns {Object} The state manager instance
 */
function getStateManager() {
    return stateManagerInstance;
}

// Export for Templater
module.exports = getStateManager; 