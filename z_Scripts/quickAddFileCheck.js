/**
 * File processing check script for QuickAdd
 * Handles both files and folders through command palette usage
 */
module.exports = async (params) => {
    const { app } = params;
    
    // Get the active file
    const currentFile = app.workspace.getActiveFile();
    
    if (!currentFile || !currentFile.path) {
        console.error("No active file found");
        // Using QuickAddApi to display a notice if available
        if (params.quickAddApi) {
            params.quickAddApi.notify("No active file to process", "error");
        }
        return false;
    }
    
    // Initialize global tracking if it doesn't exist
    if (!window.zProcessedFiles) {
        window.zProcessedFiles = new Set();
    }
    
    // Cache timeout (15 minutes)
    const CACHE_TIMEOUT = 900000;
    
    // Reset cache if it's been too long
    if (!window.zLastProcessingTime || Date.now() - window.zLastProcessingTime > CACHE_TIMEOUT) {
        window.zProcessedFiles.clear();
        window.zLastProcessingTime = Date.now();
        console.log("Cleared processed files cache due to timeout");
    }
    
    // Update the timestamp
    window.zLastProcessingTime = Date.now();
    
    // Check if the file has already been processed
    if (window.zProcessedFiles.has(currentFile.path)) {
        console.log(`File ${currentFile.path} already processed, skipping`);
        if (params.quickAddApi) {
            params.quickAddApi.notify(`File ${currentFile.basename} already processed`, "info", 2000);
        }
        return false;
    }
    
    // Mark the file as processed
    window.zProcessedFiles.add(currentFile.path);
    console.log(`File ${currentFile.path} marked for processing`);
    
    // Return true to continue with the next actions
    return true;
};