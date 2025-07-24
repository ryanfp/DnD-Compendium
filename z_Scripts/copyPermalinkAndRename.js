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
 * Process a single file
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        // Skip if we've already processed this file
        if (processedFiles.has(file.path)) {
            console.log(`Skipping ${file.basename}: already processed`);
            return;
        }
        processedFiles.add(file.path);

        // Add a delay to ensure any previous operations have completed
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        const permalink = cache?.permalink;
        
        if (!permalink) {
            console.log(`No permalink found in ${file.basename}`);
            return;
        }

        // Get current filename without extension
        const currentName = file.basename;
        
        // If the current filename already matches the permalink, skip renaming
        if (currentName === permalink) {
            console.log(`Skipping ${file.basename}: filename already matches permalink`);
            return;
        }

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
                // Small delay to ensure frontmatter is saved
                await new Promise(resolve => setTimeout(resolve, 100));
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
                // Small delay to ensure all backlinks are updated
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            
            // Check if the target file exists to prevent errors
            const targetFile = app.vault.getAbstractFileByPath(newPath);
            if (targetFile) {
                console.log(`Cannot rename ${file.basename}: target file ${permalink} already exists`);
                return;
            }
            
            // Use Obsidian's file manager to rename (this preserves basic links)
            await app.fileManager.renameFile(file, newPath);
            console.log(`Renamed ${file.basename} to ${permalink}`);

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
        // Clear the processed files set when starting a new folder
        processedFiles.clear();
        
        // Get all markdown files in the folder
        const files = folder.children || [];
        for (const file of files) {
            if (file instanceof TFile && file.extension === 'md') {
                await processFile(file, app);
                // Add a delay between files to prevent race conditions
                await new Promise(resolve => setTimeout(resolve, 300));
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
                        // Add a delay between files to prevent race conditions
                        await new Promise(resolve => setTimeout(resolve, 300));
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
    }
}

// Export the main function as default
module.exports = copyPermalinkAndRename;