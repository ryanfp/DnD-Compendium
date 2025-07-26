/**
 * Shared state manager for Obsidian scripts
 */

// Create the state manager instance
const stateManagerInstance = {
    fileQueue: [], // Array of all files to process
    fileStatus: new Map(), // Map of file path to its current status
    currentStage: null, // Current processing stage
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
            queueSize: this.fileQueue.length,
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
            .filter(status => status.includes(this.currentStage))
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
        this.fileStatus = new Map();
        this.currentStage = this.stages[0];
        
        // Initialize status for all files
        filePaths.forEach(path => {
            this.fileStatus.set(path, []);
            this.logOperation('QUEUE_ADD', path, 'Added to queue');
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

        // Find first file that hasn't completed current stage
        const nextFile = this.fileQueue.find(path => {
            const status = this.fileStatus.get(path) || [];
            return !status.includes(this.currentStage);
        });

        if (!nextFile) {
            // All files complete for this stage
            const currentIndex = this.stages.indexOf(this.currentStage);
            if (currentIndex < this.stages.length - 1) {
                // Move to next stage
                this.currentStage = this.stages[currentIndex + 1];
                this.logOperation('STAGE_COMPLETE', 'all', `Moving to stage: ${this.currentStage}`);
                // Try to get next file from new stage
                return this.getNextFile();
            } else {
                // All stages complete
                this.currentStage = null;
                this.logOperation('COMPLETE', 'all', 'All stages completed');
                return null;
            }
        }

        this.logOperation('NEXT_FILE', nextFile, `Processing ${this.currentStage}`);
        return nextFile;
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

        this.logOperation('COMPLETE', filePath, `${operation} complete${details ? ': ' + details : ''}`);

        // Log progress
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
        this.currentStage = null;
        // Keep the operation log for debugging
    },

    /**
     * Get debug information about current state
     * @returns {Object} Debug information
     */
    getDebugInfo() {
        return {
            currentStage: this.currentStage,
            queueSize: this.fileQueue.length,
            queuedFiles: [...this.fileQueue],
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