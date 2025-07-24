<%*
async function addSource() {
    try {
        // Check if we're processing a folder
        const folderPath = await tp.system.prompt("Enter folder path to process (leave empty for current file):");
        
        if (folderPath) {
            // Process entire folder
            await tp.user.extractSource.processFolder(folderPath, app);
        } else {
            // Process single file
            const file = tp.file.find_tfile(tp.file.path(true));
            if (!file) {
                console.warn('No active file found');
                return;
            }
            await tp.user.extractSource.processFile(file, app);
        }

    } catch (error) {
        console.error('Error in addSource:', error);
    }
}

await addSource();
%> 