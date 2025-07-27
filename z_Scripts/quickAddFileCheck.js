// Define the settings object that will appear in the QuickAdd UI
const settings = {
    // Required property to make settings appear
    settings: {
        name: "File Check Settings",
        author: "nega ryan",
        options: {
            // Add any configurable options here
            cacheTimeout: {
                type: "number",
                defaultValue: 60000,
                placeholder: "Cache timeout in milliseconds"
            }
        }
    },
    // This is the entry point for QuickAdd
    entry: async (params, settings) => {
        try {
            const { app, file, quickAddApi } = params;
            
            if (!app || !file) {
                console.error("Missing app or file in quickAddFileCheck");
                return false;
            }
            
            // Initialize the processed files tracking if it doesn't exist
            if (!window.zProcessedFiles) {
                window.zProcessedFiles = new Set();
            }
            
            // Use the configurable cache timeout from settings
            const CACHE_TIMEOUT = settings?.cacheTimeout || 60000; // 1 minute default
            
            if (!window.zLastProcessingTime || Date.now() - window.zLastProcessingTime > CACHE_TIMEOUT) {
                window.zProcessedFiles.clear();
                window.zLastProcessingTime = Date.now();
                console.log("Cleared processed files cache due to timeout");
            }
            
            // Update processing time
            window.zLastProcessingTime = Date.now();
            
            // Check if the file has already been processed
            if (window.zProcessedFiles.has(file.path)) {
                console.log(`File ${file.path} already processed, skipping`);
                return false; // Skip processing
            }
            
            // Mark the file as processed
            window.zProcessedFiles.add(file.path);
            console.log(`File ${file.path} marked for processing`);
            
            // Return true to indicate that the file should be processed
            return true;
        } catch (error) {
            console.error("Error in quickAddFileCheck:", error);
            return false;
        }
    }
};

module.exports = settings;