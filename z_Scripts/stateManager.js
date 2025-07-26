/**
 * Shared state manager for Obsidian scripts
 */

// Create the state manager instance
const stateManagerInstance = {
    fileQueue: [], // Array of all files to process
    stageQueues: {
        'permalink': [],
        'rename': [],
        'source': []
    }, // Queue for each stage
    fileStatus: new Map(), // Map of file path to its completed stages
    currentStage: 'permalink', // Current processing stage
    stages: ['permalink', 'rename', 'source'],
    operationLog: [], // Track operation history

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
            currentStage: this.currentStage,
            queueSizes: {
                permalink: this.stageQueues.permalink.length,
                rename: this.stageQueues.rename.length,
                source: this.stageQueues.source.length
            },
            stageProgress: this.getStageProgress()
        };
        console.log(`[${timestamp}] ${operation} - ${filePath} - ${details}`);
        this.operationLog.push(logEntry);
    },

    /**
     * Get progress of current stage
     * @returns {string} Progress description
     */
    getStageProgress() {
        if (!this.currentStage) return 'No stage active';
        const completed = Array.from(this.fileStatus.values())
            .filter(stages => stages.includes(this.currentStage))
            .length;
        return `${completed}/${this.fileQueue.length} files completed ${this.currentStage}`;
    },

    /**
     * Queue files for processing
     * @param {string[]} filePaths - Array of file paths to process
     */
    queueFiles(filePaths) {
        this.logOperation('QUEUE', 'multiple', `Starting new batch with ${filePaths.length} files`);
        this.fileQueue = [...filePaths];
        this.fileStatus.clear();
        this.currentStage = this.stages[0];
        
        // Initialize status for all files and add to first stage queue
        filePaths.forEach(path => {
            this.fileStatus.set(path, []);
            this.stageQueues[this.currentStage].push(path);
            this.logOperation('QUEUE_ADD', path, `Added to ${this.currentStage} queue`);
        });
    },

    /**
     * Get next file to process in current stage
     * @returns {string|null} Next file path or null if stage complete
     */
    getNextFile() {
        // If no current stage, we're done
        if (!this.currentStage) {
            this.logOperation('COMPLETE', 'all', 'All stages completed');
            return null;
        }

        // Get next file from current stage queue
        const nextFile = this.stageQueues[this.currentStage][0];
        if (!nextFile) {
            // Current stage queue is empty, check if all files are done
            const allFilesComplete = this.fileQueue.every(path => {
                const status = this.fileStatus.get(path) || [];
                return status.includes(this.currentStage);
            });

            if (allFilesComplete) {
                // Move to next stage
                const currentIndex = this.stages.indexOf(this.currentStage);
                if (currentIndex < this.stages.length - 1) {
                    const nextStage = this.stages[currentIndex + 1];
                    this.currentStage = nextStage;
                    
                    // Queue all files for next stage
                    this.fileQueue.forEach(path => {
                        this.stageQueues[nextStage].push(path);
                        this.logOperation('QUEUE_ADD', path, `Added to ${nextStage} queue`);
                    });
                    
                    this.logOperation('STAGE_COMPLETE', 'all', `Moving to stage: ${nextStage}`);
                    return this.getNextFile();
                } else {
                    // All stages complete
                    this.currentStage = null;
                    this.logOperation('COMPLETE', 'all', 'All stages completed');
                    return null;
                }
            }
        }

        return nextFile;
    },

    /**
     * Mark operation as complete for a file
     * @param {string} filePath - The file that's complete
     * @param {string} operation - The operation completed
     * @param {string} [details=''] - Optional details about the completion
     */
    markOperationComplete(filePath, operation, details = '') {
        // Get current status
        const status = this.fileStatus.get(filePath) || [];
        
        // Add operation to status if not already there
        if (!status.includes(operation)) {
            status.push(operation);
            this.fileStatus.set(filePath, status);
        }

        // Remove file from current stage queue
        const index = this.stageQueues[operation].indexOf(filePath);
        if (index > -1) {
            this.stageQueues[operation].splice(index, 1);
        }

        this.logOperation('COMPLETE', filePath, `${operation} complete${details ? ': ' + details : ''}`);
        this.logOperation('PROGRESS', 'all', this.getStageProgress());
    },

    /**
     * Skip operation for a file but mark it as complete
     * @param {string} filePath - The file to skip
     * @param {string} operation - The operation to skip
     * @param {string} reason - Why the operation was skipped
     */
    skipOperation(filePath, operation, reason) {
        this.logOperation('SKIP', filePath, `${operation}: ${reason}`);
        this.markOperationComplete(filePath, operation, `skipped - ${reason}`);
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
     * Clear all state
     */
    clearState() {
        this.logOperation('CLEAR_STATE', 'all', 'Clearing all state');
        this.fileQueue = [];
        this.fileStatus.clear();
        Object.keys(this.stageQueues).forEach(stage => {
            this.stageQueues[stage] = [];
        });
        this.currentStage = this.stages[0];
        // Keep the operation log for debugging
    },

    /**
     * Check if a file needs processing in the current stage
     * @param {string} filePath - The file to check
     * @returns {boolean} True if file needs processing
     */
    needsProcessing(filePath) {
        if (!this.currentStage) return false;
        const status = this.fileStatus.get(filePath) || [];
        return !status.includes(this.currentStage);
    },

    /**
     * Get debug information about current state
     * @returns {Object} Debug information
     */
    getDebugInfo() {
        return {
            currentStage: this.currentStage,
            queueSize: this.fileQueue.length,
            stageQueues: { ...this.stageQueues },
            fileStatus: Object.fromEntries(this.fileStatus),
            operationLog: this.operationLog,
            stageProgress: this.getStageProgress()
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