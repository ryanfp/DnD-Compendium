async function copyPermalinkAndRename(tp) {
    try {
        // Get the current file
        const activeFile = tp.file.find_tfile(tp.file.path(true));
        if (!activeFile) {
            console.warn('No active file');
            return;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(activeFile);
        const permalink = cache?.frontmatter?.permalink;
        
        if (!permalink) {
            console.warn('No permalink found in frontmatter');
            return;
        }

        // Copy to clipboard using Obsidian API
        await navigator.clipboard.writeText(permalink);

        // Trigger rename using Obsidian's file explorer commands
        await app.commands.executeCommandById('file-explorer:rename');

        // Wait briefly for rename modal to appear
        return new Promise((resolve) => {
            setTimeout(async () => {
                // Get the rename modal input
                const renameModal = document.querySelector('.modal-container input[type="text"]');
                if (renameModal) {
                    // Set the value and trigger change event
                    renameModal.value = permalink;
                    renameModal.dispatchEvent(new Event('input'));
                    
                    // Press Enter by finding and clicking the modal's submit button
                    const submitButton = document.querySelector('.modal-button-container button.mod-cta');
                    if (submitButton) {
                        submitButton.click();
                    }
                }
                resolve();
            }, 50);
        });

    } catch (error) {
        console.error('Error in copyPermalinkAndRename:', error);
    }
}

module.exports = copyPermalinkAndRename; 