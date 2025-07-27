/**
 * Process files script for Templater
 * Works with QuickAdd and Linter integration
 */
class FileProcessor {
    constructor(app) {
        this.app = app;
        
        // Initialize global tracking if it doesn't exist
        if (!window.zProcessedFiles) {
            window.zProcessedFiles = new Set();
        }
    }

    async process(tp) {
        try {
            // Get the current file
            const currentFile = tp.file.find_tfile();
            
            if (!currentFile || !currentFile.path) {
                console.error("No valid file to process");
                return "No valid file to process";
            }

            // Use our global tracking to see if this file has been processed
            if (window.zProcessedFiles.has(currentFile.path)) {
                console.log(`File ${currentFile.path} already processed, skipping`);
                return "File already processed";
            }
            
            // Mark the file as processed
            window.zProcessedFiles.add(currentFile.path);
            
            // Your actual processing logic here
            console.log(`Processing file: ${currentFile.path}`);
            
            // Example processing code:
            // Read file content
            const content = await this.app.vault.read(currentFile);
            
            // Process content (example: add timestamp)
            const processedContent = content + "\nProcessed at: " + new Date().toISOString();
            
            // Write back to file
            await this.app.vault.modify(currentFile, processedContent);
            
            return `Successfully processed ${currentFile.path}`;
        } catch (error) {
            console.error("Error in processFiles:", error);
            return `Error processing file: ${error.message}`;
        }
    }
}

module.exports = FileProcessor;