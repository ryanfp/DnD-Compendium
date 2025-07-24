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
 * @param {string} folderPath - Path to the folder to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(folderPath, app) {
    const folder = app.vault.getAbstractFileByPath(folderPath);
    if (!folder || !folder.children) {
        console.warn(`Folder not found or not a folder: ${folderPath}`);
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

module.exports = { processFile, processFolder }; 