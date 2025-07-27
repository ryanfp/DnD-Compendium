/**
 * Standalone script for Templater that doesn't require an active editor
 * Can be used in QuickAdd as a User Script without triggering "no active editor" error
 */
module.exports = async function(params) {
    // Get app from params or global
    const app = params?.app || window.app;
    
    // Make sure we have app
    if (!app) {
        console.error("No app reference available");
        if (typeof Notice !== 'undefined') {
            new Notice("Failed to get app reference");
        }
        return false;
    }
    
    try {
        // Get FileProcessor from window if it exists
        let FileProcessor;
        
        if (window.FileProcessor) {
            FileProcessor = window.FileProcessor;
        } else {
            // Try to load FileProcessor.js directly from z_Scripts folder
            try {
                // First try to load from z_Scripts
                const path = require('path');
                const basePath = app.vault.adapter.basePath;
                const scriptPath = path.join(basePath, 'z_Scripts', 'fileProcessor.js');
                
                FileProcessor = require(scriptPath);
                
                // Store on window for future use
                window.FileProcessor = FileProcessor;
            } catch (e) {
                console.error("Failed to load FileProcessor:", e);
                if (typeof Notice !== 'undefined') {
                    new Notice("Failed to load FileProcessor. Check console for details.");
                }
                return false;
            }
        }
        
        // Create processor
        const processor = new FileProcessor(app);
        
        // Process current file or selection
        const result = await processor.process();
        
        return result.success;
        
    } catch (error) {
        console.error("Error in Templater script:", error);
        if (typeof Notice !== 'undefined') {
            new Notice(`Error: ${error.message}`);
        }
        return false;
    }
};