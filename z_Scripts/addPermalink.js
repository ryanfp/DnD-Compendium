/**
 * Trims and formats a title for use as a permalink
 * @param {string} title - The title to format
 * @returns {string} - The formatted permalink
 */
function trimTitle(title) {
    if (!title) return '';

    // Clean up the title
    let cleanTitle = title
        // Replace special characters with space
        .replace(/[^\w\s\-'&()]/g, ' ')  // Keep hyphen, apostrophe, ampersand, and parentheses
        // Replace multiple spaces with single space
        .replace(/\s+/g, ' ')
        // Trim whitespace
        .trim()
        // Split into words
        .split(' ')
        // Take first 5 words
        .slice(0, 5)
        // Join with hyphens
        .join('-')
        // Convert to lowercase
        .toLowerCase()
        // Clean up any remaining unwanted characters
        .replace(/['"]/g, '')  // Remove quotes
        .replace(/\(|\)/g, '') // Remove parentheses
        .replace(/&/g, 'and')  // Replace & with 'and'
        // Clean up multiple hyphens and hyphens at start/end
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');

    return cleanTitle;
}

/**
 * Process a single file
 * @param {object} params - Parameters object 
 * @param {TFile} params.file - The file to process
 * @param {App} params.app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(params) {
    const { file, app } = params;
    try {
        const stateManager = window.obsidianStateManager;
        
        // Skip if file doesn't need processing
        if (!stateManager.needsProcessing(file.path)) {
            return;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if permalink already exists and matches what we would generate
        const wouldBePermalink = trimTitle(file.basename);
        if (cache?.permalink === wouldBePermalink) {
            stateManager.skipOperation(file.path, 'permalink', 'already correct');
            return;
        }

        // Update frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.permalink = wouldBePermalink;
        });

        // Force metadata cache refresh
        await app.metadataCache.trigger();
        
        // Add a small delay to ensure cache is updated
        await new Promise(resolve => setTimeout(resolve, 100));

        console.log(`Added permalink for ${file.basename}`);
        stateManager.markOperationComplete(file.path, 'permalink');

    } catch (error) {
        console.error(`Error processing ${file.basename}:`, error);
    }
}

/**
 * Process all markdown files in a folder
 * @param {object} params - Parameters object
 * @param {TFolder} params.file - The folder to process (accessed as file in templater)
 * @param {App} params.app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(params) {
    const { file: folder, app } = params;
    try {
        const stateManager = window.obsidianStateManager;
        
        // Start fresh folder processing
        stateManager.startFolderProcessing(folder.path);
        
        // Get all markdown files in the folder and queue them
        const files = folder.children || [];
        const filePaths = files
            .filter(file => file instanceof app.TFile && file.extension === 'md')
            .map(file => file.path);
        
        stateManager.queueFiles(filePaths);
        
        // Process files from queue
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile()) !== null) {
            if (stateManager.currentStage !== 'permalink') {
                break; // We've moved to next stage, exit this loop
            }
            
            const file = app.vault.getAbstractFileByPath(nextFilePath);
            if (file && file instanceof app.TFile) {
                await processFile({ file, app });
            } else {
                console.warn(`File not found or not a TFile: ${nextFilePath}`);
                stateManager.skipOperation(nextFilePath, 'permalink', 'file not found');
            }
        }
    } catch (error) {
        console.error(`Error in processFolder:`, error);
    }
}

// Export a single function as default for Templater compatibility
module.exports = function(params) {
    const { file, app } = params;
    
    if (file.children) {
        // Target is a folder
        return processFolder(params);
    } else {
        // Target is a file
        return processFile(params);
    }
};