/**
 * QuickAdd integration for file processing
 * - Works with files/folders from context menu
 * - Adds permalinks (without dates)
 * - Extracts sources (properly cleaned)
 * - Can include parent folder name in permalink
 * - Removes articles like "the", "a", "an" (but keeps "of")
 * 
 * Updated: 2025-07-29 02:32:20
 * User: ryanfp
 */

module.exports = async function(params) {
    const app = params.app;
    const Notice = window.Notice;
    
    try {
        console.log("processFolder: Starting script");
        
        // Get the selected file or folder
        let targetFile = null;
        
        // Try from file explorer selection
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0];
        if (fileExplorer?.view?.fileItems) {
            const selectedItems = Object.values(fileExplorer.view.fileItems)
                .filter(item => item.file && item.selected);
            
            if (selectedItems.length > 0) {
                targetFile = selectedItems[0].file;
                console.log(`processFolder: Selected ${targetFile.path} from file explorer`);
            }
        }
        
        // If no selection, try from params or active file
        if (!targetFile) {
            targetFile = params.file || app.workspace.getActiveFile();
            
            if (targetFile) {
                console.log(`processFolder: Using ${targetFile.path} from context or active file`);
            } else {
                console.log("processFolder: No file selected");
                new Notice('No file selected');
                return;
            }
        }
        
        // Process folder or file
        if (targetFile.children) {
            await processFolder(targetFile, app, Notice);
        } else if (targetFile.extension === 'md') {
            await processFile(targetFile, app, Notice);
        } else {
            new Notice('Selected item is not a markdown file or folder');
        }
        
    } catch (error) {
        console.error('Error in processFolder:', error);
        new Notice(`Error: ${error.message}`);
    }
};

/**
 * Process all markdown files in a folder
 */
async function processFolder(folder, app, Notice) {
    try {
        console.log(`Processing folder: ${folder.path}`);
        new Notice(`Processing folder: ${folder.name}`);
        
        // Get all files in folder recursively
        const files = getAllFiles(folder);
        console.log(`Found ${files.length} files in folder ${folder.path}`);
        
        // Process each file
        let processed = 0;
        let permalinksAdded = 0;
        let sourcesExtracted = 0;
        
        for (const file of files) {
            if (file.extension === 'md') {
                try {
                    const result = await processFile(file, app, null, false);
                    
                    if (result.permalinkAdded) permalinksAdded++;
                    if (result.sourceExtracted) sourcesExtracted++;
                    if (result.permalinkAdded || result.sourceExtracted) processed++;
                    
                    await new Promise(resolve => setTimeout(resolve, 50)); // Small delay
                } catch (error) {
                    console.error(`Error processing file ${file.path}:`, error);
                }
            }
        }
        
        console.log(`Processed ${processed} files, added ${permalinksAdded} permalinks, extracted ${sourcesExtracted} sources in folder ${folder.path}`);
        new Notice(`Processed ${processed} files in ${folder.name}`);
        
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
        new Notice(`Error processing folder: ${error.message}`);
    }
}

/**
 * Get all files in a folder recursively
 */
function getAllFiles(folder) {
    const files = [];
    
    function processFolder(item) {
        if (!item.children) return;
        
        for (const child of item.children) {
            if (child.children) {
                processFolder(child);
            } else {
                files.push(child);
            }
        }
    }
    
    processFolder(folder);
    return files;
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
        
        // Skip if permalink already exists
        if (cache?.permalink) {
            // Clean existing permalink (remove dates)
            const existingPermalink = cleanPermalink(cache.permalink);
            
            // Generate new permalink
            const newPermalink = generatePermalink(file);
            
            // If the permalinks are the same, skip
            if (existingPermalink === newPermalink) {
                console.log(`Skipping permalink for ${file.basename}: permalink already exists and wouldn't change`);
                return false;
            }
            
            console.log(`Updating permalink for ${file.basename}: ${existingPermalink} -> ${newPermalink}`);
            
            // Update frontmatter
            await app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.permalink = newPermalink;
            });
            
            return true;
        }
        
        // No permalink exists, add one
        const permalink = generatePermalink(file);
        
        // Update frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.permalink = permalink;
        });

        console.log(`Added permalink for ${file.basename}: ${permalink}`);
        return true;

    } catch (error) {
        console.error(`Error adding permalink to ${file.basename}:`, error);
        return false;
    }
}

/**
 * Generate a permalink from file path
 */
function generatePermalink(file) {
    // Start with basename
    let permalink = trimTitle(file.basename);
    
    // Add parent folder name to permalink
    const pathParts = file.path.split('/');
    if (pathParts.length >= 2) {
        // Get immediate parent folder name
        const parentFolder = pathParts[pathParts.length - 2];
        // Clean it up the same way we clean titles
        const cleanParent = trimTitle(parentFolder);
        
        // Don't add parent if it's already in the permalink
        if (cleanParent && !permalink.includes(cleanParent)) {
            permalink = permalink + '-' + cleanParent;
        }
    }
    
    return permalink;
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