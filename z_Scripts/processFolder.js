/**
 * QuickAdd integration for file processing
 * - Works with files/folders from context menu
 * - Adds permalinks (without dates)
 * - Extracts sources (properly cleaned)
 * - Can include parent folder name in permalink
 * - Updates existing permalinks/sources if they would be different
 * 
 * Updated: 2025-07-29 00:43:31
 * User: ryanfp
 */

// Make sure we have the state manager defined globally
if (!window.obsidianStateManager) {
    window.obsidianStateManager = {
        fileQueue: [],
        currentFolder: null,
        
        // Start a fresh folder processing operation
        startFolderProcessing(folderPath) {
            this.fileQueue = [];
            this.currentFolder = folderPath;
            console.log(`Started processing folder: ${folderPath}`);
        },
        
        // Add files to the processing queue
        queueFiles(filePaths) {
            this.fileQueue = [...this.fileQueue, ...filePaths];
            console.log(`Queued ${filePaths.length} files, total in queue: ${this.fileQueue.length}`);
        },
        
        // Get the next file to process
        getNextFile() {
            if (this.fileQueue.length === 0) {
                return null;
            }
            return this.fileQueue.shift();
        }
    };
}

module.exports = async function(params) {
    try {
        const app = params.app;
        const stateManager = window.obsidianStateManager;
        
        // Get the Notice class from the global scope
        const Notice = window.Notice;

        // Try to get selected files from file explorer
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0];
        if (fileExplorer?.view?.fileItems) {
            const selectedFiles = Object.values(fileExplorer.view.fileItems)
                .filter(item => item.file && item.selected);
            
            if (selectedFiles && selectedFiles.length > 0) {
                console.log(`Found ${selectedFiles.length} selected items`);
                
                // Queue selected files
                for (const item of selectedFiles) {
                    const file = item.file;
                    
                    // Handle folders
                    if (file.children) {
                        console.log(`Processing folder: ${file.path}`);
                        const folderFiles = getMarkdownFilesInFolder(app, file);
                        stateManager.queueFiles(folderFiles.map(f => f.path));
                    } 
                    // Handle individual files
                    else if (file.extension === 'md') {
                        stateManager.queueFiles([file.path]);
                    }
                }
                
                // Process files from queue
                let nextFilePath;
                while ((nextFilePath = stateManager.getNextFile()) !== null) {
                    const file = app.vault.getAbstractFileByPath(nextFilePath);
                    if (file && file.extension === 'md') {
                        await processFile(file, app, Notice);
                        // Add a delay between files
                        await new Promise(resolve => setTimeout(resolve, 100));
                    }
                }
                return;
            }
        }

        // If no selection, try QuickAdd or active file
        let targetFile = null;

        // Try QuickAdd context
        if (params.file) {
            targetFile = params.file;
        }

        // If no file from QuickAdd, try active file
        if (!targetFile) {
            targetFile = app.workspace.getActiveFile();
        }

        // If we have a single file, process it
        if (targetFile && targetFile.extension === 'md') {
            stateManager.queueFiles([targetFile.path]);
            await processFile(targetFile, app, Notice);
            return;
        }

        // If we're processing a folder
        if (targetFile?.children) {
            const folderFiles = getMarkdownFilesInFolder(app, targetFile);
            stateManager.queueFiles(folderFiles.map(f => f.path));
            
            // Process files from queue
            let nextFilePath;
            let processed = 0;
            
            while ((nextFilePath = stateManager.getNextFile()) !== null) {
                const file = app.vault.getAbstractFileByPath(nextFilePath);
                if (file && file.extension === 'md') {
                    await processFile(file, app, Notice);
                    processed++;
                    // Add a delay between files
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            }
            
            new Notice(`Processed ${processed} files in ${targetFile.name}`);
        }

    } catch (error) {
        console.error('Error in processFolder:', error);
        new window.Notice(`Error: ${error.message}`);
    }
};

/**
 * Get all markdown files in a folder (including subfolders)
 */
function getMarkdownFilesInFolder(app, folder) {
    const allFiles = app.vault.getMarkdownFiles();
    const folderPath = normalizeFilePath(folder.path);
    
    return allFiles.filter(file => {
        const normalizedFilePath = normalizeFilePath(file.path);
        return normalizedFilePath.startsWith(folderPath + '|') || 
              (normalizedFilePath === folderPath + '.md');
    });
}

/**
 * Process a single file
 * Adds permalink, extracts source
 */
async function processFile(file, app, Notice) {
    try {
        console.log(`Processing file: ${file.path}`);
        
        // 1. Add permalink if needed or update if different
        const permalinkAdded = await addPermalinkToFile(file, app);
        
        // 2. Extract source if needed or update if different
        const sourceExtracted = await extractSourceFromFile(file, app);
        
        // Show notification for individual file processing
        if (permalinkAdded || sourceExtracted) {
            new Notice(`Processed: ${file.basename}`);
        }
        
        return { 
            permalinkAdded,
            sourceExtracted
        };
        
    } catch (error) {
        console.error(`Error processing file ${file.path}:`, error);
        new Notice(`Error processing ${file.basename}: ${error.message}`);
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
 * Normalize file path for comparison
 */
function normalizeFilePath(path) {
    return path.replace(/\\/g, '|').replace(/\//g, '|');
}