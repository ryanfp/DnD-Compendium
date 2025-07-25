/**
 * @typedef {import('obsidian').TFile} TFile
 * @typedef {import('obsidian').TFolder} TFolder
 */

/**
 * Process a single file
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        const stateManager = window.obsidianStateManager;
        
        // Skip if already processed or not ready for source
        if (stateManager.isFileProcessed(file.path, 'source')) {
            console.log(`Skipping ${file.basename}: already processed`);
            return;
        }

        if (!stateManager.isFileReadyForOperation(file.path, 'source')) {
            console.log(`Skipping ${file.basename}: not ready for source`);
            return;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Read the file content
        const content = await app.vault.read(file);

        // Look for "Source:" pattern and extract the value
        const sourceMatch = content.match(/Source:\s*([^\n]+)/);
        if (!sourceMatch) {
            console.log(`No Source: pattern found in ${file.basename}`);
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
            console.log(`Skipping ${file.basename}: source already matches`);
            stateManager.markOperationComplete(file.path, 'source');
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
 * @param {TFolder} folder - The folder to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(folder, app) {
    try {
        const stateManager = window.obsidianStateManager;
        
        // Start fresh folder processing
        stateManager.startFolderProcessing(folder.path);
        
        // Get all markdown files in the folder and queue them
        const files = folder.children || [];
        const filePaths = files
            .filter(file => file instanceof TFile && file.extension === 'md')
            .map(file => file.path);
        
        stateManager.queueFiles(filePaths);
        
        // Process files from queue
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile('source')) !== null) {
            const file = app.vault.getAbstractFileByPath(nextFilePath);
            if (file instanceof TFile) {
                await processFile(file, app);
                // Add a delay between files
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
    }
}

/**
 * Main function for Templater
 * @param {any} tp - Templater object
 */
async function extractSource(tp) {
    const stateManager = window.obsidianStateManager;
    
    // Try to acquire lock
    if (!await stateManager.acquireLock()) {
        console.log('Another script is running, please wait and try again');
        return;
    }

    try {
        const app = tp.app;

        // Try to get selected files from file explorer
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0];
        if (fileExplorer?.view?.fileItems) {
            const selectedFiles = Object.values(fileExplorer.view.fileItems)
                .filter(item => item.file && item.selected)
                .map(item => item.file);
            
            if (selectedFiles && selectedFiles.length > 0) {
                // Queue selected files
                const filePaths = selectedFiles
                    .filter(file => file instanceof TFile && file.extension === 'md')
                    .map(file => file.path);
                
                stateManager.queueFiles(filePaths);
                
                // Process files from queue
                let nextFilePath;
                while ((nextFilePath = stateManager.getNextFile('source')) !== null) {
                    const file = app.vault.getAbstractFileByPath(nextFilePath);
                    if (file instanceof TFile) {
                        await processFile(file, app);
                        // Add a delay between files
                        await new Promise(resolve => setTimeout(resolve, 100));
                    }
                }
                return;
            }
        }

        // If no selection, try Templater or active file
        let targetFile = null;

        // Try Templater context
        try {
            targetFile = tp.file.find_tfile(tp.file.path(true));
        } catch (e) {
            // Ignore error if tp.file.path fails
        }

        // If no file from Templater, try active file
        if (!targetFile) {
            targetFile = app.workspace.getActiveFile();
        }

        // If we have a single file, process it
        if (targetFile && targetFile.extension === 'md') {
            stateManager.queueFiles([targetFile.path]);
            await processFile(targetFile, app);
            return;
        }

        // If we're processing a folder
        if (targetFile?.parent) {
            await processFolder(targetFile.parent, app);
        }

    } catch (error) {
        console.error('Error in extractSource:', error);
    } finally {
        // Always release the lock when done
        stateManager.releaseLock();
    }
}

// Export for Templater
module.exports = extractSource;
module.exports.extractSource = extractSource; 