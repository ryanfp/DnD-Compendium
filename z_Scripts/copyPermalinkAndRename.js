/**
 * @typedef {import('obsidian').TFile} TFile
 * @typedef {import('obsidian').TFolder} TFolder
 */

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
 * Track files we've already processed to prevent duplicates
 */
const processedFiles = new Set();

/**
 * Global lock to prevent concurrent script execution
 */
let scriptLock = false;

/**
 * Wait for script lock to be released
 * @param {number} timeout - Maximum time to wait in milliseconds
 * @returns {Promise<boolean>} - True if lock was acquired, false if timeout
 */
async function waitForLock(timeout = 30000) {
    const startTime = Date.now();
    while (scriptLock) {
        if (Date.now() - startTime > timeout) {
            console.log('Timeout waiting for script lock');
            return false;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    scriptLock = true;
    return true;
}

/**
 * Release the script lock
 */
function releaseLock() {
    scriptLock = false;
}

/**
 * Check if a file needs processing
 * @param {TFile} file - The file to check
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<{needsProcessing: boolean, reason: string}>}
 */
async function checkFileStatus(file, app) {
    // Skip if we've already processed this file
    if (processedFiles.has(file.path)) {
        return { needsProcessing: false, reason: "already processed" };
    }

    // Get the frontmatter
    const cache = app.metadataCache.getFileCache(file)?.frontmatter;
    
    // Check if permalink exists (required for rename)
    if (!cache?.permalink) {
        return { needsProcessing: false, reason: "permalink required before rename" };
    }

    // Check if filename already matches permalink
    if (file.basename === cache.permalink) {
        return { needsProcessing: false, reason: "filename already matches permalink" };
    }

    // Check if target file exists
    const newPath = file.path.replace(file.basename, cache.permalink);
    const targetFile = app.vault.getAbstractFileByPath(newPath);
    if (targetFile) {
        return { needsProcessing: false, reason: "target file already exists" };
    }

    return { needsProcessing: true, reason: "needs rename" };
}

/**
 * Process a single file
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        // Check if file needs processing
        const status = await checkFileStatus(file, app);
        if (!status.needsProcessing) {
            console.log(`Skipping ${file.basename}: ${status.reason}`);
            processedFiles.add(file.path);
            return;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        const permalink = cache?.permalink;
        const currentName = file.basename;

        try {
            // First, ensure the old name is added as an alias if it doesn't exist
            const aliases = cache?.aliases || [];
            if (!aliases.includes(currentName)) {
                await app.fileManager.processFrontMatter(file, (frontmatter) => {
                    frontmatter.aliases = frontmatter.aliases || [];
                    if (!frontmatter.aliases.includes(currentName)) {
                        frontmatter.aliases.push(currentName);
                    }
                });
                // Force metadata cache refresh after updating aliases
                await app.metadataCache.trigger();
            }

            // Get the old and new paths
            const oldPath = file.path;
            const newPath = file.path.replace(file.basename, permalink);

            // Get all files that link to this one
            const backlinks = app.metadataCache.getBacklinksForFile(file);
            if (backlinks) {
                // Update display text in all backlinks before renaming
                for (const [sourcePath, _] of backlinks.data.entries()) {
                    const sourceFile = app.vault.getAbstractFileByPath(sourcePath);
                    if (sourceFile instanceof TFile) {
                        await updateLinkDisplayText(sourceFile, currentName, permalink, currentName, app);
                    }
                }
                // Force metadata cache refresh after updating backlinks
                await app.metadataCache.trigger();
            }
            
            // Use Obsidian's file manager to rename (this preserves basic links)
            await app.fileManager.renameFile(file, newPath);
            
            // Force final metadata cache refresh
            await app.metadataCache.trigger();
            
            console.log(`Renamed ${file.basename} to ${permalink}`);
            processedFiles.add(newPath);

        } catch (error) {
            console.error(`Error renaming ${file.basename}:`, error);
        }

    } catch (error) {
        console.error(`Error processing ${file.basename}:`, error);
    }
}

/**
 * Process all markdown files in a folder sequentially
 * @param {TFolder} folder - The folder to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(folder, app) {
    try {
        // Clear the processed files set when starting a new folder
        processedFiles.clear();
        
        // Get all markdown files in the folder
        const files = folder.children || [];
        for (const file of files) {
            if (file instanceof TFile && file.extension === 'md') {
                await processFile(file, app);
            }
        }
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
    }
}

/**
 * Main function to handle both single file and folder cases
 * @param {Object} tp - The Templater object (optional)
 * @returns {Promise<void>}
 */
async function copyPermalinkAndRename(tp = null) {
    // Try to acquire lock
    if (!await waitForLock()) {
        console.log('Another script is running, please wait and try again');
        return;
    }

    try {
        // Clear the processed files set at the start
        processedFiles.clear();
        
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
        if (tp) {
            try {
                targetFile = tp.file.find_tfile(tp.file.path(true));
            } catch (e) {
                // Ignore error if tp.file.path fails
            }
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
        console.error('Error in copyPermalinkAndRename:', error);
    } finally {
        // Always release the lock when done
        releaseLock();
    }
}

// Export the main function as default
module.exports = copyPermalinkAndRename;