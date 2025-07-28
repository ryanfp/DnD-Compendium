/**
 * QuickAdd integration for file processing
 * - Works with files/folders from context menu
 * - Adds permalinks (without dates)
 * - Extracts sources
 * - Renames files preserving backlinks
 * 
 * Updated: 2025-07-28 04:21:37
 */
module.exports = async function(params) {
    const { app } = params;
    
    try {
        // Get the target file or folder from multiple sources
        let target = await getTargetFromMultipleSources(app, params);
        
        if (!target) {
            console.error("No file or folder found to process");
            new Notice("No file or folder found to process");
            return false;
        }
        
        console.log(`Selected target: ${target.path}`);
        
        // Process based on whether it's a file or folder
        const isFolder = target.children !== undefined;
        
        if (isFolder) {
            return await processFolder(app, target);
        } else {
            return await processFile(app, target);
        }
        
    } catch (error) {
        console.error("Error in QuickAdd script:", error);
        new Notice(`Error: ${error.message}`);
        return false;
    }
};

/**
 * Get the target file or folder using techniques from Obsidian Linter
 */
async function getTargetFromMultipleSources(app, params) {
    // Try QuickAdd's params.file (highest priority)
    if (params.file) {
        console.log(`Using file/folder from params: ${params.file.path}`);
        return params.file;
    }
    
    // Try to get file from context menu or file explorer
    const activeLeaf = app.workspace.activeLeaf;
    
    // First, check if there's a file explorer view
    const fileExplorers = app.workspace.getLeavesOfType('file-explorer');
    
    if (fileExplorers.length > 0) {
        const fileExplorer = fileExplorers[0].view;
        
        // Try all possible selection mechanisms
        const selectedFile = getSelectedFileFromExplorer(fileExplorer, app);
        
        if (selectedFile) {
            console.log(`Using selection from file explorer: ${selectedFile.path}`);
            return selectedFile;
        } else {
            console.log("No selection found in file explorer");
        }
    }
    
    // Fall back to active file
    const activeFile = app.workspace.getActiveFile();
    if (activeFile) {
        console.log(`Using active file: ${activeFile.path}`);
        return activeFile;
    }
    
    return null;
}

/**
 * Get selected file using various methods from file explorer
 */
function getSelectedFileFromExplorer(fileExplorer, app) {
    try {
        // Method 1: Try using the API method if available
        if (typeof fileExplorer.getSelectedFile === 'function') {
            const file = fileExplorer.getSelectedFile();
            if (file) {
                console.log("Found file via getSelectedFile API");
                return file;
            }
        }
        
        // Method 2: Try DOM-based approach
        console.log("Looking for selected elements in DOM");
        
        // Look for file elements first
        const selectedFileEls = fileExplorer.containerEl.querySelectorAll('.nav-file.is-active, .nav-file.mod-active');
        console.log(`Found ${selectedFileEls.length} selected file elements`);
        
        if (selectedFileEls.length > 0) {
            const selectedEl = selectedFileEls[0];
            const path = selectedEl.getAttribute('data-path');
            if (path) {
                const file = app.vault.getAbstractFileByPath(path);
                if (file) {
                    console.log(`Found file via DOM: ${file.path}`);
                    return file;
                }
            }
        }
        
        // Look for folder elements next
        const selectedFolderEls = fileExplorer.containerEl.querySelectorAll('.nav-folder.is-active, .nav-folder.mod-active');
        console.log(`Found ${selectedFolderEls.length} selected folder elements`);
        
        if (selectedFolderEls.length > 0) {
            const selectedEl = selectedFolderEls[0];
            const path = selectedEl.getAttribute('data-path');
            if (path) {
                const folder = app.vault.getAbstractFileByPath(path);
                if (folder) {
                    console.log(`Found folder via DOM: ${folder.path}`);
                    return folder;
                }
            }
        }
        
        // Method 3: Try file items if available
        if (fileExplorer.fileItems) {
            const selectedFiles = Object.values(fileExplorer.fileItems)
                .filter(item => item.file && item.selected)
                .map(item => item.file);
            
            if (selectedFiles && selectedFiles.length > 0) {
                console.log(`Found ${selectedFiles.length} files via fileItems`);
                return selectedFiles[0];
            }
        }
        
    } catch (e) {
        console.error("Error while getting selected file:", e);
    }
    
    return null;
}

/**
 * Process a folder and all markdown files within it
 */
async function processFolder(app, folder) {
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
                const result = await processFile(app, file, false); // Don't show individual notifications
                
                if (result.processed) {
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
                await new Promise(resolve => setTimeout(resolve, 30));
                
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
 * Process a single file (works for non-active files)
 */
async function processFile(app, file, showNotifications = true) {
    try {
        console.log(`Processing file: ${file.path}`);
        
        // Track changes
        let permalinkAdded = false;
        let sourceExtracted = false;
        let renamed = false;
        
        // 1. Add permalink if needed
        permalinkAdded = await addPermalinkToFile(app, file);
        
        // 2. Extract source if needed
        sourceExtracted = await extractSourceFromFile(app, file);
        
        // 3. Rename file based on permalink (if different from current name)
        renamed = await renameFileFromPermalink(app, file);
        
        // Show notification for individual file processing
        if (showNotifications && (permalinkAdded || sourceExtracted || renamed)) {
            if (renamed) {
                new Notice(`Processed and renamed: ${file.basename}`);
            } else {
                new Notice(`Processed: ${file.basename}`);
            }
        }
        
        return { 
            processed: permalinkAdded || sourceExtracted || renamed,
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
            processed: false,
            permalinkAdded: false,
            sourceExtracted: false,
            renamed: false
        };
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
 * Add permalink to frontmatter (works with non-active files)
 */
async function addPermalinkToFile(app, file) {
    try {
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if permalink already exists
        if (cache?.permalink) {
            console.log(`Skipping permalink for ${file.basename}: permalink already exists`);
            return false;
        }

        // Generate permalink from basename using the trimTitle function
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
async function extractSourceFromFile(app, file) {
    try {
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if source already exists
        if (cache?.source) {
            console.log(`Skipping source extraction for ${file.basename}: source already exists`);
            return false;
        }

        // Read file content (works for non-active files)
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
async function renameFileFromPermalink(app, file) {
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
        
        // Rename the file
        await app.fileManager.renameFile(file, newPath);
        console.log(`Successfully renamed file to: ${permalink}.md`);
        return true;

    } catch (error) {
        console.error(`Error in rename process for ${file.basename}:`, error);
        new Notice(`Error renaming ${file.basename}: ${error.message}`);
        return false;
    }
}

/**
 * Normalize file path for comparison
 */
function normalizeFilePath(path) {
    return path.replace(/\\/g, '|').replace(/\//g, '|');
}