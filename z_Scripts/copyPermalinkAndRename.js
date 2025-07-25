/**
 * @typedef {import('obsidian').TFile} TFile
 * @typedef {import('obsidian').TFolder} TFolder
 */

/**
 * Process a single file
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        // Skip if already processed
        if (window.obsidianStateManager.isFileProcessed(file.path, 'rename')) {
            console.log(`Skipping ${file.basename}: already processed`);
            return;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        const permalink = cache?.permalink;
        
        // Skip if no permalink
        if (!permalink) {
            console.log(`Skipping ${file.basename}: no permalink found`);
            return;
        }

        // Skip if filename already matches
        if (file.basename === permalink) {
            console.log(`Skipping ${file.basename}: filename already matches permalink`);
            window.obsidianStateManager.markFileProcessed(file.path, 'rename');
            return;
        }

        // Check if target file exists
        const newPath = file.path.replace(file.basename, permalink);
        const targetFile = app.vault.getAbstractFileByPath(newPath);
        if (targetFile) {
            console.log(`Skipping ${file.basename}: target file already exists`);
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
            }

            // Use Obsidian's file manager to rename (this preserves links)
            await app.fileManager.renameFile(file, newPath);
            
            // Force final metadata cache refresh
            await app.metadataCache.trigger();
            
            console.log(`Renamed ${file.basename} to ${permalink}`);
            window.obsidianStateManager.markFileProcessed(newPath, 'rename');

        } catch (error) {
            console.error(`Error renaming ${file.basename}:`, error);
        }

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
        // Get all markdown files in the folder
        const files = folder.children || [];
        for (const file of files) {
            if (file instanceof TFile && file.extension === 'md') {
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
async function renameFromPermalink(tp) {
    // Try to acquire lock
    if (!await window.obsidianStateManager.acquireLock()) {
        console.log('Another script is running, please wait and try again');
        return;
    }

    try {
        const app = tp.obsidian.app;

        // Try to get selected files from file explorer
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0];
        if (fileExplorer?.view?.fileItems) {
            const selectedFiles = Object.values(fileExplorer.view.fileItems)
                .filter(item => item.file && item.selected)
                .map(item => item.file);
            
            if (selectedFiles && selectedFiles.length > 0) {
                // Process only the selected files
                for (const file of selectedFiles) {
                    if (file instanceof TFile && file.extension === 'md') {
                        await processFile(file, app);
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
            await processFile(targetFile, app);
            return;
        }

        // If we're processing a folder
        if (targetFile?.parent) {
            await processFolder(targetFile.parent, app);
        }

    } catch (error) {
        console.error('Error in renameFromPermalink:', error);
    } finally {
        // Always release the lock when done
        window.obsidianStateManager.releaseLock();
    }
}

// Export for Templater
exports.default = renameFromPermalink;

// Also make it available as a named export
exports.renameFromPermalink = renameFromPermalink;