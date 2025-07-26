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

            // Use Obsidian's file manager to rename (this preserves links)
            await app.fileManager.renameFile(file, newPath);
            
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
 * Updates a link's display text in a file's content
 * @param {TFile} file - The file containing the link
 * @param {string} oldPath - The old file path
 * @param {string} newPath - The new file path
 * @param {string} oldName - The old file name
 * @param {App} app - The Obsidian app instance
 */
async function updateLinkDisplayText(file, oldPath, newPath, oldName, app) {
    try {
        const content = await app.vault.read(file);
        let newContent = content;

        // Update wiki-style links that use the old name as display text
        // [[oldPath|oldName]] -> [[newPath|oldName]]
        const wikiLinkRegex = new RegExp(`\\[\\[([^\\]|]*${oldPath})[^\\]]*\\|${oldName}\\]\\]`, 'g');
        newContent = newContent.replace(wikiLinkRegex, (match, p1) => {
            return `[[${newPath}|${oldName}]]`;
        });

        // Update markdown-style links that use the old name as display text
        // [oldName](oldPath) -> [oldName](newPath)
        const markdownLinkRegex = new RegExp(`\\[${oldName}\\]\\(([^\\)]*)${oldPath}[^\\)]*\\)`, 'g');
        newContent = newContent.replace(markdownLinkRegex, (match, p1) => {
            return `[${oldName}](${newPath})`;
        });

        // Only modify the file if changes were made
        if (newContent !== content) {
            await app.vault.modify(file, newContent);
            
            // Force metadata cache refresh after updating links
            await app.metadataCache.trigger();
            
            // Add a small delay to ensure cache is updated
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    } catch (error) {
        console.error(`Error updating links in ${file.path}:`, error);
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
        while ((nextFilePath = stateManager.getNextFile()) !== null) {
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
async function copyPermalinkAndRename(tp) {
    try {
        const app = tp.app;
        const stateManager = window.obsidianStateManager;

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
                while ((nextFilePath = stateManager.getNextFile()) !== null) {
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
        console.error('Error in copyPermalinkAndRename:', error);
    }
}

// Export for Templater
module.exports = copyPermalinkAndRename;
module.exports.copyPermalinkAndRename = copyPermalinkAndRename;