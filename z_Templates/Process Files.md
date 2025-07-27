<%*
// Direct file processing template that doesn't require an active editor
// This avoids the "no active editor; can't append templates" error

try {
    // Get app from this context
    const app = this.app;
    
    // Try to get FileProcessor using multiple methods
    let FileProcessor;
    try {
        FileProcessor = tp.user.fileProcessor;
    } catch (e) {
        try {
            // Try using standard Node.js require
            const path = require('path');
            const filePath = path.join(app.vault.adapter.basePath, 'z_Scripts', 'fileProcessor.js');
            FileProcessor = require(filePath);
        } catch (e2) {
            // Direct inclusion fallback
            class FileProcessor {
                // [Include the entire FileProcessor class inline here]
                // For brevity, not showing the full class here
                // But this would be a copy of the entire class from fileProcessor.js
                constructor(app) {
                    this.app = app;
                    this.currentSessionFiles = new Set();
                }
                
                // Process a target (file or folder)
                async process(target, options = {}) {
                    // Same implementation as in fileProcessor.js
                }
                
                // [Other methods...]
            }
        }
    }
    
    // Let user know processing is starting
    new Notice("Starting file processing...");
    
    // Find target file or folder
    let target = null;
    
    // Try file explorer selection first
    const fileExplorer = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
    if (fileExplorer && typeof fileExplorer.getSelectedFile === 'function') {
        target = fileExplorer.getSelectedFile();
        if (target) {
            console.log(`Template using file from explorer: ${target.path}`);
        }
    }
    
    // If no selection in explorer, use the active file
    if (!target) {
        target = app.workspace.getActiveFile();
        if (target) {
            console.log(`Template using active file: ${target.path}`);
        }
    }
    
    // Create processor and process the file
    const processor = new FileProcessor(app);
    const result = await processor.process(target);
    
    if (result.success) {
        new Notice("Processing complete!");
    }
    
    // Don't return any content to avoid template append issues
    tR = "";
} catch (error) {
    console.error('Error in template:', error);
    new Notice(`Error: ${error.message}`);
    tR = "";
}
-%>