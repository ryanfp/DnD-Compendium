async function copyPermalinkAndRename(tp) {
    try {
        // Helper function for controlled delays
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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

        // Copy to clipboard using navigator API
        await navigator.clipboard.writeText(permalink);
        await wait(150); // Slightly reduced wait after clipboard operation

        // Create and dispatch F2 key event
        const f2Event = new KeyboardEvent('keydown', {
            key: 'F2',
            code: 'F2',
            keyCode: 113,
            which: 113,
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(f2Event);

        // Wait for modal to appear and handle the rename process
        await wait(400); // Reduced wait for modal to appear

        // Get the rename modal input
        const renameModal = document.querySelector('.modal-container input[type="text"]');
        if (renameModal) {
            // Focus the input first
            renameModal.focus();
            await wait(200); // Reduced wait after focus

            // First try: programmatic selection
            renameModal.select();
            await wait(150);

            // Second try: simulate Ctrl+A
            const ctrlDown = new KeyboardEvent('keydown', {
                key: 'Control',
                code: 'ControlLeft',
                keyCode: 17,
                which: 17,
                bubbles: true,
                cancelable: true
            });
            const aDown = new KeyboardEvent('keydown', {
                key: 'a',
                code: 'KeyA',
                keyCode: 65,
                which: 65,
                bubbles: true,
                cancelable: true,
                ctrlKey: true
            });
            renameModal.dispatchEvent(ctrlDown);
            await wait(50);
            renameModal.dispatchEvent(aDown);
            await wait(200);

            // Set the value directly
            renameModal.value = permalink;
            renameModal.dispatchEvent(new Event('input'));
            await wait(150);

            // Also try pasting
            const pasteEvent = new ClipboardEvent('paste', {
                bubbles: true,
                cancelable: true,
                clipboardData: new DataTransfer()
            });
            renameModal.dispatchEvent(pasteEvent);
            await wait(200);

            // Ensure the value is set
            if (renameModal.value !== permalink) {
                renameModal.value = permalink;
                renameModal.dispatchEvent(new Event('input'));
            }
            await wait(150);

            // Simulate Enter key press
            const enterDown = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true,
                cancelable: true
            });
            const enterUp = new KeyboardEvent('keyup', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true,
                cancelable: true
            });
            
            renameModal.dispatchEvent(enterDown);
            await wait(50);
            renameModal.dispatchEvent(enterUp);

            // As a backup, also try clicking the submit button
            await wait(100);
            const submitButton = document.querySelector('.modal-button-container button.mod-cta');
            if (submitButton) {
                submitButton.click();
            }
        } else {
            console.warn('Rename modal not found');
        }

    } catch (error) {
        console.error('Error in copyPermalinkAndRename:', error);
    }
}

module.exports = copyPermalinkAndRename; 