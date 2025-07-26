/**
 * @typedef {import('obsidian').TFile} TFile
 * @typedef {import('obsidian').TFolder} TFolder
 */

/**
 * Process a single file
 * @param {object} params - Parameters object 
 * @param {TFile} params.file - The file to process
 * @param {App} params.app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(params) {
    const { file, app } = params;
    try {
        const stateManager = window.obsidianStateManager;
        
        // Skip if file doesn't need processing
        if (!stateManager.needsProcessing(file.path)) {
            return;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        const permalink = cache?.permalink;
        
        // Skip if no permalink
        if (!permalink) {
            stateManager.skipOperation(file.path, 'rename', 'no permalink found');
            return;
        }

        // Skip if filename already matches
        if (file.basename === permalink) {
            stateManager.skipOperation(file.path, 'rename', 'filename already matches permalink');
            return;
        }

        // Check if target file exists
        const newPath = file.path.replace(file.basename, permalink);
        const targetFile = app.vault.getAbstractFileByPath(newPath);
        if (targetFile) {
            stateManager.skipOperation(file.path, 'rename', 'target file already exists');
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
            const oldPath = file.path;
            
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
        console.error(`Error processing ${file.basename}:`, error);
    }
}

/**
 * Process all markdown files in a folder
 * @param {object} params - Parameters object
 * @param {TFolder} params.file - The folder to process (accessed as file in templater)
 * @param {App} params.app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(params) {
    const { file: folder, app } = params;
    try {
        const stateManager = window.obsidianStateManager;
        
        // Process files already in the queue from previous stage
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile()) !== null) {
            if (stateManager.currentStage !== 'rename') {
                break; // We've moved to next stage, exit this loop
            }
            
            const file = app.vault.getAbstractFileByPath(nextFilePath);
            if (file && file instanceof app.TFile) {
                await processFile({ file, app });
            } else {
                console.warn(`File not found or not a TFile: ${nextFilePath}`);
                stateManager.skipOperation(nextFilePath, 'rename', 'file not found');
            }
        }
    } catch (error) {
        console.error(`Error in processFolder:`, error);
    }
}

// Export a single function as default for Templater compatibility
module.exports = function(params) {
    const { file, app } = params;
    
    if (file.children) {
        // Target is a folder
        return processFolder(params);
    } else {
        // Target is a file
        return processFile(params);
    }
};