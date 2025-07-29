/**
 * QuickAdd integration for file processing
 * - Works with files/folders from context menu
 * - Adds permalinks (without dates)
 * - Extracts sources (properly cleaned)
 * - Can include parent folder name in permalink
 * 
 * Updated: 2025-07-29 00:31:45
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
                // Process each selected item (file or folder)
                for (const item of selectedFiles) {
                    const file = item.file;
                    
                    // Handle folders
                    if (file.children) {
                        await processFolder(file, app, Notice);
                    } 
                    // Handle files
                    else if (file.extension === 'md') {
                        await processFile(file, app, Notice);
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
            await processFile(targetFile, app, Notice);
            return;
        }

        // If we're processing a folder
        if (targetFile?.children) {
            await processFolder(targetFile, app, Notice);
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
        
        // Get all markdown files from vault
        const allFiles = app.vault.getMarkdownFiles();
        const folderPath = normalizeFilePath(folder.path);
        
        // Filter for files in this folder (including subfolders)
        const filesInFolder = allFiles.filter(file => {
            const normalizedFilePath = normalizeFilePath(file.path);
            return normalizedFilePath.startsWith(folderPath + '|') || 
                  (normalizedFilePath === folderPath + '.md');
        });
        
        console.log(`Found ${filesInFolder.length} markdown files in folder ${folder.path}`);
        
        if (filesInFolder.length === 0) {
            console.log("No markdown files found in folder");
            new Notice("No markdown files found in folder");
            return false;
        }
        
        // Process each file
        let processed = 0;
        let permalinksAdded = 0;
        let sourcesExtracted = 0;
        
        for (const file of filesInFolder) {
            try {
                console.log(`Processing file in folder: ${file.path}`);
                const result = await processFile(file, app, Notice, false); // Don't show individual notifications
                
                if (result.permalinkAdded || result.sourceExtracted) {
                    processed++;
                    
                    if (result.permalinkAdded) {
                        permalinksAdded++;
                    }
                    
                    if (result.sourceExtracted) {
                        sourcesExtracted++;
                    }
                }
                
                // Small delay to prevent UI freezing
                await new Promise(resolve => setTimeout(resolve, 50));
                
            } catch (error) {
                console.error(`Error processing file ${file.path}:`, error);
            }
        }
        
        console.log(`Processed ${processed} files, added ${permalinksAdded} permalinks, extracted ${sourcesExtracted} sources in folder ${folder.path}`);
        new Notice(`Processed ${processed} files in ${folder.name}`);
        
        return true;
        
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
        new Notice(`Error processing folder: ${error.message}`);
        return false;
    }
}

/**
 * Process a single file
 * Adds permalink, extracts source
 */
async function processFile(file, app, Notice, showNotifications = true) {
    try {
        console.log(`Processing file: ${file.path}`);
        
        // 1. Add permalink if needed
        const permalinkAdded = await addPermalinkToFile(file, app);
        
        // 2. Extract source if needed
        const sourceExtracted = await extractSourceFromFile(file, app);
        
        // Show notification for individual file processing
        if (showNotifications && (permalinkAdded || sourceExtracted)) {
            new Notice(`Processed: ${file.basename}`);
        }
        
        return { 
            permalinkAdded,
            sourceExtracted
        };
        
    } catch (error) {
        console.error(`Error processing file ${file.path}:`, error);
        if (showNotifications) {
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
 */
async function addPermalinkToFile(file, app) {
    try {
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if permalink already exists
        if (cache?.permalink) {
            console.log(`Skipping permalink for ${file.basename}: permalink already exists`);
            return false;
        }

        // Generate permalink from basename
        let permalink = trimTitle(file.basename);
        
        // Add parent folder name to permalink
        const shouldIncludeParent = true; // Set to false if you don't want this feature
        
        if (shouldIncludeParent) {
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
        }
        
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
 * Extract source from content and add to frontmatter
 * Improved to properly clean sources
 */
async function extractSourceFromFile(file, app) {
    try {
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if source already exists
        if (cache?.source) {
            console.log(`Skipping source extraction for ${file.basename}: source already exists`);
            return false;
        }

        // Read file content
        const content = await app.vault.read(file);
        
        // Match Source: pattern (case insensitive)
        // Matches both "Source:" and "Source;" with various capitalizations
        const sourcePattern = /\b(?:Source|source)[;:]\s*([^(][^\n]+?)(?:\s*\((?:p|pp)\.?\s*\d+(?:-\d+)?\))?$/m;
        const match = content.match(sourcePattern);
        
        if (match && match[1]) {
            let source = match[1].trim();
            
            // Clean up the source - improved version
            source = cleanSource(source);
            
            // Update frontmatter
            await app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.source = source;
            });

            console.log(`Extracted source for ${file.basename}: "${source}"`);
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