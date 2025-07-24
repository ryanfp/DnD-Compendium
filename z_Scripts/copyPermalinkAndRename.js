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

        // Try to use Smart Rename's command API
        const smartRenameCommand = app.commands.commands['smart-rename:smart-rename'];
        if (!smartRenameCommand) {
            console.warn('Smart Rename plugin not found - please install it to preserve links and aliases');
            return;
        }

        // Focus/select the file in the file explorer to ensure Smart Rename works on the correct file
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0]?.view;
        if (fileExplorer) {
            fileExplorer.revealInFolder(file);
            // Select the file in the explorer
            fileExplorer.setSelection([file]);
            await wait(150);
        }

        // Execute Smart Rename command
        await app.commands.executeCommandById('smart-rename:smart-rename');
        await wait(200);

        // Get the rename modal input
        const renameModal = document.querySelector('.modal-container input[type="text"]');
        if (renameModal) {
            // Focus and select all text
            renameModal.focus();
            await wait(100);
            renameModal.select();
            await wait(100);

            // Set new value
            renameModal.value = permalink;
            renameModal.dispatchEvent(new Event('input'));
            await wait(150);

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

            // Wait for Smart Rename to process
            await wait(400);

            // Check if the modal is still open (indicating the rename might have failed)
            const modalStillOpen = document.querySelector('.modal-container input[type="text"]');
            if (modalStillOpen) {
                // Try clicking the submit button as backup
                const submitButton = document.querySelector('.modal-button-container button.mod-cta');
                if (submitButton) {
                    submitButton.click();
                    await wait(200);
                }
            }

            console.log(`Renamed ${file.basename} to ${permalink} using Smart Rename`);
        } else {
            console.warn(`Could not find Smart Rename modal for ${file.basename}`);
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
            // Add a longer delay between files to ensure Smart Rename completes
            await new Promise(resolve => setTimeout(resolve, 600));
        }
    }
}

/**
 * Main function to handle both single file and folder cases
 * @param {Object} tp - The Templater object (optional)
 * @returns {Promise<void>}
 */
async function copyPermalinkAndRename(tp = null) {
    try {
        let targetFile = null;

        // Check if we're in a Linter/folder context first
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0]?.view;
        if (fileExplorer) {
            // Get the selected files using the correct API method
            const selection = fileExplorer.getSelection();
            if (selection && selection.length > 0) {
                // Process all selected items
                for (const item of selection) {
                    if (item instanceof TFolder) {
                        await processFolder(item, app);
                    } else if (item instanceof TFile && item.extension === 'md') {
                        await processFile(item, app);
                    }
                }
                return; // Exit early if we processed selected items
            }
        }

        // If no selection, try other contexts
        targetFile = app.workspace.getActiveFile();

        // If no active file but Templater context exists, try that
        if (!targetFile && tp) {
            try {
                targetFile = tp.file.find_tfile(tp.file.path(true));
            } catch (e) {
                // Ignore error if tp.file.path fails
            }
        }

        // Process the target if we found one
        if (targetFile) {
            if (targetFile instanceof TFolder) {
                await processFolder(targetFile, app);
            } else if (targetFile instanceof TFile && targetFile.extension === 'md') {
                await processFile(targetFile, app);
            }
        }
    } catch (error) {
        console.error('Error in copyPermalinkAndRename:', error);
    }
}

// Export the main function as default
module.exports = copyPermalinkAndRename;