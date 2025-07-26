/**
 * Unified file processing script that handles:
 * 1. Adding permalinks to frontmatter
 * 2. Renaming files based on permalinks
 * 3. Extracting source information to frontmatter
 * 
 * Works on both individual files and folders
 * 
 * @param {object} params - Parameters from Templater
 * @returns {Promise<void>}
 */
async function processFiles(params) {
    try {
        console.log("Starting unified file processing");
        
        // Make sure params is an object
        if (!params || typeof params !== 'object') {
            throw new Error("Invalid params: not an object");
        }
        
        const { app } = params;
        if (!app) {
            throw new Error("App not provided");
        }
        
        // Handle different ways the file parameter might be provided
        let fileObj;
        
        // Try to get the file from various possible locations
        if (params.file) {
            fileObj = params.file;
        } else if (params.tp && params.tp.file) {
            fileObj = params.tp.file;
        } else if (app.workspace.getActiveFile()) {
            fileObj = app.workspace.getActiveFile();
        }
        
        if (!fileObj) {
            throw new Error("No file provided and could not determine active file");
        }
        
        console.log("File object received:", fileObj);
        
        // Check if it's a Templater-specific file object that needs conversion
        if (fileObj && typeof fileObj === 'object' && !(fileObj instanceof app.vault.TFile) && !(fileObj instanceof app.vault.TFolder) && fileObj.path) {
            console.log("Converting file object to Obsidian file object");
            const actualFile = app.vault.getAbstractFileByPath(fileObj.path);
            if (actualFile) {
                fileObj = actualFile;
                console.log("Successfully converted to Obsidian file object");
            }
        }
        
        // Process based on whether we have a file or folder
        if (fileObj instanceof app.vault.TFolder) {
            // It's a folder - process all markdown files in it
            await processFolder(fileObj, app);
        } else if (fileObj instanceof app.vault.TFile) {
            // It's a single file
            await processFile(fileObj, app);
        } else {
            throw new Error("The provided object is neither a valid file nor folder");
        }
        
        console.log("File processing complete");
    } catch (error) {
        console.error("Error in processFiles:", error);
    }
}

/**
 * Process a single file through all stages
 * @param {TFile} file - The file to process
 * @param {App} app - Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        // Validate file object
        if (!file || !(file instanceof app.vault.TFile)) {
            console.error("Invalid file object:", file);
            return;
        }
        
        const fileName = file.basename || "unknown file";
        const filePath = file.path;
        
        console.log(`Processing file: ${fileName} at path ${filePath}`);
        
        // Step 1: Add permalink to frontmatter
        console.log(`Step 1: Adding permalink to ${fileName}`);
        let permalinkAdded = await addPermalink(file, app);
        
        // Need to get updated file reference after potential permalink addition
        let currentFile = app.vault.getAbstractFileByPath(filePath);
        if (!currentFile || !(currentFile instanceof app.vault.TFile)) {
            console.error(`File no longer exists at ${filePath}`);
            return;
        }
        
        // Step 2: Rename file based on permalink if needed
        console.log(`Step 2: Renaming ${fileName} if needed`);
        let newFilePath = await renameFileBasedOnPermalink(currentFile, app);
        
        // Need to get updated file reference after potential rename
        currentFile = newFilePath ? 
            app.vault.getAbstractFileByPath(newFilePath) : 
            currentFile;
        
        if (!currentFile || !(currentFile instanceof app.vault.TFile)) {
            console.error(`File no longer exists after rename`);
            return;
        }
        
        // Step 3: Extract source from content to frontmatter
        console.log(`Step 3: Extracting source for ${currentFile.basename}`);
        await extractSource(currentFile, app);
        
        console.log(`Completed processing: ${currentFile.basename}`);
    } catch (error) {
        const fileName = file ? (file.basename || "unknown") : "unknown";
        console.error(`Error processing file ${fileName}:`, error);
    }
}

/**
 * Process all markdown files in a folder
 * @param {TFolder} folder - The folder to process
 * @param {App} app - Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(folder, app) {
    try {
        // Validate folder object
        if (!folder || !(folder instanceof app.vault.TFolder)) {
            console.error("Invalid folder object:", folder);
            return;
        }
        
        const folderName = folder.name || folder.path;
        console.log(`Processing folder: ${folderName}`);
        
        // Get all markdown files in the folder
        const files = folder.children
            .filter(file => file instanceof app.vault.TFile && file.extension === 'md');
        
        console.log(`Found ${files.length} markdown files in folder`);
        
        // Process each file sequentially
        for (const file of files) {
            await processFile(file, app);
            // Small delay to prevent overwhelming the system
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        console.log(`Completed processing folder: ${folderName}`);
    } catch (error) {
        console.error(`Error processing folder:`, error);
    }
}

/**
 * Add permalink to file frontmatter
 * @param {TFile} file - The file to update
 * @param {App} app - Obsidian app instance
 * @returns {Promise<boolean>} - True if permalink was added/updated
 */
async function addPermalink(file, app) {
    try {
        if (!file || !(file instanceof app.vault.TFile)) {
            console.error("Invalid file object");
            return false;
        }
        
        // Skip if not a markdown file
        if (file.extension !== 'md') {
            console.log(`Skipping non-markdown file: ${file.path}`);
            return false;
        }
        
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Generate permalink from basename
        const wouldBePermalink = trimTitle(file.basename);
        
        // Skip if permalink already exists and matches
        if (cache?.permalink === wouldBePermalink) {
            console.log(`Permalink already exists for ${file.basename}`);
            return false;
        }
        
        // Update frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.permalink = wouldBePermalink;
        });
        
        // Force metadata cache refresh
        await app.metadataCache.trigger();
        
        // Add a small delay to ensure cache is updated
        await new Promise(resolve => setTimeout(resolve, 100));
        
        console.log(`Added permalink for ${file.basename}: ${wouldBePermalink}`);
        return true;
    } catch (error) {
        console.error(`Error adding permalink to ${file?.basename || 'unknown'}:`, error);
        return false;
    }
}

/**
 * Rename file based on its permalink in frontmatter
 * @param {TFile} file - The file to rename
 * @param {App} app - Obsidian app instance
 * @returns {Promise<string|null>} - New file path if renamed, null otherwise
 */
async function renameFileBasedOnPermalink(file, app) {
    try {
        if (!file || !(file instanceof app.vault.TFile)) {
            console.error("Invalid file object");
            return null;
        }
        
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        const permalink = cache?.permalink;
        
        // Skip if no permalink
        if (!permalink) {
            console.log(`No permalink found for ${file.basename}`);
            return null;
        }
        
        // Skip if filename already matches
        if (file.basename === permalink) {
            console.log(`Filename already matches permalink for ${file.basename}`);
            return null;
        }
        
        // Calculate new path
        let fileDir = '';
        const pathParts = file.path.split('/');
        if (pathParts.length > 1) {
            // Remove the last part (the filename) and join the rest
            fileDir = pathParts.slice(0, -1).join('/') + '/';
        }
        
        const newPath = fileDir + permalink + '.md';
        
        // Check if target file exists
        const targetFile = app.vault.getAbstractFileByPath(newPath);
        if (targetFile) {
            console.log(`Target file already exists at ${newPath}`);
            return null;
        }
        
        // First, ensure the old name is added as an alias if it doesn't exist
        const aliases = cache?.aliases || [];
        if (!aliases.includes(file.basename)) {
            await app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.aliases = frontmatter.aliases || [];
                if (!frontmatter.aliases.includes(file.basename)) {
                    frontmatter.aliases.push(file.basename);
                }
            });
            // Force metadata cache refresh
            await app.metadataCache.trigger();
            
            // Add a small delay to ensure cache is updated
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // Now rename the file
        await app.fileManager.renameFile(file, newPath);
        
        // Force metadata cache refresh
        await app.metadataCache.trigger();
        
        // Add a small delay to ensure cache is updated
        await new Promise(resolve => setTimeout(resolve, 100));
        
        console.log(`Renamed ${file.basename} to ${permalink}`);
        return newPath;
    } catch (error) {
        console.error(`Error renaming ${file?.basename || 'unknown'}:`, error);
        return null;
    }
}

/**
 * Extract source information from content to frontmatter
 * @param {TFile} file - The file to update
 * @param {App} app - Obsidian app instance
 * @returns {Promise<boolean>} - True if source was extracted/updated
 */
async function extractSource(file, app) {
    try {
        if (!file || !(file instanceof app.vault.TFile)) {
            console.error("Invalid file object");
            return false;
        }
        
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Read the file content
        let content;
        try {
            content = await app.vault.read(file);
        } catch (error) {
            console.error(`Could not read file content for ${file.basename}:`, error);
            return false;
        }
        
        // Look for "Source:" pattern and extract the value
        const sourceMatch = content.match(/Source:\s*([^\n]+)/);
        if (!sourceMatch) {
            console.log(`No Source: pattern found in ${file.basename}`);
            return false;
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
            console.log(`Source already matches in ${file.basename}`);
            return false;
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
        
        console.log(`Updated source for ${file.basename}: ${sourceValue}`);
        return true;
    } catch (error) {
        console.error(`Error extracting source for ${file?.basename || 'unknown'}:`, error);
        return false;
    }
}

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

// Export the main function for Templater
module.exports = processFiles;