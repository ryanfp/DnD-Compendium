/**
 * Shared state manager for Obsidian scripts
 */

// Global state manager for Obsidian scripts
const obsidianStateManager = {
    processedFiles: new Set(),
    scriptLock: false,
    lockTimeout: 30000, // 30 seconds

    /**
     * Clear all state
     */
    clearState() {
        this.processedFiles.clear();
        this.scriptLock = false;
    },

    /**
     * Check if a file has been processed
     * @param {string} filePath - The file path to check
     * @param {string} operation - The operation being performed
     * @returns {boolean}
     */
    isFileProcessed(filePath, operation) {
        const key = `${filePath}:${operation}`;
        return this.processedFiles.has(key);
    },

    /**
     * Mark a file as processed
     * @param {string} filePath - The file path to mark
     * @param {string} operation - The operation being performed
     */
    markFileProcessed(filePath, operation) {
        const key = `${filePath}:${operation}`;
        this.processedFiles.add(key);
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
    window.obsidianStateManager = obsidianStateManager;
}

// Export for Templater
module.exports = obsidianStateManager; 