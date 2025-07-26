/**
 * @typedef {import('obsidian').TFile} TFile
 * @typedef {import('obsidian').TFolder} TFolder
 */

/**
 * Process a file through all stages
 * @param {object} params - Parameters object
 * @param {App} params.app - The Obsidian app instance
 * @param {TFile} params.file - The file to process
 * @returns {Promise<void>}
 */
async function processFileAllStages(params) {
    const { app, file } = params;
    try {
        const stateManager = window.obsidianStateManager;
        
        // Queue just this file for processing
        stateManager.queueFiles([file.path]);
        
        // Process through all stages
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile()) !== null) {
            const currentFile = app.vault.getAbstractFileByPath(nextFilePath);
            if (!currentFile || !(currentFile instanceof app.TFile)) {
                console.warn(`File not found or not a TFile: ${nextFilePath}`);
                stateManager.skipOperation(nextFilePath, stateManager.currentStage, 'file not found');
                continue;
            }
            
            // Process based on current stage
            const stage = stateManager.currentStage;
            switch (stage) {
                case 'permalink':
                    await app.plugins.plugins.templater.templater.functions.user.addPermalink({ app, file: currentFile });
                    break;
                case 'rename':
                    await app.plugins.plugins.templater.templater.functions.user.copyPermalinkAndRename({ app, file: currentFile });
                    break;
                case 'source':
                    await app.plugins.plugins.templater.templater.functions.user.extractSource({ app, file: currentFile });
                    break;
            }
        }
        
        console.log(`Completed all processing for ${file.basename}`);
        
    } catch (error) {
        console.error(`Error processing ${file.basename}:`, error);
    }
}

/**
 * Process a folder through all stages
 * @param {object} params - Parameters object
 * @param {App} params.app - The Obsidian app instance
 * @param {TFolder} params.file - The folder to process (accessed as file in templater)
 * @returns {Promise<void>}
 */
async function processFolderAllStages(params) {
    const { app, file: folder } = params;
    try {
        const stateManager = window.obsidianStateManager;
        
        // Start folder processing
        stateManager.startFolderProcessing(folder.path);
        
        // Get all markdown files in the folder and queue them
        const files = folder.children || [];
        const filePaths = files
            .filter(file => file instanceof app.TFile && file.extension === 'md')
            .map(file => file.path);
        
        // Queue all files for processing
        stateManager.queueFiles(filePaths);
        
        // Process files through all stages
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile()) !== null) {
            // Get the current file (may have been renamed)
            const currentFile = app.vault.getAbstractFileByPath(nextFilePath);
            if (!currentFile || !(currentFile instanceof app.TFile)) {
                console.warn(`File not found or not a TFile: ${nextFilePath}`);
                stateManager.skipOperation(nextFilePath, stateManager.currentStage, 'file not found');
                continue;
            }
            
            // Process based on current stage
            const stage = stateManager.currentStage;
            switch (stage) {
                case 'permalink':
                    await app.plugins.plugins.templater.templater.functions.user.addPermalink({ app, file: currentFile });
                    break;
                case 'rename':
                    await app.plugins.plugins.templater.templater.functions.user.copyPermalinkAndRename({ app, file: currentFile });
                    break;
                case 'source':
                    await app.plugins.plugins.templater.templater.functions.user.extractSource({ app, file: currentFile });
                    break;
            }
            
            // Add delay to prevent overwhelming the system
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        console.log(`Completed folder processing for ${folder.path}`);
        
    } catch (error) {
        console.error(`Error in processFolderAllStages:`, error);
    }
}

// Export a single function as default for Templater compatibility
module.exports = function(params) {
    const { app, file } = params;
    
    if (file.children) {
        // Target is a folder
        return processFolderAllStages(params);
    } else {
        // Target is a file
        return processFileAllStages(params);
    }
};