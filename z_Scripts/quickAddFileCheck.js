/**
 * QuickAdd integration for file processing
 * - Works with files/folders from context menu
 * - Adds permalinks (without dates)
 * - Extracts sources
 * - Renames files preserving backlinks
 * 
 * Updated: 2025-07-28 04:52:21
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
        
        console.log("QuickAddFileCheck: Starting script");

        // Try to get selected files from file explorer
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0];
        if (fileExplorer?.view?.fileItems) {
            console.log("QuickAddFileCheck: Found file explorer");
            
            const selectedFiles = Object.values(fileExplorer.view.fileItems)
                .filter(item => item.file && item.selected);
            
            console.log(`QuickAddFileCheck: Found ${selectedFiles.length} selected items`);
            
            if (selectedFiles && selectedFiles.length > 0) {
                console.log("QuickAddFileCheck: Processing selected files/folders");
                
                // Process each selected item (file or folder)
                for (const item of selectedFiles) {
                    const file = item.file;
                    
                    // Handle folders
                    if (file.children) {
                        console.log(`QuickAddFileCheck: Processing folder ${file.path}`);
                        await processFolder(file, app, Notice);
                    } 
                    // Handle files
                    else if (file.extension === 'md') {
                        console.log(`QuickAddFileCheck: Processing file ${file.path}`);
                        await processFile(file, app, Notice);
                    }
                }
                return;
            }
        }

        // If no selection, try QuickAdd or active file
        let targetFile = null;
        console.log("QuickAddFileCheck: No selection in file explorer, checking other sources");

        // Try QuickAdd context
        if (params.file) {
            targetFile = params.file;
            console.log(`QuickAddFileCheck: Found file from QuickAdd context: ${targetFile.path}`);
        }

        // If no file from QuickAdd, try active file
        if (!targetFile) {
            targetFile = app.workspace.getActiveFile();
            if (targetFile) {
                console.log(`QuickAddFileCheck: Using active file: ${targetFile.path}`);
            }
        }

        // If we have a single file, process it
        if (targetFile && targetFile.extension === 'md') {
            await processFile(targetFile, app, Notice);
            return;
        }

        // If we're processing a folder
        if (targetFile && targetFile.children) {
            await processFolder(targetFile, app, Notice);
            return;
        }

        console.log("QuickAddFileCheck: No file or folder found to process");
        new Notice("No file or folder found to process");

    } catch (error) {
        console.error('Error in quickAddFileCheck:', error);
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
        let renamed = 0;
        let skipped = 0;
        
        for (const file of filesInFolder) {
            try {
                console.log(`Processing file in folder: ${file.path}`);
                const result = await processFile(file, app, Notice, false); // Don't show individual notifications
                
                if (result.permalinkAdded || result.sourceExtracted || result.renamed) {
                    processed++;
                    
                    if (result.permalinkAdded) {
                        permalinksAdded++;
                    }
                    
                    if (result.sourceExtracted) {
                        sourcesExtracted++;
                    }
                    
                    if (result.renamed) {
                        renamed++;
                    }
                } else {
                    skipped++;
                }
                
                // Small delay to prevent UI freezing
                await new Promise(resolve => setTimeout(resolve, 50));
                
            } catch (error) {
                console.error(`Error processing file ${file.path}:`, error);
                skipped++;
            }
        }
        
        console.log(`Processed ${processed} files, added ${permalinksAdded} permalinks, extracted ${sourcesExtracted} sources, renamed ${renamed} files, skipped ${skipped} in folder ${folder.path}`);
        new Notice(`Processed ${processed} files, renamed ${renamed} in ${folder.name}`);
        
        return true;
        
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
        new Notice(`Error processing folder: ${error.message}`);
        return false;
    }
}

/**
 * Process a single file
 * Adds permalink, extracts source, and now renames the file based on permalink
 */
async function processFile(file, app, Notice, showNotifications = true) {
    try {
        console.log(`Processing file: ${file.path}`);
        
        // Track changes
        let permalinkAdded = false;
        let sourceExtracted = false;
        let renamed = false;
        
        // 1. Add permalink if needed
        permalinkAdded = await addPermalinkToFile(file, app);
        
        // 2. Extract source if needed
        sourceExtracted = await extractSourceFromFile(file, app);
        
        // 3. New feature: Rename file based on permalink if different from current name
        renamed = await renameFileFromPermalink(file, app, Notice);
        
        // Show notification for individual file processing
        if (showNotifications && (permalinkAdded || sourceExtracted || renamed)) {
            if (renamed) {
                new Notice(`Processed and renamed: ${file.basename}`);
            } else {
                new Notice(`Processed: ${file.basename}`);
            }
        }
        
        return { 
            permalinkAdded,
            sourceExtracted,
            renamed
        };
        
    } catch (error) {
        console.error(`Error processing file ${file.path}:`, error);
        if (showNotifications) {
            new Notice(`Error processing ${file.basename}: ${error.message}`);
        }
        return {
            permalinkAdded: false,
            sourceExtracted: false,
            renamed: false
        };
    }
}

/**
 * Add permalink to frontmatter
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
        const permalink = trimTitle(file.basename);
        
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
            
            // Clean up the source
            // Remove quotes and asterisks
            source = source.replace(/[*"]/g, '');
            
            // Remove page references
            source = source.replace(/\s*(p\.|pg\.)\s*\d+.*$/, '');
            
            // Remove trailing whitespace
            source = source.trim();
            
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
 * Rename file based on permalink in frontmatter
 * Preserves backlinks by adding the original filename as an alias
 */
async function renameFileFromPermalink(file, app, Notice) {
    try {
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if no permalink exists
        if (!cache?.permalink) {
            console.log(`Skipping rename for ${file.basename}: no permalink found`);
            return false;
        }

        // Get the permalink and current folder path
        const permalink = cache.permalink;
        const folderPath = file.path.substring(0, file.path.lastIndexOf("/") + 1);
        const newPath = folderPath + permalink + '.md';
        
        // Skip if file already has the correct name
        if (file.path === newPath) {
            console.log(`Skipping rename for ${file.basename}: already has correct name (${permalink}.md)`);
            return false;
        }

        console.log(`Will rename file from ${file.path} to ${newPath}`);

        // Add current filename as alias to preserve backlinks
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            // Initialize aliases
            if (!frontmatter.aliases) {
                frontmatter.aliases = [];
            } 
            
            // Convert string aliases to array
            if (typeof frontmatter.aliases === 'string') {
                // Check if it's a YAML array format "[item1, item2]"
                if (frontmatter.aliases.startsWith('[') && frontmatter.aliases.endsWith(']')) {
                    try {
                        // Parse the array string
                        const aliasStr = frontmatter.aliases.slice(1, -1);
                        frontmatter.aliases = aliasStr
                            .split(',')
                            .map(a => a.trim().replace(/^["']|["']$/g, ''));
                    } catch (e) {
                        frontmatter.aliases = [frontmatter.aliases];
                    }
                } else {
                    // It's a single string
                    frontmatter.aliases = [frontmatter.aliases];
                }
            }
            
            // Ensure aliases is an array
            if (!Array.isArray(frontmatter.aliases)) {
                frontmatter.aliases = [frontmatter.aliases];
            }
            
            // Add basename as alias if not already present
            if (!frontmatter.aliases.includes(file.basename)) {
                console.log(`Adding ${file.basename} as alias to preserve backlinks`);
                frontmatter.aliases.push(file.basename);
            }
        });
        
        try {
            // Rename the file
            await app.fileManager.renameFile(file, newPath);
            console.log(`Successfully renamed file to: ${permalink}.md`);
            return true;
        } catch (renameError) {
            console.error(`Error renaming file ${file.path}:`, renameError);
            new Notice(`Error renaming ${file.basename}: ${renameError.message}`);
            return false;
        }

    } catch (error) {
        console.error(`Error in rename process for ${file.basename}:`, error);
        new Notice(`Error renaming ${file.basename}: ${error.message}`);
        return false;
    }
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
 * Normalize file path for comparison (like Linter does)
 */
function normalizeFilePath(path) {
    return path.replace(/\\/g, '|').replace(/\//g, '|');
}