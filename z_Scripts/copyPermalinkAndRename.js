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
        // Skip if already processed
        if (stateManager.isFileProcessed(file.path, 'rename')) {
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
            stateManager.markFileProcessed(file.path, 'rename');
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

            // Get all files that link to this one
            const backlinks = app.metadataCache.getBacklinksForFile(file);
            if (backlinks) {
                // Update display text in all backlinks before renaming
                for (const [sourcePath, _] of backlinks.data.entries()) {
                    const sourceFile = app.vault.getAbstractFileByPath(sourcePath);
                    if (sourceFile instanceof TFile) {
                        await updateLinkDisplayText(sourceFile, file.basename, permalink, file.basename, app);
                    }
                }
                // Force metadata cache refresh after updating backlinks
                await app.metadataCache.trigger();
            }

            // Use Obsidian's file manager to rename (this preserves links)
            await app.fileManager.renameFile(file, newPath);
            
            // Force final metadata cache refresh
            await app.metadataCache.trigger();
            
            console.log(`Renamed ${file.basename} to ${permalink}`);
            stateManager.markFileProcessed(newPath, 'rename');

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
        // Get all markdown files in the folder
        const files = folder.children || [];
        
        // First, check which files need processing
        const filesToProcess = files.filter(file => 
            file instanceof TFile && 
            file.extension === 'md' && 
            !stateManager.isFileComplete(file.path)
        );

        console.log(`Found ${filesToProcess.length} files to process in ${folder.path}`);

        // Process each file that needs it
        for (const file of filesToProcess) {
            await processFile(file, app);
            // Add a delay between files
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
    }
}

/**
 * Main function for Templater
 * @param {any} tp - Templater object
 */
function copyPermalinkAndRename(tp) {
    const app = tp.app;
    const stateManager = window.obsidianStateManager;

    // Try to acquire lock
    if (!stateManager.acquireLock()) {
        console.log('Another script is running, please wait and try again');
        return;
    }

    try {
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
                        processFile(file, app);
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
            processFile(targetFile, app);
            return;
        }

        // If we're processing a folder
        if (targetFile?.parent) {
            processFolder(targetFile.parent, app);
        }

    } catch (error) {
        console.error('Error in copyPermalinkAndRename:', error);
    } finally {
        // Always release the lock when done
        stateManager.releaseLock();
    }
}

// Export both named and default for Templater
module.exports = copyPermalinkAndRename;
module.exports.copyPermalinkAndRename = copyPermalinkAndRename;