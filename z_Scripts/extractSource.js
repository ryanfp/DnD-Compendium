/**
 * Main function to extract source from file content
 * @param {object} params - Parameters passed from Templater
 * @returns {Promise<void>}
 */
async function extractSource(params) {
    try {
        const { file, app } = params;
        
        // Safety check - ensure state manager exists
        if (!window.obsidianStateManager) {
            try {
                console.log("State manager not found, initializing");
                // Try to initialize through various means
                if (app.plugins.plugins.templater?.templater?.functions?.user?.stateManager) {
                    await app.plugins.plugins.templater.templater.functions.user.stateManager(params);
                } else {
                    // Direct initialization if templater function not available
                    window.obsidianStateManager = {
                        // Minimal implementation to prevent errors
                        needsProcessing: () => true,
                        markOperationComplete: () => {},
                        skipOperation: () => {},
                        updatePathMapping: () => {},
                        getCurrentPath: (path) => path,
                        logOperation: (op, path, msg) => console.log(`[${op}] ${path}: ${msg}`)
                    };
                    console.log("Created minimal state manager");
                }
            } catch (initError) {
                console.error("Failed to initialize state manager:", initError);
                // Create minimal state manager to prevent further errors
                window.obsidianStateManager = {
                    needsProcessing: () => true,
                    markOperationComplete: () => {},
                    skipOperation: () => {},
                    updatePathMapping: () => {},
                    getCurrentPath: (path) => path,
                    logOperation: (op, path, msg) => console.log(`[${op}] ${path}: ${msg}`)
                };
            }
        }
        
        // Now process based on whether it's a file or folder
        if (file.children) {
            // It's a folder
            const folder = file;
            await processFolder(folder, app);
        } else {
            // It's a single file
            await processFile(file, app);
        }
    } catch (error) {
        console.error("Error in extractSource:", error);
    }
}

/**
 * Safe path handling - ensure path is a string
 * @param {any} path - The path to check
 * @returns {string} The path as a string
 */
function ensurePathIsString(path) {
    if (path === null || path === undefined) {
        return "";
    }
    
    if (typeof path !== 'string') {
        // Try to convert to string if possible
        try {
            return String(path);
        } catch (e) {
            console.error("Could not convert path to string:", path);
            return "";
        }
    }
    
    return path;
}

/**
 * Process a single file
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        // Safety check for file
        if (!file) {
            console.error("File is undefined or null");
            return;
        }
        
        // Ensure path is a string
        const filePath = ensurePathIsString(file.path);
        if (!filePath) {
            console.error("Invalid file path:", file);
            return;
        }
        
        const stateManager = window.obsidianStateManager;
        
        // Skip if file doesn't need processing
        if (!stateManager.needsProcessing(filePath)) {
            return;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Read the file content
        let content;
        try {
            content = await app.vault.read(file);
        } catch (error) {
            console.error(`Error reading file ${file.basename}:`, error);
            stateManager.skipOperation(filePath, 'source', 'error reading file');
            return;
        }

        // Look for "Source:" pattern and extract the value
        const sourceMatch = content.match(/Source:\s*([^\n]+)/);
        if (!sourceMatch) {
            stateManager.skipOperation(filePath, 'source', 'no Source: pattern found');
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
            stateManager.skipOperation(filePath, 'source', 'source already matches');
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
        stateManager.markOperationComplete(filePath, 'source');

    } catch (error) {
        const fileName = file ? (file.basename || "unknown") : "unknown";
        console.error(`Error processing ${fileName}:`, error);
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
        
        // Process files already in the queue from previous stage
        let nextFilePath;
        while ((nextFilePath = stateManager.getNextFile()) !== null) {
            // Ensure path is a string
            nextFilePath = ensurePathIsString(nextFilePath);
            if (!nextFilePath) {
                console.error("Invalid file path in queue");
                continue;
            }
            
            if (stateManager.currentStage !== 'source') {
                break; // We've moved to next stage, exit this loop
            }
            
            try {
                const file = app.vault.getAbstractFileByPath(nextFilePath);
                if (file && file instanceof app.vault.TFile) {
                    await processFile(file, app);
                } else {
                    console.warn(`File not found or not a TFile: ${nextFilePath}`);
                    stateManager.skipOperation(nextFilePath, 'source', 'file not found');
                }
            } catch (error) {
                console.error(`Error processing file ${nextFilePath}:`, error);
                stateManager.skipOperation(nextFilePath, 'source', 'processing error');
            }
        }
    } catch (error) {
        console.error(`Error in processFolder:`, error);
    }
}

// Export a single function as default for Templater compatibility
module.exports = extractSource;