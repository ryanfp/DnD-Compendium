/**
 * QuickAdd integration for file processing
 * - Works with files/folders from context menu or file explorer selections
 * - Adds permalinks (without dates) based on frontmatter title
 * - Extracts sources (properly cleaned)
 * - Includes parent folder name in permalinks
 * - Removes articles like "the", "a", "an" (but keeps "of")
 * - Preserves apostrophes in sources
 * - Always updates source when found in content
 * 
 * Updated: 2025-08-01 04:33:02
 * User: ryanfp
 */

module.exports = async function(params) {
    const app = params.app;
    
    console.log("processFolder: Starting with params", Object.keys(params));
    
    try {
        console.log("TRYING TO GET ACTIVE FILE'S PARENT FOLDER");
        
        // Try to get selected files from file explorer
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0];
        
        if (fileExplorer) {
            console.log("Found file explorer");
            console.log("File explorer:", Object.keys(fileExplorer));
            console.log("File explorer view:", fileExplorer.view ? Object.keys(fileExplorer.view) : "no view");
            
            if (fileExplorer.view && fileExplorer.view.fileItems) {
                console.log("fileItems exists:", Object.keys(fileExplorer.view.fileItems).length);
                
                const selectedFileItems = Object.values(fileExplorer.view.fileItems)
                    .filter(item => {
                        const isSelected = item && item.selected;
                        if (isSelected) {
                            console.log("Found selected item:", item.file ? item.file.path : "no file");
                        }
                        return isSelected && item.file;
                    });
                
                console.log(`Found ${selectedFileItems.length} selected items`);
                
                if (selectedFileItems.length > 0) {
                    for (const item of selectedFileItems) {
                        const file = item.file;
                        if (file.children) {
                            // It's a folder
                            console.log(`Selected folder: ${file.path}`);
                            new window.Notice(`Processing folder: ${file.name}`);
                            await processFolder(file, app);
                        } else if (file.extension === 'md') {
                            // It's a markdown file
                            console.log(`Selected file: ${file.path}`);
                            await processFile(file, app);
                        }
                    }
                    return;
                }
            }
        }
        
        // If we get here, we don't have selected files
        console.log("No selection found, using active file");
        
        // Get the active file or folder
        const activeFile = app.workspace.getActiveFile();
        
        if (activeFile) {
            console.log(`Using active file: ${activeFile.path}`);
            
            // If active file's parent folder should be processed
            const parentFolder = activeFile.parent;
            if (parentFolder) {
                console.log(`Using active file's parent folder: ${parentFolder.path}`);
                new window.Notice(`Processing folder: ${parentFolder.name}`);
                await processFolder(parentFolder, app);
            } else {
                // Just process the active file
                await processFile(activeFile, app);
            }
        } else {
            console.log("No active file found");
            new window.Notice("No file or folder selected");
        }
    } catch (error) {
        console.error("Error in processFolder:", error);
        new window.Notice(`Error: ${error.message}`);
    }
};

/**
 * Process all markdown files in a folder
 */
async function processFolder(folder, app) {
    try {
        console.log(`Processing folder: ${folder.path}`);
        
        // Get all markdown files from vault
        const allFiles = app.vault.getMarkdownFiles();
        
        // Filter for files in this folder (including subfolders)
        const filesInFolder = allFiles.filter(file => {
            return file.path.startsWith(folder.path + '/');
        });
        
        console.log(`Found ${filesInFolder.length} markdown files in folder`);
        
        let processed = 0;
        let permalinksAdded = 0;
        let sourcesExtracted = 0;
        
        // Process each file
        for (const file of filesInFolder) {
            try {
                const result = await processFile(file, app, false);
                if (result.permalinkAdded) permalinksAdded++;
                if (result.sourceExtracted) sourcesExtracted++;
                if (result.permalinkAdded || result.sourceExtracted) processed++;
                
                // Add a small delay
                await new Promise(resolve => setTimeout(resolve, 50));
            } catch (error) {
                console.error(`Error processing file ${file.path}:`, error);
            }
        }
        
        console.log(`Processed ${processed} files, added ${permalinksAdded} permalinks, extracted ${sourcesExtracted} sources in folder ${folder.path}`);
        new window.Notice(`Processed ${processed} files in folder ${folder.name}`);
        
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
        new window.Notice(`Error processing folder: ${error.message}`);
    }
}

/**
 * Process a single file
 * Adds permalink, extracts source
 */
async function processFile(file, app, showNotifications = true) {
    try {
        console.log(`Processing file: ${file.path}`);
        
        // 1. Add permalink if needed or update if different
        const permalinkAdded = await addPermalinkToFile(file, app);
        
        // 2. Extract source if needed or update if different
        const sourceExtracted = await extractSourceFromFile(file, app);
        
        // Show notification for individual file processing
        if ((permalinkAdded || sourceExtracted) && showNotifications) {
            new window.Notice(`Processed: ${file.basename}`);
        }
        
        return { 
            permalinkAdded,
            sourceExtracted
        };
        
    } catch (error) {
        console.error(`Error processing file ${file.path}:`, error);
        if (showNotifications) {
            new window.Notice(`Error processing ${file.basename}: ${error.message}`);
        }
        return {
            permalinkAdded: false,
            sourceExtracted: false
        };
    }
}

/**
 * Add permalink to frontmatter with parent folder name
 * UPDATED: Uses title property instead of filename
 */
async function addPermalinkToFile(file, app) {
    try {
        // Read file content to get frontmatter directly
        const content = await app.vault.read(file);
        
        // Extract frontmatter using regex
        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
        let existingPermalink = null;
        let title = null;
        
        if (frontmatterMatch && frontmatterMatch[1]) {
            const frontmatterContent = frontmatterMatch[1];
            
            // Find permalink in frontmatter
            const permalinkLine = frontmatterContent.split('\n')
                .find(line => line.trim().startsWith('permalink:'));
            
            if (permalinkLine) {
                existingPermalink = permalinkLine.substring(permalinkLine.indexOf(':') + 1).trim();
                // Remove quotes if present
                existingPermalink = existingPermalink.replace(/^["']|["']$/g, '');
                existingPermalink = cleanPermalink(existingPermalink);
            }
            
            // Find title in frontmatter
            const titleLine = frontmatterContent.split('\n')
                .find(line => line.trim().startsWith('title:'));
            
            if (titleLine) {
                title = titleLine.substring(titleLine.indexOf(':') + 1).trim();
                // Remove quotes if present
                title = title.replace(/^["']|["']$/g, '');
                console.log(`Found title in frontmatter: "${title}"`);
            }
        }
        
        // If no title in frontmatter, fall back to basename
        if (!title) {
            title = file.basename;
            console.log(`No title found, using basename: "${title}"`);
        }
        
        // Generate new permalink from title
        let newPermalink = trimTitle(title);
        console.log(`Generated permalink from title: "${newPermalink}"`);
        
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
                console.log(`Added parent folder: "${newPermalink}"`);
            }
        }
        
        // Check if permalink exists and if it would be different
        if (existingPermalink) {
            // If the permalinks are the same, skip
            if (existingPermalink === newPermalink) {
                console.log(`Skipping permalink for ${file.basename}: permalink already exists and wouldn't change`);
                return false;
            }
            
            console.log(`Updating permalink for ${file.basename}: "${existingPermalink}" -> "${newPermalink}"`);
        } else {
            console.log(`Adding permalink for ${file.basename}: "${newPermalink}"`);
        }
        
        // Update frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.permalink = newPermalink;
        });
        
        // Force update as backup approach
        try {
            const newContent = content.replace(
                /^---\s*\n([\s\S]*?)\n---/,
                (match, frontmatterContent) => {
                    const lines = frontmatterContent.split('\n');
                    const permalinkIndex = lines.findIndex(line => line.trim().startsWith('permalink:'));
                    
                    if (permalinkIndex >= 0) {
                        lines[permalinkIndex] = `permalink: "${newPermalink}"`;
                    } else {
                        lines.push(`permalink: "${newPermalink}"`);
                    }
                    
                    return `---\n${lines.join('\n')}\n---`;
                }
            );
            
            if (newContent !== content) {
                await app.vault.modify(file, newContent);
            }
        } catch (writeError) {
            console.error(`Direct write error: ${writeError}`);
        }
        
        return true;

    } catch (error) {
        console.error(`Error adding permalink to ${file.basename}:`, error);
        return false;
    }
}

/**
 * Extract source from content and add to frontmatter
 * UPDATED: Always updates source when found in content (no comparison)
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
            console.log(`Found and cleaned source: "${newSource}"`);
            
            // ALWAYS update the source when found in content (no comparison)
            console.log(`Updating source for ${file.basename} to: "${newSource}"`);
            
            // Update frontmatter
            await app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.source = newSource;
            });
            
            // Force update as backup approach
            try {
                const newContent = content.replace(
                    /^---\s*\n([\s\S]*?)\n---/,
                    (match, frontmatterContent) => {
                        const lines = frontmatterContent.split('\n');
                        const sourceIndex = lines.findIndex(line => line.trim().startsWith('source:'));
                        
                        if (sourceIndex >= 0) {
                            lines[sourceIndex] = `source: "${newSource}"`;
                        } else {
                            lines.push(`source: "${newSource}"`);
                        }
                        
                        return `---\n${lines.join('\n')}\n---`;
                    }
                );
                
                if (newContent !== content) {
                    await app.vault.modify(file, newContent);
                }
            } catch (writeError) {
                console.error(`Direct write error: ${writeError}`);
            }
            
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
 * - Now preserves apostrophes
 */
function cleanSource(source) {
    if (!source) return '';
    
    // Remove quotes, asterisks, but KEEP apostrophes
    let clean = source.replace(/[*""]/g, '');
    
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
        // Remove articles like "the", "a", "an" (but keeps "of")
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