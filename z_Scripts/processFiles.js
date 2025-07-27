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

// Use window object to persist processed files between runs
// This way it survives across multiple calls from Linter
if (!window.zProcessedFiles) {
    window.zProcessedFiles = new Set();
}

// Add a timestamp to track runs and reset the cache after a while
const CACHE_TIMEOUT = 60000; // 1 minute
if (!window.zLastProcessingTime || Date.now() - window.zLastProcessingTime > CACHE_TIMEOUT) {
    window.zProcessedFiles.clear();
    window.zLastProcessingTime = Date.now();
}

async function processFiles(params) {
    try {
        // Update processing time
        window.zLastProcessingTime = Date.now();
        
        console.log("Starting unified file processing");
        console.log(`Currently ${window.zProcessedFiles.size} files in processed cache`);
        
        // Make sure params is an object
        if (!params || typeof params !== 'object') {
            throw new Error("Invalid params: not an object");
        }
        
        const { app } = params;
        if (!app) {
            throw new Error("App not provided");
        }
        
        // Get the active file
        let fileObj;
        
        try {
            fileObj = app.workspace.getActiveFile();
            console.log("Got active file:", fileObj ? fileObj.path : "none");
        } catch (err) {
            console.log("Error getting active file:", err);
        }
        
        // If we couldn't get the active file, try other methods
        if (!fileObj && params.file) {
            fileObj = params.file;
            console.log("Using file from params:", fileObj.path);
        }
        
        // If we still don't have a valid file, throw an error
        if (!fileObj || !fileObj.path) {
            throw new Error("Could not find a valid file to process. Please make sure a file is active.");
        }
        
        console.log("File object found:", fileObj.path);
        
        // Process based on whether we have a file or folder
        if (fileObj.children && Array.isArray(fileObj.children)) {
            // It's a folder
            await processFolder(fileObj, app);
        } else {
            // It's a file
            await processFile(fileObj, app);
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
        if (!file) {
            console.error("Invalid file object:", file);
            return;
        }
        
        if (!file.path) {
            console.error("File object has no path:", file);
            return;
        }
        
        // Skip if already processed in this session
        if (window.zProcessedFiles.has(file.path)) {
            console.log(`Skipping already processed file: ${file.path}`);
            return;
        }
        
        // Mark as processed
        window.zProcessedFiles.add(file.path);
        
        const fileName = file.basename || file.name || file.path.split('/').pop().split('.')[0] || "unknown";
        const filePath = file.path;
        
        console.log(`Processing file: ${fileName} at path ${filePath}`);
        
        // Step 1: Add permalink to frontmatter
        console.log(`Step 1: Adding permalink to ${fileName}`);
        let permalinkAdded = await addPermalink(file, app);
        
        // Need to get updated file reference after potential permalink addition
        let currentFile = app.vault.getAbstractFileByPath(filePath);
        if (!currentFile) {
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
        
        if (!currentFile) {
            console.error(`File no longer exists after rename`);
            return;
        }
        
        // Add the new path to processed files if it was renamed
        if (newFilePath) {
            window.zProcessedFiles.add(newFilePath);
        }
        
        // Step 3: Extract source from content to frontmatter
        console.log(`Step 3: Extracting source for ${currentFile.basename || currentFile.name || fileName}`);
        
        // Fix for "Error reading file undefined" - use try/catch here
        try {
            await extractSource(currentFile, app);
        } catch (extractError) {
            console.error(`Error extracting source: ${extractError.message}`);
        }
        
        console.log(`Completed processing: ${currentFile.basename || currentFile.name || fileName}`);
    } catch (error) {
        console.error(`Error processing file:`, error);
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
        if (!folder || !Array.isArray(folder.children)) {
            console.error("Invalid folder object:", folder);
            return;
        }
        
        const folderName = folder.name || folder.path || "unknown folder";
        console.log(`Processing folder: ${folderName}`);
        
        // Get all markdown files in the folder
        const files = folder.children
            .filter(file => 
                // Check if it's a file and if it has a .md extension
                file && 
                file.path && 
                file.path.toLowerCase().endsWith('.md')
            );
        
        console.log(`Found ${files.length} markdown files in folder`);
        
        // Process each file sequentially
        for (const file of files) {
            // Skip if already processed
            if (window.zProcessedFiles.has(file.path)) {
                console.log(`Skipping already processed file in folder: ${file.path}`);
                continue;
            }
            
            await processFile(file, app);
            // Small delay to prevent overwhelming the system
            await new Promise(resolve => setTimeout(resolve, 100));
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
        if (!file || !file.path) {
            console.error("Invalid file object in addPermalink");
            return false;
        }
        
        // Skip if not a markdown file
        if (!file.path.toLowerCase().endsWith('.md')) {
            console.log(`Skipping non-markdown file: ${file.path}`);
            return false;
        }
        
        // Get the basename from the path if not directly available
        const basename = file.basename || file.name || file.path.split('/').pop().split('.')[0] || "unknown";
        
        // Get the metadata cache for the file
        let fileCache;
        try {
            fileCache = app.metadataCache.getFileCache(file);
        } catch (error) {
            console.log(`Error getting metadata cache: ${error.message}`);
            fileCache = null;
        }
        
        if (!fileCache) {
            console.log(`No metadata cache for file: ${basename}, will try to read raw content`);
        }
        
        let existingPermalink = null;
        
        // Try to get existing permalink from cache
        if (fileCache && fileCache.frontmatter && fileCache.frontmatter.permalink) {
            existingPermalink = fileCache.frontmatter.permalink;
        } 
        // If no cache or no permalink in cache, try reading the file directly
        else if (file.path) {
            try {
                const content = await app.vault.read(file);
                const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
                
                if (frontmatterMatch) {
                    const frontmatterText = frontmatterMatch[1];
                    const permalinkMatch = frontmatterText.match(/permalink:\s*(.+)/);
                    if (permalinkMatch) {
                        existingPermalink = permalinkMatch[1].trim();
                    }
                }
            } catch (err) {
                console.log(`Could not read file to check frontmatter: ${err.message}`);
            }
        }
        
        // Generate permalink from basename
        const wouldBePermalink = trimTitle(basename);
        
        // Skip if permalink already exists and matches
        if (existingPermalink === wouldBePermalink) {
            console.log(`Permalink already exists for ${basename}`);
            return false;
        }
        
        // Update frontmatter
        try {
            await app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.permalink = wouldBePermalink;
            });
            
            // Force metadata cache refresh
            try {
                await app.metadataCache.trigger();
            } catch (error) {
                console.log(`Error refreshing cache: ${error.message}`);
            }
            
            // Add a small delay to ensure cache is updated
            await new Promise(resolve => setTimeout(resolve, 200));
            
            console.log(`Added permalink for ${basename}: ${wouldBePermalink}`);
            return true;
        } catch (err) {
            console.error(`Error updating frontmatter for ${basename}:`, err);
            return false;
        }
    } catch (error) {
        console.error(`Error in addPermalink:`, error);
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
        if (!file || !file.path) {
            console.error("Invalid file object in renameFileBasedOnPermalink");
            return null;
        }
        
        // Get the basename
        const basename = file.basename || file.name || file.path.split('/').pop().split('.')[0] || "unknown";
        
        // Get the metadata cache for the file
        let fileCache;
        try {
            fileCache = app.metadataCache.getFileCache(file);
        } catch (error) {
            console.log(`Error getting metadata cache: ${error.message}`);
            fileCache = null;
        }
        
        // Get the permalink either from cache or by reading the file
        let permalink = null;
        
        if (fileCache && fileCache.frontmatter) {
            permalink = fileCache.frontmatter.permalink;
        }
        
        // If we couldn't get it from cache, try reading the file
        if (!permalink && file.path) {
            try {
                const content = await app.vault.read(file);
                const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
                
                if (frontmatterMatch) {
                    const frontmatterText = frontmatterMatch[1];
                    const permalinkMatch = frontmatterText.match(/permalink:\s*(.+)/);
                    if (permalinkMatch) {
                        permalink = permalinkMatch[1].trim();
                    }
                }
            } catch (err) {
                console.log(`Could not read file to check frontmatter: ${err.message}`);
            }
        }
        
        // Skip if no permalink
        if (!permalink) {
            console.log(`No permalink found for ${basename}`);
            return null;
        }
        
        // Skip if filename already matches
        if (basename === permalink) {
            console.log(`Filename already matches permalink for ${basename}`);
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
        
        try {
            // First, ensure the old name is added as an alias if it doesn't exist
            let aliases = [];
            
            // Try to get existing aliases
            if (fileCache && fileCache.frontmatter && fileCache.frontmatter.aliases) {
                if (Array.isArray(fileCache.frontmatter.aliases)) {
                    aliases = fileCache.frontmatter.aliases;
                } else if (typeof fileCache.frontmatter.aliases === 'string') {
                    // If it's a string, try to parse it as an array
                    aliases = fileCache.frontmatter.aliases.split(',').map(a => a.trim());
                }
            }
            
            if (!aliases.includes(basename)) {
                await app.fileManager.processFrontMatter(file, (frontmatter) => {
                    frontmatter.aliases = frontmatter.aliases || [];
                    if (!frontmatter.aliases.includes(basename)) {
                        frontmatter.aliases.push(basename);
                    }
                });
                
                // Force metadata cache refresh
                try {
                    await app.metadataCache.trigger();
                } catch (error) {
                    console.log(`Error refreshing cache: ${error.message}`);
                }
                
                // Add a small delay to ensure cache is updated
                await new Promise(resolve => setTimeout(resolve, 200));
            }
            
            // Now rename the file
            await app.fileManager.renameFile(file, newPath);
            
            // Force metadata cache refresh
            try {
                await app.metadataCache.trigger();
            } catch (error) {
                console.log(`Error refreshing cache: ${error.message}`);
            }
            
            // Add a small delay to ensure cache is updated
            await new Promise(resolve => setTimeout(resolve, 200));
            
            console.log(`Renamed ${basename} to ${permalink}`);
            return newPath;
        } catch (err) {
            console.error(`Error during rename operation for ${basename}:`, err);
            return null;
        }
    } catch (error) {
        console.error(`Error in renameFileBasedOnPermalink:`, error);
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
        if (!file || !file.path) {
            console.error("Invalid file object in extractSource");
            return false;
        }
        
        // Get the basename
        const basename = file.basename || file.name || file.path.split('/').pop().split('.')[0] || "unknown";
        
        // Read the file content
        let content;
        try {
            content = await app.vault.read(file);
        } catch (error) {
            console.error(`Could not read file content for ${basename}:`, error);
            return false;
        }
        
        // Look for "Source:" pattern and extract the value
        const sourceMatch = content.match(/Source:\s*([^\n]+)/);
        if (!sourceMatch) {
            console.log(`No Source: pattern found in ${basename}`);
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
        
        // Get existing frontmatter source
        let existingSource = null;
        
        // Try to get it from cache first
        try {
            const fileCache = app.metadataCache.getFileCache(file);
            if (fileCache && fileCache.frontmatter) {
                existingSource = fileCache.frontmatter.source;
            }
        } catch (error) {
            console.log(`Error getting metadata cache: ${error.message}`);
        }
        
        // If we couldn't get it from cache, try parsing the frontmatter
        if (existingSource === null) {
            const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
            if (frontmatterMatch) {
                const frontmatterText = frontmatterMatch[1];
                const sourceMatch = frontmatterText.match(/source:\s*(.+)/);
                if (sourceMatch) {
                    existingSource = sourceMatch[1].trim();
                }
            }
        }
        
        // Check if source already exists and matches
        if (existingSource === sourceValue) {
            console.log(`Source already matches in ${basename}`);
            return false;
        }
        
        // Update frontmatter
        try {
            await app.fileManager.processFrontMatter(file, (frontmatter) => {
                // Update the source
                frontmatter["source"] = sourceValue;
            });
            
            // Force metadata cache refresh
            try {
                await app.metadataCache.trigger();
            } catch (error) {
                console.log(`Error refreshing cache: ${error.message}`);
            }
            
            // Add a small delay to ensure cache is updated
            await new Promise(resolve => setTimeout(resolve, 200));
            
            console.log(`Updated source for ${basename}: ${sourceValue}`);
            return true;
        } catch (err) {
            console.error(`Error updating frontmatter for ${basename}:`, err);
            return false;
        }
    } catch (error) {
        console.error(`Error in extractSource:`, error);
        return false;
    }
}

/**
 * Trims and formats a title for use as a permalink
 * @param {string} title - The title to format
 * @returns {string} - The formatted permalink
 */
function trimTitle(title) {
    if (!title || typeof title !== 'string') {
        console.error("Invalid title in trimTitle:", title);
        return '';
    }
    
    try {
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
    } catch (error) {
        console.error("Error in trimTitle:", error);
        return '';
    }
}

// Export the main function for Templater
module.exports = processFiles;