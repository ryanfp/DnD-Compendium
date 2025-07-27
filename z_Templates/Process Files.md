<%*
// Process Files Templater Template
// Uses the FileProcessor class for processing without duplicates or errors

try {
    // Import the FileProcessor
    const FileProcessor = tp.user.fileProcessor || require(app.vault.adapter.basePath + '/z_Scripts/fileProcessor.js');
    const processor = new FileProcessor(this.app);
    
    // Let user know processing is starting
    new Notice("Starting file processing...");
    
    // Process the file or folder
    // Note: process() will automatically find the target if none is provided
    const result = await processor.process();
    
    if (result.success) {
        new Notice("Processing complete!");
    }
    
    // Clear template result
    tR = "";
} catch (error) {
    console.error('Error in template:', error);
    new Notice(`Error: ${error.message}`);
    tR = "";
}
-%>