/**
 * Shared state manager for Obsidian scripts
 */

// Create the state manager instance
const stateManagerInstance = {
    processedFiles: new Set(),
    completedFiles: new Set(),
    scriptLock: false,
    lockTimeout: 30000, // 30 seconds

    /**
     * Clear all state
     */
    clearState() {
        this.processedFiles.clear();
        this.completedFiles.clear();
        this.scriptLock = false;
    },

    /**
     * Check if a file has been processed for a specific operation
     * @param {string} filePath - The file path to check
     * @param {string} operation - The operation being performed
     * @returns {boolean}
     */
    isFileProcessed(filePath, operation) {
        // If file is fully completed, all operations are processed
        if (this.completedFiles.has(filePath)) {
            return true;
        }
        const key = `${filePath}:${operation}`;
        return this.processedFiles.has(key);
    },

    /**
     * Mark a file as processed for a specific operation
     * @param {string} filePath - The file path to mark
     * @param {string} operation - The operation being performed
     */
    markFileProcessed(filePath, operation) {
        const key = `${filePath}:${operation}`;
        this.processedFiles.add(key);
        
        // Check if all operations are complete
        const hasPermalink = this.processedFiles.has(`${filePath}:permalink`);
        const hasRename = this.processedFiles.has(`${filePath}:rename`);
        const hasSource = this.processedFiles.has(`${filePath}:source`);
        
        if (hasPermalink && hasRename && hasSource) {
            this.completedFiles.add(filePath);
            console.log(`All operations completed for ${filePath}`);
        }
    },

    /**
     * Check if a file has completed all operations
     * @param {string} filePath - The file path to check
     * @returns {boolean}
     */
    isFileComplete(filePath) {
        return this.completedFiles.has(filePath);
    },

    /**
     * Try to acquire the script lock
     * @returns {Promise<boolean>}
     */
    async acquireLock() {
        const startTime = Date.now();
        while (this.scriptLock) {
            if (Date.now() - startTime > this.lockTimeout) {
                console.log('Timeout waiting for script lock');
                return false;
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        this.scriptLock = true;
        return true;
    },

    /**
     * Release the script lock
     */
    releaseLock() {
        this.scriptLock = false;
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

// Export both the function and the instance
module.exports = getStateManager;
module.exports.getStateManager = getStateManager;
module.exports.stateManager = stateManagerInstance; 