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

/**
 * Main function to copy permalinks and rename files
 * @param {object} params - Parameters passed from Templater
 * @returns {Promise<void>}
 */
async function copyPermalinkAndRename(params) {
    try {
        const { file, app } = params;
        
        // Safety check - ensure state manager exists
        if (!window.obsidianStateManager) {
            try {
                console.log("State manager not found, initializing");
                // Try to initialize through various means
                if (app.plugins.plugins.templater?.templater?.functions?.user?.stateManager) {
                    await app.plugins.plugins.templater.templater.functions.user.stateManager(params);
                } else {
                    // Direct initialization if templater function not available
                    window.obsidianStateManager = {
                        // Minimal implementation to prevent errors
                        needsProcessing: () => true,
                        markOperationComplete: () => {},
                        skipOperation: () => {},
                        updatePathMapping: () => {},
                        getCurrentPath: (path) => path,
                        logOperation: (op, path, msg) => console.log(`[${op}] ${path}: ${msg}`)
                    };
                    console.log("Created minimal state manager");
                }
            } catch (initError) {
                console.error("Failed to initialize state manager:", initError);
                // Create minimal state manager to prevent further errors
                window.obsidianStateManager = {
                    needsProcessing: () => true,
                    markOperationComplete: () => {},
                    skipOperation: () => {},
                    updatePathMapping: () => {},
                    getCurrentPath: (path) => path,
                    logOperation: (op, path, msg) => console.log(`[${op}] ${path}: ${msg}`)
                };
            }
        }
        
        // Safety check for file
        if (!file) {
            console.error("File is undefined or null");
            return;
        }
        
        // Now process based on whether it's a file or folder
        if (file.children) {
            // It's a folder
            const folder = file;
            await processFolder(folder, app);
        } else {
            // It's a single file
            await processFile(file, app);
        }
    } catch (error) {
        console.error("Error in copyPermalinkAndRename:", error);
    }
}

/**
 * Process a single file
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        // Safety check for file
        if (!file) {
            console.error("File is undefined or null");
            return;
        }
        
        // Ensure path is a string
        const filePath = ensurePathIsString(file.path);
        if (!filePath) {
            console.error("Invalid file path:", file);
            return;
        }
        
        const stateManager = window.obsidianStateManager;
        
        // Skip if file doesn't need processing
        if (!stateManager.needsProcessing(filePath)) {
            return;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        const permalink = cache?.permalink;
        
        // Skip if no permalink
        if (!permalink) {
            stateManager.skipOperation(filePath, 'rename', 'no permalink found');
            return;
        }

        // Skip if filename already matches
        if (file.basename === permalink) {
            stateManager.skipOperation(filePath, 'rename', 'filename already matches permalink');
            return;
        }

        // Check if target file exists
        const fileDir = filePath.substring(0, filePath.lastIndexOf('/') + 1);
        const newPath = ensurePathIsString(fileDir + permalink + '.md');
        
        if (!newPath) {
            stateManager.skipOperation(filePath, 'rename', 'invalid new path');
            return;
        }
        
        const targetFile = app.vault.getAbstractFileByPath(newPath);
        if (targetFile) {
            stateManager.skipOperation(filePath, 'rename', 'target file already exists');
            return;
        }

        try {
            // First, ensure the old name is added as an alias if it doesn't exist
            const aliases = cache?.aliases || [];
            if (!aliases.includes(file.basename)) {
                await app.fileManager.processFrontMatter(file, (frontmatter) => {
                    frontmatter.aliases = frontmatter.aliases || [];
                    if (!frontmatter.aliases.includes(file.basename)) {
                        frontmatter.aliases.push(file.basename);
                    }
                });
                // Force metadata cache refresh after updating aliases
                await app.metadataCache.trigger();
                
                // Add a small delay to ensure cache is updated
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            // Store old path before renaming
            const oldPath = filePath;
            
            // Use Obsidian's file manager to rename (this preserves links)
            await app.fileManager.renameFile(file, newPath);
            
            // Update the path mapping in state manager
            stateManager.updatePathMapping(oldPath, newPath);
            
            // Force final metadata cache refresh
            await app.metadataCache.trigger();
            
            // Add a small delay to ensure cache is updated
            await new Promise(resolve => setTimeout(resolve, 100));
            
            console.log(`Renamed ${file.basename} to ${permalink}`);
            stateManager.markOperationComplete(newPath, 'rename');

        } catch (error) {
            console.error(`Error renaming ${file.basename}:`, error);
        }

    } catch (error) {
        const fileName = file ? (file.basename || "unknown") : "unknown";
        console.error(`Error processing ${fileName}:`, error);
    }
}

/**
 * Process all markdown files in a folder
 * @param {TFolder} folder - The folder to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(folder, app) {
    try {
        // Safety check for folder
        if (!folder || !folder.path) {
            console.error("Invalid folder object:", folder);
            return;
        }
        
        const stateManager = window.obsidianStateManager;
        
        // Process files already in the queue from previous stage
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile()) !== null) {
            // Ensure path is a string
            nextFilePath = ensurePathIsString(nextFilePath);
            if (!nextFilePath) {
                console.error("Invalid file path in queue");
                continue;
            }
            
            if (stateManager.currentStage !== 'rename') {
                break; // We've moved to next stage, exit this loop
            }
            
            try {
                const file = app.vault.getAbstractFileByPath(nextFilePath);
                if (file && file instanceof app.vault.TFile) {
                    await processFile(file, app);
                } else {
                    console.warn(`File not found or not a TFile: ${nextFilePath}`);
                    stateManager.skipOperation(nextFilePath, 'rename', 'file not found');
                }
            } catch (error) {
                console.error(`Error processing file ${nextFilePath}:`, error);
                stateManager.skipOperation(nextFilePath, 'rename', 'processing error');
            }
        }
    } catch (error) {
        console.error(`Error in processFolder:`, error);
    }
}

// Export a single function as default for Templater compatibility
module.exports = copyPermalinkAndRename;