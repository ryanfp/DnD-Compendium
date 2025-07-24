/**
 * Extracts source information from file content and updates frontmatter
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
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

        console.log(`Updated source for ${file.basename}`);

    } catch (error) {
        console.error(`Error processing ${file.basename}:`, error);
    }
}

/**
 * Process all files in a folder
 * @param {TFolder} folder - The folder to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(folder, app) {
    if (!folder || !folder.children) {
        console.warn('Invalid folder object');
        return;
    }

    for (const file of folder.children) {
        if (file.extension === 'md') {
            await processFile(file, app);
        }
    }
}

/**
 * Main function to handle both single file and folder cases
 * @param {Object} tp - The Templater object (optional)
 * @returns {Promise<void>}
 */
async function extractSource(tp = null) {
    try {
        let targetFile = null;

        // First try to get file from Templater context
        if (tp) {
            try {
                targetFile = tp.file.find_tfile(tp.file.path(true));
            } catch (e) {
                // Ignore error if tp.file.path fails
            }
        }

        // If no file from Templater, try active file
        if (!targetFile) {
            targetFile = app.workspace.getActiveFile();
        }

        // If we have a single file, process it
        if (targetFile && targetFile instanceof TFile && targetFile.extension === 'md') {
            await processFile(targetFile, app);
            return;
        }

        // If we're processing a folder (from Linter)
        const currentFolder = targetFile?.parent || app.vault.getRoot();
        if (currentFolder) {
            // Get all markdown files in the folder
            const files = currentFolder.children || [];
            for (const file of files) {
                if (file instanceof TFile && file.extension === 'md') {
                    await processFile(file, app);
                }
            }
        }

    } catch (error) {
        console.error('Error in extractSource:', error);
    }
}

// Export the main function as default
module.exports = extractSource; 