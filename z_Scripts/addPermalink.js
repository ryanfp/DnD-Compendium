/**
 * Trims and formats a title for use as a permalink
 * @param {string} title - The title to format
 * @returns {string} - The formatted permalink
 */
function trimTitle(title) {
    if (!title) return '';

    // Clean up the title
    let cleanTitle = title
        // Replace special characters with space
        .replace(/[^\w\s\-'&()]/g, ' ')  // Keep hyphen, apostrophe, ampersand, and parentheses
        // Replace multiple spaces with single space
        .replace(/\s+/g, ' ')
        // Trim whitespace
        .trim()
        // Split into words
        .split(' ')
        // Take first 5 words
        .slice(0, 5)
        // Join with hyphens
        .join('-')
        // Convert to lowercase
        .toLowerCase()
        // Clean up any remaining unwanted characters
        .replace(/['"]/g, '')  // Remove quotes
        .replace(/\(|\)/g, '') // Remove parentheses
        .replace(/&/g, 'and')  // Replace & with 'and'
        // Clean up multiple hyphens and hyphens at start/end
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');

    return cleanTitle;
}

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
 * Main function to add permalinks
 * @param {object} params - Parameters passed from Templater
 * @returns {Promise<void>}
 */
async function addPermalink(params) {
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
        console.error("Error in addPermalink:", error);
    }
}

/**
 * Process a single file to add permalink
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
        
        // Skip if permalink already exists and matches what we would generate
        const wouldBePermalink = trimTitle(file.basename);
        if (cache?.permalink === wouldBePermalink) {
            stateManager.skipOperation(filePath, 'permalink', 'already correct');
            return;
        }

        // Update frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.permalink = wouldBePermalink;
        });

        // Force metadata cache refresh
        await app.metadataCache.trigger();
        
        // Add a small delay to ensure cache is updated
        await new Promise(resolve => setTimeout(resolve, 100));

        console.log(`Added permalink for ${file.basename}`);
        stateManager.markOperationComplete(filePath, 'permalink');

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
        
        const folderPath = ensurePathIsString(folder.path);
        if (!folderPath) {
            console.error("Invalid folder path");
            return;
        }
        
        const stateManager = window.obsidianStateManager;
        
        // Start fresh folder processing
        stateManager.startFolderProcessing(folderPath);
        
        // Get all markdown files in the folder and queue them
        const files = folder.children || [];
        const filePaths = files
            .filter(file => file instanceof app.vault.TFile && file.extension === 'md')
            .map(file => ensurePathIsString(file.path))
            .filter(path => path); // Filter out empty paths
        
        stateManager.queueFiles(filePaths);
        
        // Process files from queue
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile()) !== null) {
            // Ensure path is a string
            nextFilePath = ensurePathIsString(nextFilePath);
            if (!nextFilePath) {
                console.error("Invalid file path in queue");
                continue;
            }
            
            if (stateManager.currentStage !== 'permalink') {
                break; // We've moved to next stage, exit this loop
            }
            
            try {
                const file = app.vault.getAbstractFileByPath(nextFilePath);
                if (file && file instanceof app.vault.TFile) {
                    await processFile(file, app);
                } else {
                    console.warn(`File not found or not a TFile: ${nextFilePath}`);
                    stateManager.skipOperation(nextFilePath, 'permalink', 'file not found');
                }
            } catch (error) {
                console.error(`Error processing file ${nextFilePath}:`, error);
                stateManager.skipOperation(nextFilePath, 'permalink', 'processing error');
            }
        }
    } catch (error) {
        console.error(`Error in processFolder:`, error);
    }
}

// Export a single function as default for Templater compatibility
module.exports = addPermalink;