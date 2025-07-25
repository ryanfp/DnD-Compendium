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
 * Process a single file
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        const stateManager = window.obsidianStateManager;
        
        // Skip if already processed or not ready
        if (stateManager.isFileProcessed(file.path, 'permalink')) {
            console.log(`Skipping ${file.basename}: already processed`);
            return;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if permalink already exists and matches what we would generate
        const wouldBePermalink = trimTitle(file.basename);
        if (cache?.permalink === wouldBePermalink) {
            console.log(`Skipping ${file.basename}: permalink already correct`);
            stateManager.markOperationComplete(file.path, 'permalink');
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
        stateManager.markOperationComplete(file.path, 'permalink');

    } catch (error) {
        console.error(`Error processing ${file.basename}:`, error);
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
        const stateManager = window.obsidianStateManager;
        
        // Start fresh folder processing
        stateManager.startFolderProcessing(folder.path);
        
        // Get all markdown files in the folder and queue them
        const files = folder.children || [];
        const filePaths = files
            .filter(file => file instanceof TFile && file.extension === 'md')
            .map(file => file.path);
        
        stateManager.queueFiles(filePaths);
        
        // Process files from queue
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile('permalink')) !== null) {
            const file = app.vault.getAbstractFileByPath(nextFilePath);
            if (file instanceof TFile) {
                await processFile(file, app);
                // Add a delay between files
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
    }
}

/**
 * Main function for Templater
 * @param {any} tp - Templater object
 */
async function addPermalink(tp) {
    const stateManager = window.obsidianStateManager;
    
    // Try to acquire lock
    if (!await stateManager.acquireLock()) {
        console.log('Another script is running, please wait and try again');
        return;
    }

    try {
        const app = tp.app;

        // Try to get selected files from file explorer
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0];
        if (fileExplorer?.view?.fileItems) {
            const selectedFiles = Object.values(fileExplorer.view.fileItems)
                .filter(item => item.file && item.selected)
                .map(item => item.file);
            
            if (selectedFiles && selectedFiles.length > 0) {
                // Queue selected files
                const filePaths = selectedFiles
                    .filter(file => file instanceof TFile && file.extension === 'md')
                    .map(file => file.path);
                
                stateManager.queueFiles(filePaths);
                
                // Process files from queue
                let nextFilePath;
                while ((nextFilePath = stateManager.getNextFile('permalink')) !== null) {
                    const file = app.vault.getAbstractFileByPath(nextFilePath);
                    if (file instanceof TFile) {
                        await processFile(file, app);
                        // Add a delay between files
                        await new Promise(resolve => setTimeout(resolve, 100));
                    }
                }
                return;
            }
        }

        // If no selection, try Templater or active file
        let targetFile = null;

        // Try Templater context
        try {
            targetFile = tp.file.find_tfile(tp.file.path(true));
        } catch (e) {
            // Ignore error if tp.file.path fails
        }

        // If no file from Templater, try active file
        if (!targetFile) {
            targetFile = app.workspace.getActiveFile();
        }

        // If we have a single file, process it
        if (targetFile && targetFile.extension === 'md') {
            stateManager.queueFiles([targetFile.path]);
            await processFile(targetFile, app);
            return;
        }

        // If we're processing a folder
        if (targetFile?.parent) {
            await processFolder(targetFile.parent, app);
        }

    } catch (error) {
        console.error('Error in addPermalink:', error);
    } finally {
        // Always release the lock when done
        stateManager.releaseLock();
    }
}

// Export for Templater
module.exports = addPermalink;
module.exports.addPermalink = addPermalink;
module.exports.trimTitle = trimTitle; 