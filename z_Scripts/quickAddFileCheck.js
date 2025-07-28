/**
 * QuickAdd integration for file processing
 * - Works with files/folders from context menu
 * - Adds permalinks (without dates)
 * - Extracts sources
 * - Renames files preserving backlinks
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
 * Try multiple methods to get the selected file or folder
 * Based on Linter's approach
 */
async function getTargetFromMultipleSources(app, params) {
    let target = null;
    
    // 1. Try QuickAdd's params.file or params.filepath (highest priority)
    if (params.file) {
        console.log(`Using file from params.file: ${params.file.path}`);
        return params.file;
    } 
    
    if (params.filepath) {
        target = app.vault.getAbstractFileByPath(params.filepath);
        if (target) {
            console.log(`Using file from filepath: ${target.path}`);
            return target;
        }
    }
    
    // 2. Try to get selected item from file explorer (like Linter does)
    try {
        const fileExplorer = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
        
        if (fileExplorer) {
            // Try DOM-based approach first (from Linter)
            const selectedEl = fileExplorer.containerEl.querySelector(
                '.nav-folder.is-active, .nav-folder.mod-active, .nav-file.is-active, .nav-file.mod-active'
            );
            
            if (selectedEl) {
                const filePath = selectedEl.getAttribute('data-path');
                if (filePath) {
                    target = app.vault.getAbstractFileByPath(filePath);
                    if (target) {
                        console.log(`Using selection from DOM: ${target.path}`);
                        return target;
                    }
                }
            }
            
            // Then try API approach
            if (typeof fileExplorer.getSelectedFile === 'function') {
                target = fileExplorer.getSelectedFile();
                if (target) {
                    console.log(`Using selection from file explorer API: ${target.path}`);
                    return target;
                }
            }
        }
    } catch (e) {
        console.warn("Error getting selection from file explorer:", e);
    }
    
    // 3. Fall back to active file
    target = app.workspace.getActiveFile();
    if (target) {
        console.log(`Using active file: ${target.path}`);
        return target;
    }
    
    return null;
}

/**
 * Process a folder and all markdown files within it
 * Using the path comparison approach from Linter
 */
async function processFolder(app, folder) {
    console.log(`Processing folder: ${folder.path}`);
    new Notice(`Processing folder: ${folder.name}`);
    
    // Get all markdown files from vault
    const allFiles = app.vault.getMarkdownFiles();
    const folderPath = normalizeFilePath(folder.path);
    
    // Filter for files in this folder (including subfolders)
    // Using Linter's approach of comparing normalized paths
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
}

/**
 * Process a single file
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
        
        // 3. Rename file if needed
        renamed = await renameFileFromPermalink(app, file);
        
        // Show notification for individual file processing
        if (showNotifications && (permalinkAdded || sourceExtracted || renamed)) {
            new Notice(`Processed: ${file.basename}`);
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
 * Exact implementation from addPermalink.backup.js
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
 * Add permalink to frontmatter
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
 * Preserves backlinks by adding previous filename as alias
 */
async function renameFileFromPermalink(app, file) {
    try {
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if auto_rename is not enabled or no permalink exists
        if (cache?.auto_rename !== true && cache?.auto_rename !== "true") {
            console.log(`Skipping rename for ${file.basename}: auto_rename not enabled`);
            return false;
        }
        
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
            console.log(`Skipping rename for ${file.basename}: already has correct name`);
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
            console.log(`Successfully renamed file to: ${newPath}`);
            return true;
        } catch (renameError) {
            console.error(`Error renaming file ${file.path}:`, renameError);
            new Notice(`Error renaming file: ${renameError.message}`);
            return false;
        }

    } catch (error) {
        console.error(`Error in rename process for ${file.basename}:`, error);
        return false;
    }
}

/**
 * Normalize file path for comparison (like Linter does)
 */
function normalizeFilePath(path) {
    return path.replace(/\\/g, '|').replace(/\//g, '|');
}