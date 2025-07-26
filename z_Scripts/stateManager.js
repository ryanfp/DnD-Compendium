/**
 * Shared state manager for Obsidian scripts
 * @param {object} params - Parameters from Templater (not used but required for compatibility)
 * @returns {object} The state manager instance for debugging
 */
function initializeStateManager(params) {
    // Create the state manager instance if it doesn't exist
    if (!window.obsidianStateManager) {
        window.obsidianStateManager = {
            fileQueue: [], // Array of all files to process
            stageQueues: {
                'permalink': [],
                'rename': [],
                'source': []
            }, // Queue for each stage
            fileStatus: new Map(), // Map of file path to its completed stages
            filePathMappings: new Map(), // Track old path to new path mappings
            currentStage: 'permalink', // Current processing stage
            stages: ['permalink', 'rename', 'source'],
            operationLog: [], // Track operation history
            folderProcessing: false, // Flag indicating if we're processing a folder
            currentFolder: null, // Current folder being processed

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
                this.filePathMappings.clear();
                this.currentStage = this.stages[0];
                
                // Initialize status for all files and add to first stage queue
                this.stageQueues = {
                    'permalink': [],
                    'rename': [],
                    'source': []
                };
                
                filePaths.forEach(path => {
                    this.fileStatus.set(path, []);
                    this.stageQueues[this.currentStage].push(path);
                    this.logOperation('QUEUE_ADD', path, `Added to ${this.currentStage} queue`);
                });
            },

            /**
             * Start processing a folder
             * @param {string} folderPath - Path of the folder to process
             */
            startFolderProcessing(folderPath) {
                this.folderProcessing = true;
                this.currentFolder = folderPath;
                this.logOperation('FOLDER_START', folderPath, 'Starting folder processing');
            },

            /**
             * End folder processing
             */
            endFolderProcessing() {
                this.folderProcessing = false;
                this.currentFolder = null;
                this.logOperation('FOLDER_END', 'none', 'Finished folder processing');
            },

            /**
             * Update path mapping when a file is renamed
             * @param {string} oldPath - Original file path
             * @param {string} newPath - New file path after renaming
             */
            updatePathMapping(oldPath, newPath) {
                this.filePathMappings.set(oldPath, newPath);
                
                // Transfer the status from old path to new path
                const status = this.fileStatus.get(oldPath) || [];
                this.fileStatus.set(newPath, [...status]);
                
                // Replace old path with new path in all stage queues
                Object.keys(this.stageQueues).forEach(stage => {
                    const index = this.stageQueues[stage].indexOf(oldPath);
                    if (index !== -1) {
                        this.stageQueues[stage][index] = newPath;
                    }
                });
                
                this.logOperation('PATH_MAPPING', `${oldPath} -> ${newPath}`, 'Updated path mapping after rename');
            },

            /**
             * Get next file to process in current stage
             * @returns {string|null} Next file path or null if stage complete
             */
            getNextFile() {
                // If no current stage, we're done
                if (!this.currentStage) {
                    this.logOperation('COMPLETE', 'all', 'All stages completed');
                    if (this.folderProcessing) {
                        this.endFolderProcessing();
                    }
                    return null;
                }

                // Get next file from current stage queue
                const nextFile = this.stageQueues[this.currentStage].shift();
                if (!nextFile) {
                    // Current stage queue is empty, move to next stage
                    const currentIndex = this.stages.indexOf(this.currentStage);
                    if (currentIndex < this.stages.length - 1) {
                        const nextStage = this.stages[currentIndex + 1];
                        this.currentStage = nextStage;
                        
                        // Move all files that need the next stage processing to its queue
                        this.fileQueue.forEach(path => {
                            // Get current path (may have been renamed)
                            const currentPath = this.getCurrentPath(path);
                            if (currentPath && !this.hasCompleted(currentPath, nextStage)) {
                                this.stageQueues[nextStage].push(currentPath);
                                this.logOperation('STAGE_CHANGE', currentPath, 
                                    `Added to ${nextStage} queue`);
                            }
                        });
                        
                        // Try again with the new stage
                        return this.getNextFile();
                    } else {
                        // All stages complete
                        this.currentStage = null;
                        this.logOperation('ALL_COMPLETE', 'all', 'All processing complete');
                        if (this.folderProcessing) {
                            this.endFolderProcessing();
                        }
                        return null;
                    }
                }
                
                return nextFile;
            },
            
            /**
             * Get the current path for a file (accounting for renames)
             * @param {string} originalPath - The original file path
             * @returns {string} The current path of the file
             */
            getCurrentPath(originalPath) {
                // Follow path mappings to get the most current path
                let currentPath = originalPath;
                let nextPath;
                while ((nextPath = this.filePathMappings.get(currentPath))) {
                    currentPath = nextPath;
                }
                return currentPath;
            },

            /**
             * Check if a file needs processing in the current stage
             * @param {string} filePath - The file path to check
             * @returns {boolean} True if the file needs processing
             */
            needsProcessing(filePath) {
                // Get current path in case file was renamed
                const currentPath = this.getCurrentPath(filePath);
                
                // Check if this file is already processed for current stage
                const completedStages = this.fileStatus.get(currentPath) || [];
                return !completedStages.includes(this.currentStage);
            },

            /**
             * Mark a file's operation as complete for the current stage
             * @param {string} filePath - The file path that was processed
             * @param {string} stage - The stage that was completed
             */
            markOperationComplete(filePath, stage) {
                const currentPath = this.getCurrentPath(filePath);
                const completedStages = this.fileStatus.get(currentPath) || [];
                if (!completedStages.includes(stage)) {
                    completedStages.push(stage);
                    this.fileStatus.set(currentPath, completedStages);
                }
                this.logOperation('COMPLETE', currentPath, `Completed ${stage} operation`);
            },

            /**
             * Skip a file's operation for a stage
             * @param {string} filePath - The file path to skip
             * @param {string} stage - The stage to skip
             * @param {string} reason - Reason for skipping
             */
            skipOperation(filePath, stage, reason) {
                const currentPath = this.getCurrentPath(filePath);
                const completedStages = this.fileStatus.get(currentPath) || [];
                if (!completedStages.includes(stage)) {
                    completedStages.push(stage);
                    this.fileStatus.set(currentPath, completedStages);
                }
                this.logOperation('SKIP', currentPath, `Skipped ${stage}: ${reason}`);
            },
            
            /**
             * Check if a file has completed a specific stage
             * @param {string} filePath - The file path to check
             * @param {string} stage - The stage to check
             * @returns {boolean} True if the file has completed the stage
             */
            hasCompleted(filePath, stage) {
                const currentPath = this.getCurrentPath(filePath);
                const completedStages = this.fileStatus.get(currentPath) || [];
                return completedStages.includes(stage);
            },

            /**
             * Clear the state (for testing)
             */
            clearState() {
                this.fileQueue = [];
                this.stageQueues = {
                    'permalink': [],
                    'rename': [],
                    'source': []
                };
                this.fileStatus.clear();
                this.filePathMappings.clear();
                this.currentStage = 'permalink';
                this.operationLog = [];
                this.folderProcessing = false;
                this.currentFolder = null;
            },
            
            /**
             * Get debug info about the current state
             * @returns {object} Debug info
             */
            getDebugInfo() {
                return {
                    fileQueue: [...this.fileQueue],
                    stageQueues: {
                        permalink: [...this.stageQueues.permalink],
                        rename: [...this.stageQueues.rename],
                        source: [...this.stageQueues.source]
                    },
                    fileStatus: Object.fromEntries(this.fileStatus),
                    filePathMappings: Object.fromEntries(this.filePathMappings),
                    currentStage: this.currentStage,
                    folderProcessing: this.folderProcessing,
                    currentFolder: this.currentFolder
                };
            }
        };
        
        console.log('State manager initialized');
    } else {
        console.log('State manager already exists');
    }
    
    return window.obsidianStateManager.getDebugInfo();
}

// Export a single function as default for Templater compatibility
module.exports = initializeStateManager;