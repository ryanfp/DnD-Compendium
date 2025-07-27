/**
 * Templater user script for file processing
 * 
 * Usage in Templater:
 * <%* await tp.user.processFiles() %>
 */

module.exports = async function processFiles(target = null) {
    try {
        const app = this.app;
        
        // Import FileProcessor using relative path (adjust based on your structure)
        let FileProcessor;
        try {
            // Try relative path from Templater user scripts
            FileProcessor = require('../../z_Scripts/fileProcessor.js');
        } catch (e) {
            try {
                // Try with absolute path 
                const filePath = app.vault.adapter.basePath + '/z_Scripts/fileProcessor.js';
                FileProcessor = require(filePath);
            } catch (e2) {
                throw new Error("Could not load FileProcessor. Please check file paths.");
            }
        }
        
        // If no target provided, try to find one
        if (!target) {
            // Try file explorer selection
            const fileExplorer = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
            if (fileExplorer && typeof fileExplorer.getSelectedFile === 'function') {
                target = fileExplorer.getSelectedFile();
            }
            
            // If still no target, use active file
            if (!target) {
                target = app.workspace.getActiveFile();
            }
        }
        
        if (!target) {
            new Notice("No file selected or active");
            return false;
        }
        
        // Process the file or folder
        const processor = new FileProcessor(app);
        const result = await processor.process(target);
        
        return result;
    } catch (error) {
        console.error("Error in processFiles user script:", error);
        new Notice(`Error: ${error.message}`);
        return { success: false, error: error.message };
    }
};