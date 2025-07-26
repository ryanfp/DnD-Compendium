/**
 * Initialize the shared state manager
 * @param {object} params - Templater parameters (not used but required for compatibility)
 * @returns {object} The state manager instance
 */
function initializeStateManager(params) {
    console.log("Initializing or retrieving state manager...");
    
    /**
     * Safe path handling - ensure path is a string
     * @param {any} path - The path to check
     * @returns {string} The path as a string
     */
    function ensurePathIsString(path) {
        if (path === null || path === undefined) {
            return "";
        }
        
        if (typeof path !== 'string') {
            // Try to convert to string if possible
            try {
                return String(path);
            } catch (e) {
                console.error("Could not convert path to string:", path);
                return "";
            }
        }
        
        return path;
    }
    
    // Only create if it doesn't already exist
    if (!window.obsidianStateManager) {
        console.log("Creating new state manager");
        window.obsidianStateManager = {
            fileQueue: [], 
            stageQueues: {
                'permalink': [],
                'rename': [],
                'source': []
            },
            fileStatus: new Map(),
            filePathMappings: new Map(),
            currentStage: 'permalink',
            stages: ['permalink', 'rename', 'source'],
            operationLog: [],
            folderProcessing: false,
            currentFolder: null,
            
            // Helper methods with path safety
            logOperation(operation, filePath, details) {
                const timestamp = new Date().toISOString();
                // Ensure path is a string
                filePath = ensurePathIsString(filePath);
                
                const logEntry = {
                    timestamp,
                    operation,
                    filePath,
                    details,
                    currentStage: this.currentStage
                };
                console.log(`[${timestamp}] ${operation} - ${filePath} - ${details}`);
                this.operationLog.push(logEntry);
            },
            
            getStageProgress() {
                if (!this.currentStage) return 'No stage active';
                const completed = Array.from(this.fileStatus.values())
                    .filter(stages => stages.includes(this.currentStage))
                    .length;
                return `${completed}/${this.fileQueue.length} files completed ${this.currentStage}`;
            },
            
            queueFiles(filePaths) {
                this.logOperation('QUEUE', 'multiple', `Starting new batch with ${filePaths.length} files`);
                // Ensure all paths are strings
                this.fileQueue = filePaths.map(path => ensurePathIsString(path)).filter(path => path);
                
                this.fileStatus.clear();
                this.filePathMappings.clear();
                this.currentStage = this.stages[0];
                
                // Initialize status for all files and add to first stage queue
                this.stageQueues = {
                    'permalink': [],
                    'rename': [],
                    'source': []
                };
                
                this.fileQueue.forEach(path => {
                    this.fileStatus.set(path, []);
                    this.stageQueues[this.currentStage].push(path);
                    this.logOperation('QUEUE_ADD', path, `Added to ${this.currentStage} queue`);
                });
            },
            
            startFolderProcessing(folderPath) {
                this.folderProcessing = true;
                this.currentFolder = ensurePathIsString(folderPath);
                this.logOperation('FOLDER_START', this.currentFolder, 'Starting folder processing');
            },
            
            endFolderProcessing() {
                this.folderProcessing = false;
                this.currentFolder = null;
                this.logOperation('FOLDER_END', 'none', 'Finished folder processing');
            },
            
            updatePathMapping(oldPath, newPath) {
                oldPath = ensurePathIsString(oldPath);
                newPath = ensurePathIsString(newPath);
                
                if (!oldPath || !newPath) {
                    console.error("Invalid path for mapping:", { oldPath, newPath });
                    return;
                }
                
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
                            // Ensure path is a string
                            path = ensurePathIsString(path);
                            if (!path) return;
                            
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
                
                return ensurePathIsString(nextFile);
            },
            
            getCurrentPath(originalPath) {
                // Ensure path is a string
                originalPath = ensurePathIsString(originalPath);
                if (!originalPath) return "";
                
                // Follow path mappings to get the most current path
                let currentPath = originalPath;
                let nextPath;
                
                // Safety counter to prevent infinite loops
                let safetyCounter = 0;
                const MAX_REDIRECTS = 10;
                
                while (safetyCounter < MAX_REDIRECTS && 
                      (nextPath = this.filePathMappings.get(currentPath))) {
                    // Ensure next path is a string
                    nextPath = ensurePathIsString(nextPath);
                    if (!nextPath) break;
                    
                    currentPath = nextPath;
                    safetyCounter++;
                }
                
                return currentPath;
            },
            
            needsProcessing(filePath) {
                // Ensure path is a string
                filePath = ensurePathIsString(filePath);
                if (!filePath) return false;
                
                // Get current path in case file was renamed
                const currentPath = this.getCurrentPath(filePath);
                
                // Check if this file is already processed for current stage
                const completedStages = this.fileStatus.get(currentPath) || [];
                return !completedStages.includes(this.currentStage);
            },
            
            markOperationComplete(filePath, stage) {
                // Ensure path is a string
                filePath = ensurePathIsString(filePath);
                if (!filePath) {
                    console.error("Invalid file path for marking complete");
                    return;
                }
                
                const currentPath = this.getCurrentPath(filePath);
                const completedStages = this.fileStatus.get(currentPath) || [];
                if (!completedStages.includes(stage)) {
                    completedStages.push(stage);
                    this.fileStatus.set(currentPath, completedStages);
                }
                this.logOperation('COMPLETE', currentPath, `Completed ${stage} operation`);
            },
            
            skipOperation(filePath, stage, reason) {
                // Ensure path is a string
                filePath = ensurePathIsString(filePath);
                if (!filePath) {
                    console.error("Invalid file path for skipping");
                    return;
                }
                
                const currentPath = this.getCurrentPath(filePath);
                const completedStages = this.fileStatus.get(currentPath) || [];
                if (!completedStages.includes(stage)) {
                    completedStages.push(stage);
                    this.fileStatus.set(currentPath, completedStages);
                }
                this.logOperation('SKIP', currentPath, `Skipped ${stage}: ${reason}`);
            },
            
            hasCompleted(filePath, stage) {
                // Ensure path is a string
                filePath = ensurePathIsString(filePath);
                if (!filePath) return false;
                
                const currentPath = this.getCurrentPath(filePath);
                const completedStages = this.fileStatus.get(currentPath) || [];
                return completedStages.includes(stage);
            },
            
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
    } else {
        console.log("Using existing state manager");
    }
    
    return window.obsidianStateManager;
}

// Export a single function as default for Templater compatibility
module.exports = initializeStateManager;