<%*
// Very simple template that just processes the active file
try {
    const app = this.app;
    const activeFile = app.workspace.getActiveFile();
    
    if (!activeFile) {
        new Notice("No active file. Please open a file first.");
        tR = "";
        return;
    }
    
    new Notice(`Starting processing for: ${activeFile.basename}`);
    
    // Process the file using our script
    await tp.user.processFiles({
        app: app,
        file: activeFile
    });
    
    new Notice("Processing complete!");
    tR = ""; // Clear template result
} catch (error) {
    console.error('Error in template:', error);
    new Notice(`Error: ${error.message}`);
    tR = ""; // Clear template result
}
-%>