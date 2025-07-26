<%* 
try {
    const app = this.app;
    
    // Try to get the current file or folder
    let targetObject;
    
    // First try the object this template is being applied to
    if (tp.file && tp.file.path) {
        targetObject = app.vault.getAbstractFileByPath(tp.file.path);
    }
    
    // If that didn't work, try the active file
    if (!targetObject) {
        targetObject = app.workspace.getActiveFile();
    }
    
    // If we still don't have an object, inform the user
    if (!targetObject) {
        new Notice("No file or folder selected. Please select a file or folder first.");
        return;
    }
    
    // Check if it's a folder using Obsidian's instanceof check
    const isFolder = targetObject instanceof app.vault.TFolder;
    const objectType = isFolder ? "folder" : "file";
    const objectName = targetObject.name || targetObject.basename || targetObject.path.split('/').pop();
    
    new Notice(`Starting processing for ${objectType}: ${objectName}`);
    
    // Call the unified processing function
    await tp.user.processFiles({ app, file: targetObject });
    
    new Notice(`Processing complete for ${objectType}: ${objectName}!`);
} catch (error) {
    console.error('Error in template:', error);
    new Notice(`Error processing: ${error.message}`);
}
%>