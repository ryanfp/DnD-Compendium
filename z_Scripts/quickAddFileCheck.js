/**
 * QuickAdd integration for FileProcessor
 * Simplified to avoid path resolution issues
 */
module.exports = async (params) => {
    const { app } = params;
    
    try {
        // Load fileProcessor directly from window if available, or try to require it
        let FileProcessor;
        
        if (window.FileProcessor) {
            FileProcessor = window.FileProcessor;
            console.log("Using FileProcessor from window");
        } else {
            try {
                // Try direct require - this will work if both scripts are in same folder
                FileProcessor = require('./fileProcessor.js');
                console.log("Loaded FileProcessor via require");
                
                // Store on window for future use
                window.FileProcessor = FileProcessor;
            } catch (e) {
                console.error("Error loading FileProcessor:", e);
                new Notice("Failed to load FileProcessor. Please check console for errors.");
                return false;
            }
        }
        
        // Initialize processor
        const processor = new FileProcessor(app);
        
        // Try to get target file from context menu or selection
        let target = null;
        
        // 1. Direct file reference from QuickAdd
        if (params.file) {
            target = params.file;
        } 
        else if (params.filepath) {
            target = app.vault.getAbstractFileByPath(params.filepath);
        }
        
        // 2. Process the target (or let processor find one)
        const result = await processor.process(target);
        
        return result.success;
        
    } catch (error) {
        console.error("Error in QuickAdd script:", error);
        try {
            new Notice(`Error: ${error.message}`);
        } catch (e) {
            console.error("Failed to show notice:", e);
        }
        return false;
    }
};