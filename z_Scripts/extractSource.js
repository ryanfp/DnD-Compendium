/**
 * @typedef {import('obsidian').TFile} TFile
 * @typedef {import('obsidian').TFolder} TFolder
 */

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
        
        // Read the file content
        const content = await app.vault.read(file);

        // Look for "Source:" pattern and extract the value
        const sourceMatch = content.match(/Source:\s*([^\n]+)/);
        if (!sourceMatch) {
            stateManager.skipOperation(file.path, 'source', 'no Source: pattern found');
            return;
        }

        // Get the source value and clean it
        let sourceValue = sourceMatch[1].trim();
        
        // Remove page numbers by splitting at "p. " and taking the first part
        if (sourceValue.includes("p. ")) {
            sourceValue = sourceValue.split("p. ")[0].trim();
        }

        // Clean up formatting symbols while preserving specific punctuation
        sourceValue = sourceValue
            // Remove Markdown formatting
            .replace(/\*\*/g, '') // bold
            .replace(/\*/g, '') // italic
            .replace(/\_\_/g, '') // bold
            .replace(/\_/g, '') // italic
            .replace(/\~/g, '') // strikethrough
            .replace(/\`/g, '') // code
            .replace(/\[\[/g, '') // wiki links start
            .replace(/\]\]/g, '') // wiki links end
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // markdown links
            .replace(/\#/g, '') // hashtags
            .replace(/\|/g, '') // table separators
            .replace(/\>/g, '') // blockquotes
            .replace(/\</g, '') // html tags
            .replace(/\{/g, '') // curly braces
            .replace(/\}/g, '')
            .replace(/\$/g, '') // latex delimiters
            .replace(/\^/g, '') // superscript
            .replace(/\=/g, '') // headers
            .trim();

        // Get existing frontmatter
        const currentFrontmatter = app.metadataCache.getFileCache(file)?.frontmatter || {};

        // Check if source already exists and is correct
        if (currentFrontmatter.source === sourceValue) {
            stateManager.skipOperation(file.path, 'source', 'source already matches');
            return;
        }

        // Update frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            // Preserve existing frontmatter
            Object.keys(currentFrontmatter).forEach(key => {
                if (key !== 'position') {
                    frontmatter[key] = currentFrontmatter[key];
                }
            });

            // Update the source
            frontmatter["source"] = sourceValue;
        });

        // Force metadata cache refresh
        await app.metadataCache.trigger();
        
        // Add a small delay to ensure cache is updated
        await new Promise(resolve => setTimeout(resolve, 100));

        console.log(`Updated source for ${file.basename}`);
        stateManager.markOperationComplete(file.path, 'source');

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
        
        // Process files already in the queue from previous stage
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile()) !== null) {
            if (stateManager.currentStage !== 'source') {
                break; // We've moved to next stage, exit this loop
            }
            
            const file = app.vault.getAbstractFileByPath(nextFilePath);
            if (file && file instanceof app.TFile) {
                await processFile({ file, app });
            } else {
                console.warn(`File not found or not a TFile: ${nextFilePath}`);
                stateManager.skipOperation(nextFilePath, 'source', 'file not found');
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