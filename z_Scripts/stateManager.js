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
            if (!this.completedFiles.has(path) && !this.processQueue.includes(path)) {
                this.processQueue.push(path);
                this.logOperation('QUEUE_ADD', path, 'Added to queue');
            } else {
                this.logOperation('QUEUE_SKIP', path, 'Already queued or completed');
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

        // Start processing next file in queue
        this.currentFile = this.processQueue[0];
        this.currentOperations.clear();
        this.logOperation('NEXT_FILE', this.currentFile, `Starting new file with ${operation}`);
        return this.currentFile;
    },

    /**
     * Mark current operation as complete
     * @param {string} filePath - The file that's complete
     * @param {string} operation - The operation completed
     */
    markOperationComplete(filePath, operation) {
        if (filePath !== this.currentFile) {
            this.logOperation('ERROR', filePath, `Attempted to complete operation on non-current file`);
            return;
        }

        this.currentOperations.add(operation);
        this.logOperation('OPERATION_COMPLETE', filePath, `Completed ${operation}`);

        // If all operations are complete for this file
        if (this.currentOperations.size === this.operationOrder.length) {
            this.completedFiles.add(filePath);
            this.processQueue.shift(); // Remove the completed file from queue
            this.currentFile = null;
            this.currentOperations.clear();
            this.logOperation('FILE_COMPLETE', filePath, 'All operations completed');
        }
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