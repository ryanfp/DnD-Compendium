/**
 * Renames a file to match its permalink frontmatter using Smart Rename
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        // Helper function for controlled delays
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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

        // Try to use Smart Rename's command API first
        const smartRenameCommand = app.commands.commands['smart-rename:smart-rename'];
        if (smartRenameCommand) {
            // Focus/select the file in the file explorer
            const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0]?.view;
            if (fileExplorer) {
                fileExplorer.revealInFolder(file);
                await wait(50);
            }

            // Execute Smart Rename command
            await app.commands.executeCommandById('smart-rename:smart-rename');
            await wait(100);

            // Get the rename modal input
            const renameModal = document.querySelector('.modal-container input[type="text"]');
            if (renameModal) {
                renameModal.focus();
                await wait(50);

                // Select all existing text
                renameModal.select();
                await wait(50);

                // Set new value
                renameModal.value = permalink;
                renameModal.dispatchEvent(new Event('input'));
                await wait(50);

                // Submit the rename
                const enterEvent = new KeyboardEvent('keydown', {
                    key: 'Enter',
                    code: 'Enter',
                    keyCode: 13,
                    which: 13,
                    bubbles: true,
                    cancelable: true
                });
                renameModal.dispatchEvent(enterEvent);

                // As backup, also try clicking the submit button
                await wait(50);
                const submitButton = document.querySelector('.modal-button-container button.mod-cta');
                if (submitButton) {
                    submitButton.click();
                }

                console.log(`Renamed ${file.basename} to ${permalink}`);
            } else {
                console.warn(`Could not find rename modal for ${file.basename}`);
            }
        } else {
            console.warn('Smart Rename plugin command not found');
        }

    } catch (error) {
        console.error(`Error processing ${file.basename}:`, error);
    }
}

/**
 * Process all files in a folder
 * @param {TFolder} folder - The folder to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(folder, app) {
    if (!folder || !folder.children) {
        console.warn('Invalid folder object');
        return;
    }

    for (const file of folder.children) {
        if (file.extension === 'md') {
            await processFile(file, app);
            // Add a small delay between files to ensure Smart Rename modal closes
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }
}

/**
 * Main function to handle both single file and folder cases
 * @param {Object} tp - The Templater object
 * @returns {Promise<void>}
 */
async function copyPermalinkAndRename(tp) {
    try {
        // Try to get the file from the active editor first
        let targetFile = app.workspace.getActiveFile();

        // If no active file, try to get it from Templater
        if (!targetFile && tp) {
            try {
                targetFile = tp.file.find_tfile(tp.file.path(true));
            } catch (e) {
                // Ignore error if tp.file.path fails
            }
        }

        // If still no file, check if we're processing a folder with Linter
        if (!targetFile) {
            const activeView = app.workspace.getActiveViewOfType(app.workspace.getLeaf());
            if (activeView && activeView.file) {
                targetFile = activeView.file;
            }
        }

        // If we found a target
        if (targetFile) {
            // Check if it's a folder
            if (targetFile.children) {
                await processFolder(targetFile, app);
            } else {
                await processFile(targetFile, app);
            }
        } else {
            // No file or folder found - check if we're in a Linter folder context
            const explorerView = app.workspace.getLeavesOfType('file-explorer')[0]?.view;
            if (explorerView) {
                const selectedItems = explorerView.getSelectedItems();
                if (selectedItems && selectedItems.length > 0) {
                    for (const item of selectedItems) {
                        if (item.children) {
                            await processFolder(item, app);
                        } else if (item.extension === 'md') {
                            await processFile(item, app);
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error in copyPermalinkAndRename:', error);
    }
}

// Export the main function as default
module.exports = copyPermalinkAndRename; 