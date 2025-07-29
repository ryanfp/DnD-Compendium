/**
 * QuickAdd integration for file processing
 * - Uses the EXACT SAME folder traversal code as renameFromPermalink
 * - Adds permalinks (without dates)
 * - Extracts sources (properly cleaned)
 * - Includes parent folder name in permalinks
 * - Removes articles like "the", "a", "an" (but keeps "of")
 * 
 * Updated: 2025-07-29 03:06:45
 * User: ryanfp
 */

module.exports = async function processFolder(params) {
    const app = params.app;
    const Notice = window.Notice;
    
    // EXACT COPY FROM renameFromPermalink START
    // Get selected folder/file
    let targetFile;
    
    // Check for selection in file explorer
    const fileExplorer = app.workspace.getLeavesOfType("file-explorer")[0];
    if (fileExplorer && fileExplorer.view && fileExplorer.view.fileItems) {
        const selectedItems = Object.values(fileExplorer.view.fileItems)
            .filter(i => i.file && i.selected);
        
        if (selectedItems.length > 0) {
            targetFile = selectedItems[0].file;
            console.log(`Using selected file/folder: ${targetFile.path}`);
        }
    }
    
    // If no selection, try from params
    if (!targetFile) {
        targetFile = params.file;
        if (targetFile) {
            console.log(`Using file from params: ${targetFile.path}`);
        }
    }
    
    // If still no target, use active file
    if (!targetFile) {
        targetFile = app.workspace.getActiveFile();
        if (targetFile) {
            console.log(`Using active file: ${targetFile.path}`);
        } else {
            new Notice("No file or folder selected");
            return;
        }
    }
    // EXACT COPY FROM renameFromPermalink END
    
    // Process folder or file
    try {
        if (targetFile.children) {
            // It's a folder
            await processAllFiles(targetFile, app, Notice);
        } else if (targetFile.extension === "md") {
            // It's a markdown file
            await processFile(targetFile, app, Notice);
        } else {
            new Notice("Selected item is not a markdown file or folder");
        }
    } catch (error) {
        console.error(`Error processing: ${error.message}`);
        new Notice(`Error: ${error.message}`);
    }
};

/**
 * Process all files in a folder recursively (EXACT methodology from renameFromPermalink)
 */
async function processAllFiles(folder, app, Notice) {
    // EXACT COPY FROM renameFromPermalink's folder processing
    console.log(`Processing folder: ${folder.path}`);
    new Notice(`Processing folder: ${folder.path}`);
    
    let processed = 0;
    let permalinksAdded = 0;
    let sourcesExtracted = 0;
    
    // Process function to handle recursion
    async function processItem(item) {
        if (item.children) {
            // It's a folder, process all children
            for (const child of item.children) {
                await processItem(child);
            }
        } else if (item.extension === "md") {
            // It's a markdown file
            try {
                const result = await processFile(item, app, null, false);
                if (result.permalinkAdded) permalinksAdded++;
                if (result.sourceExtracted) sourcesExtracted++;
                if (result.permalinkAdded || result.sourceExtracted) processed++;
                
                // Add a small delay to prevent UI lockup
                await new Promise(resolve => setTimeout(resolve, 30));
            } catch (error) {
                console.error(`Error processing ${item.path}: ${error.message}`);
            }
        }
    }
    
    // Start processing from the root folder
    await processItem(folder);
    
    // Show summary
    console.log(`Processed ${processed} files, added ${permalinksAdded} permalinks, extracted ${sourcesExtracted} sources`);
    new Notice(`Processed ${processed} files in ${folder.name}`);
}

/**
 * Process a single file
 * Adds permalink, extracts source
 */
async function processFile(file, app, Notice, showNotifications = true) {
    try {
        console.log(`Processing file: ${file.path}`);
        
        // 1. Add permalink if needed or update if different
        const permalinkAdded = await addPermalinkToFile(file, app);
        
        // 2. Extract source if needed or update if different
        const sourceExtracted = await extractSourceFromFile(file, app);
        
        // Show notification for individual file processing
        if ((permalinkAdded || sourceExtracted) && showNotifications && Notice) {
            new Notice(`Processed: ${file.basename}`);
        }
        
        return { 
            permalinkAdded,
            sourceExtracted
        };
        
    } catch (error) {
        console.error(`Error processing file ${file.path}:`, error);
        if (showNotifications && Notice) {
            new Notice(`Error processing ${file.basename}: ${error.message}`);
        }
        return {
            permalinkAdded: false,
            sourceExtracted: false
        };
    }
}

/**
 * Add permalink to frontmatter with parent folder name
 * Also updates existing permalink if it would be different
 */
async function addPermalinkToFile(file, app) {
    try {
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Generate new permalink from basename
        let newPermalink = trimTitle(file.basename);
        
        // Add parent folder name to permalink
        const pathParts = file.path.split('/');
        if (pathParts.length >= 2) {
            // Get immediate parent folder name
            const parentFolder = pathParts[pathParts.length - 2];
            // Clean it up the same way we clean titles
            const cleanParent = trimTitle(parentFolder);
            
            // Don't add parent if it's already in the permalink
            if (cleanParent && !newPermalink.includes(cleanParent)) {
                newPermalink = newPermalink + '-' + cleanParent;
            }
        }
        
        // Check if permalink exists and if it would be different
        if (cache?.permalink) {
            // Clean existing permalink (remove dates)
            const existingPermalink = cleanPermalink(cache.permalink);
            
            // If the permalinks are the same, skip
            if (existingPermalink === newPermalink) {
                console.log(`Skipping permalink for ${file.basename}: permalink already exists and wouldn't change`);
                return false;
            }
            
            console.log(`Updating permalink for ${file.basename}: ${existingPermalink} -> ${newPermalink}`);
        } else {
            console.log(`Adding permalink for ${file.basename}: ${newPermalink}`);
        }
        
        // Update frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.permalink = newPermalink;
        });
        
        return true;

    } catch (error) {
        console.error(`Error adding permalink to ${file.basename}:`, error);
        return false;
    }
}

/**
 * Extract source from content and add to frontmatter
 * Also updates existing source if it would be different
 */
async function extractSourceFromFile(file, app) {
    try {
        // Read file content
        const content = await app.vault.read(file);
        
        // Match Source: pattern (case insensitive)
        // Matches both "Source:" and "Source;" with various capitalizations
        const sourcePattern = /\b(?:Source|source)[;:]\s*([^(][^\n]+?)(?:\s*\((?:p|pp)\.?\s*\d+(?:-\d+)?\))?$/m;
        const match = content.match(sourcePattern);
        
        if (match && match[1]) {
            // Clean up the source
            let newSource = cleanSource(match[1].trim());
            
            // Get the frontmatter
            const cache = app.metadataCache.getFileCache(file)?.frontmatter;
            
            // Check if source exists and if it would be different
            if (cache?.source) {
                // If the sources are the same, skip
                if (cache.source === newSource) {
                    console.log(`Skipping source extraction for ${file.basename}: source already exists and wouldn't change`);
                    return false;
                }
                
                console.log(`Updating source for ${file.basename}: "${cache.source}" -> "${newSource}"`);
            } else {
                console.log(`Adding source for ${file.basename}: "${newSource}"`);
            }
            
            // Update frontmatter
            await app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.source = newSource;
            });
            
            return true;
        } else {
            console.log(`No source found in ${file.basename}`);
            return false;
        }

    } catch (error) {
        console.error(`Error extracting source from ${file.basename}:`, error);
        return false;
    }
}

/**
 * Clean a permalink - remove dates and special characters
 */
function cleanPermalink(permalink) {
    if (!permalink) return '';
    
    // Remove date patterns (YYYY-MM-DD, YYYYMMDD) from beginning
    let clean = permalink.replace(/^(\d{4}-\d{2}-\d{2}[-_]|\d{8}[-_])/g, '');
    
    // Remove page references
    clean = clean.replace(/\s*(p\.|pg\.|page)\.?\s*\d+.*$/i, '');
    
    // Clean up multiple hyphens and hyphens at start/end
    clean = clean.replace(/-+/g, '-').replace(/^-+|-+$/g, '');
    
    return clean;
}

/**
 * Properly clean a source string
 */
function cleanSource(source) {
    if (!source) return '';
    
    // Remove quotes, asterisks, and other formatting characters
    let clean = source.replace(/[*"'"]/g, '');
    
    // Remove page references (p. X, pg. X, page X)
    clean = clean.replace(/\s*(?:p\.?|pg\.?|page)\s*\d+.*$/i, '');
    
    // Remove trailing punctuation
    clean = clean.replace(/[.,;:]+$/, '');
    
    // Trim whitespace
    clean = clean.trim();
    
    return clean;
}

/**
 * Trims and formats a title for use as a permalink
 * Also removes common articles like "the", "a", "an" (but keeps "of")
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
        // Remove articles like "the", "a", "an" (but keep "of")
        .filter(word => !["the", "a", "an"].includes(word.toLowerCase()))
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