<%*
async function processFolder(folderPath) {
    // Get all markdown files in the folder
    const folder = app.vault.getAbstractFileByPath(folderPath);
    if (!folder || !folder.children) {
        console.warn(`Folder not found or not a folder: ${folderPath}`);
        return;
    }

    // Process all markdown files in the folder
    for (const file of folder.children) {
        if (file.extension === 'md') {
            await tp.user.trimTitle.processFile(file, app);
        }
    }
}

async function addPermalink() {
    try {
        // Check if we're processing a folder
        const folderPath = await tp.system.prompt("Enter folder path to process (leave empty for current file):");
        
        if (folderPath) {
            // Process entire folder
            await processFolder(folderPath);
        } else {
            // Process single file
            const file = tp.file.find_tfile(tp.file.path(true));
            if (!file) {
                console.warn('No active file found');
                return;
            }
            await tp.user.trimTitle.processFile(file, app);
        }

    } catch (error) {
        console.error('Error in addPermalink:', error);
    }
}

await addPermalink();
%>