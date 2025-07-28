/**
 * Combined File Processor
 * - Adds permalinks
 * - Extracts sources
 * - Renames files based on permalinks (with backlink preservation)
 * 
 * Uses file selection techniques from Obsidian Linter for better folder handling
 * Updated: 2025-07-28 03:39:03
 */

// =====================================================
// State Manager to prevent duplicate processing
// =====================================================

/**
 * StateManager handles script execution state
 * Tracks processed files and prevents duplicate runs
 */
class StateManager {
    constructor() {
        this.processedFiles = {};
        this.isLocked = false;
        this.lockTimeout = null;
    }

    /**
     * Check if file has been processed for a specific operation
     * @param {string} filePath - The file path
     * @param {string} operation - The operation type
     * @returns {boolean} - Whether the file was processed
     */
    isFileProcessed(filePath, operation) {
        if (!this.processedFiles[filePath]) return false;
        return this.processedFiles[filePath].includes(operation);
    }

    /**
     * Mark a file as processed for a specific operation
     * @param {string} filePath - The file path
     * @param {string} operation - The operation type
     */
    markFileProcessed(filePath, operation) {
        if (!this.processedFiles[filePath]) {
            this.processedFiles[filePath] = [];
        }
        if (!this.processedFiles[filePath].includes(operation)) {
            this.processedFiles[filePath].push(operation);
        }
    }

    /**
     * Clear processed files for a specific operation
     * @param {string} operation - The operation type
     */
    clearProcessedFiles(operation) {
        for (const filePath in this.processedFiles) {
            const index = this.processedFiles[filePath].indexOf(operation);
            if (index > -1) {
                this.processedFiles[filePath].splice(index, 1);
            }
            if (this.processedFiles[filePath].length === 0) {
                delete this.processedFiles[filePath];
            }
        }
    }

    /**
     * Try to acquire the execution lock
     * @returns {boolean} - Whether the lock was acquired
     */
    acquireLock() {
        if (this.isLocked) return false;
        
        this.isLocked = true;
        
        // Auto-release lock after 30 seconds to prevent deadlocks
        if (this.lockTimeout) {
            clearTimeout(this.lockTimeout);
        }
        
        this.lockTimeout = setTimeout(() => {
            this.releaseLock();
        }, 30000);
        
        return true;
    }

    /**
     * Release the execution lock
     */
    releaseLock() {
        this.isLocked = false;
        if (this.lockTimeout) {
            clearTimeout(this.lockTimeout);
            this.lockTimeout = null;
        }
    }
}

// Initialize the state manager if it doesn't exist
if (!window.obsidianStateManager) {
    window.obsidianStateManager = new StateManager();
}

// =====================================================
// Permalink Generation
// =====================================================

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

/**
 * Add permalink to a file's frontmatter
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<boolean>} - Whether the permalink was added
 */
async function addPermalinkToFile(file, app) {
    try {
        const stateManager = window.obsidianStateManager;
        // Skip if already processed
        if (stateManager.isFileProcessed(file.path, 'permalink')) {
            console.log(`Skipping permalink for ${file.basename}: already processed`);
            return false;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if permalink already exists
        if (cache?.permalink) {
            console.log(`Skipping permalink for ${file.basename}: permalink already exists`);
            stateManager.markFileProcessed(file.path, 'permalink');
            return false;
        }

        // Generate permalink from basename
        const permalink = trimTitle(file.basename);
        
        // Update frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.permalink = permalink;
        });

        // Force metadata cache refresh
        await app.metadataCache.trigger();

        console.log(`Added permalink for ${file.basename}: ${permalink}`);
        stateManager.markFileProcessed(file.path, 'permalink');
        return true;

    } catch (error) {
        console.error(`Error adding permalink to ${file.basename}:`, error);
        return false;
    }
}

// =====================================================
// Source Extraction
// =====================================================

/**
 * Extract source from file content to frontmatter
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<boolean>} - Whether the source was extracted
 */
async function extractSourceFromFile(file, app) {
    try {
        const stateManager = window.obsidianStateManager;
        // Skip if already processed
        if (stateManager.isFileProcessed(file.path, 'extract-source')) {
            console.log(`Skipping source extraction for ${file.basename}: already processed`);
            return false;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if source already exists
        if (cache?.source) {
            console.log(`Skipping source extraction for ${file.basename}: source already exists`);
            stateManager.markFileProcessed(file.path, 'extract-source');
            return false;
        }

        // Read file content
        const content = await app.vault.read(file);
        
        // Match Source: pattern (case insensitive)
        // Matches both "Source:" and "Source;" with various capitalizations
        // Excludes page numbers in (p. X) or (pp. X-Y) format
        const sourcePattern = /\b(?:Source|source)[;:]\s*([^(][^\n]+?)(?:\s*\((?:p|pp)\.?\s*\d+(?:-\d+)?\))?$/m;
        const match = content.match(sourcePattern);
        
        if (match && match[1]) {
            const source = match[1].trim();
            
            // Update frontmatter
            await app.fileManager.processFrontMatter(file, (frontmatter) => {
                frontmatter.source = source;
            });

            // Force metadata cache refresh
            await app.metadataCache.trigger();

            console.log(`Extracted source for ${file.basename}: "${source}"`);
            stateManager.markFileProcessed(file.path, 'extract-source');
            return true;
        } else {
            console.log(`No source found in ${file.basename}`);
            stateManager.markFileProcessed(file.path, 'extract-source');
            return false;
        }

    } catch (error) {
        console.error(`Error extracting source from ${file.basename}:`, error);
        return false;
    }
}

// =====================================================
// File Renaming
// =====================================================

/**
 * Rename file based on permalink in frontmatter
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<boolean>} - Whether the file was renamed
 */
async function renameFileFromPermalink(file, app) {
    try {
        const stateManager = window.obsidianStateManager;
        // Skip if already processed
        if (stateManager.isFileProcessed(file.path, 'rename')) {
            console.log(`Skipping rename for ${file.basename}: already processed`);
            return false;
        }

        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if auto_rename is not enabled or no permalink exists
        if (cache?.auto_rename !== true && cache?.auto_rename !== "true") {
            console.log(`Skipping rename for ${file.basename}: auto_rename not enabled`);
            stateManager.markFileProcessed(file.path, 'rename');
            return false;
        }
        
        if (!cache?.permalink) {
            console.log(`Skipping rename for ${file.basename}: no permalink found`);
            stateManager.markFileProcessed(file.path, 'rename');
            return false;
        }

        // Get the permalink and current folder path
        const permalink = cache.permalink;
        const folderPath = file.path.substring(0, file.path.lastIndexOf('/') + 1);
        const newPath = folderPath + permalink + '.md';
        
        // Skip if file already has the correct name
        if (file.path === newPath) {
            console.log(`Skipping rename for ${file.basename}: already has correct name`);
            stateManager.markFileProcessed(file.path, 'rename');
            return false;
        }

        console.log(`Renaming ${file.path} to ${newPath}`);

        // Add current filename as alias to preserve backlinks
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            // Initialize aliases array
            if (!frontmatter.aliases) {
                frontmatter.aliases = [];
            } 
            // Convert string alias to array if needed
            else if (typeof frontmatter.aliases === 'string') {
                frontmatter.aliases = [frontmatter.aliases];
            }
            // Convert YAML array format to JS array if needed
            else if (typeof frontmatter.aliases === 'string' && 
                    frontmatter.aliases.startsWith('[') && 
                    frontmatter.aliases.endsWith(']')) {
                try {
                    // Parse the array string
                    const aliasStr = frontmatter.aliases.slice(1, -1);
                    frontmatter.aliases = aliasStr
                        .split(',')
                        .map(a => a.trim().replace(/^["']|["']$/g, ''));
                } catch (e) {
                    console.warn(`Error parsing aliases array for ${file.path}:`, e);
                    frontmatter.aliases = [frontmatter.aliases];
                }
            }
            
            // Ensure aliases is an array
            if (!Array.isArray(frontmatter.aliases)) {
                frontmatter.aliases = [frontmatter.aliases];
            }
            
            // Add basename as alias if not already present
            if (!frontmatter.aliases.includes(file.basename)) {
                console.log(`Adding ${file.basename} as alias for preserving backlinks`);
                frontmatter.aliases.push(file.basename);
            }
        });

        // Force metadata cache refresh
        await app.metadataCache.trigger();
        
        // Rename the file
        await app.fileManager.renameFile(file, newPath);
        console.log(`Renamed file to ${permalink}.md`);
        
        // Mark as processed with the new path (after rename)
        const renamedFile = app.vault.getAbstractFileByPath(newPath);
        if (renamedFile) {
            stateManager.markFileProcessed(renamedFile.path, 'rename');
        }
        
        return true;

    } catch (error) {
        console.error(`Error renaming ${file.basename}:`, error);
        return false;
    }
}

// =====================================================
// File/Folder Selection and Processing
// =====================================================

/**
 * Get target file or folder using multiple methods (based on Linter)
 * @param {App} app - The Obsidian app instance
 * @param {object} params - Parameters from calling context
 * @returns {TAbstractFile|Array} - Selected file, folder, or array of files
 */
async function getTarget(app, params) {
    let target = null;
    
    // 1. Try direct parameter (from QuickAdd)
    if (params?.file) {
        console.log(`Using target from params: ${params.file.path}`);
        return params.file;
    }
    
    // 2. Try to get selected items from file explorer using Linter's approach
    try {
        const fileExplorer = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
        
        if (fileExplorer) {
            // Try DOM-based approach first (as seen in Linter)
            const selectedEl = fileExplorer.containerEl.querySelector(
                '.nav-folder.is-active, .nav-folder.mod-active, .nav-file.is-active, .nav-file.mod-active'
            );
            
            if (selectedEl) {
                const path = selectedEl.getAttribute('data-path');
                if (path) {
                    target = app.vault.getAbstractFileByPath(path);
                    if (target) {
                        console.log(`Using selection from DOM: ${target.path}`);
                        return target;
                    }
                }
            }
            
            // Try API if DOM selection failed
            if (typeof fileExplorer.getSelectedFile === 'function') {
                target = fileExplorer.getSelectedFile();
                if (target) {
                    console.log(`Using selection from file explorer API: ${target.path}`);
                    return target;
                }
            }
            
            // Try Obsidian's fileItems for multiple selection
            if (fileExplorer.fileItems) {
                const selectedFiles = Object.values(fileExplorer.fileItems)
                    .filter(item => item.file && item.selected)
                    .map(item => item.file);
                
                if (selectedFiles && selectedFiles.length > 0) {
                    console.log(`Found ${selectedFiles.length} selected files in explorer`);
                    return selectedFiles;
                }
            }
        }
    } catch (e) {
        console.warn("Error getting selection from file explorer:", e);
    }
    
    // 3. Try Templater context if available
    if (params?.tp) {
        try {
            target = params.tp.file.find_tfile(params.tp.file.path(true));
            if (target) {
                console.log(`Using file from Templater: ${target.path}`);
                return target;
            }
        } catch (e) {
            console.warn("Error getting file from Templater:", e);
        }
    }
    
    // 4. Fall back to active file
    target = app.workspace.getActiveFile();
    if (target) {
        console.log(`Using active file: ${target.path}`);
        return target;
    }
    
    return null;
}

/**
 * Process files in a folder using Linter's approach
 * @param {TFolder} folder - The folder to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<object>} - Processing results
 */
async function processFolder(folder, app) {
    try {
        console.log(`Processing folder: ${folder.path}`);
        new Notice(`Processing folder: ${folder.name}`);
        
        // Get all markdown files from vault
        const allFiles = app.vault.getMarkdownFiles();
        const folderPath = normalizeFilePath(folder.path);
        
        // Filter for files in this folder (including subfolders)
        // Using Linter's approach of comparing normalized paths
        const filesInFolder = allFiles.filter(file => {
            const normalizedFilePath = normalizeFilePath(file.path);
            return normalizedFilePath.startsWith(folderPath + '|') || // Files in subfolders 
                  (normalizedFilePath === folderPath + '.md'); // Files directly in this folder
        });
        
        console.log(`Found ${filesInFolder.length} markdown files in folder ${folder.path}`);
        
        if (filesInFolder.length === 0) {
            console.log("No markdown files found in folder");
            new Notice("No markdown files found in folder");
            return { processed: 0, renamed: 0, skipped: 0 };
        }
        
        // Process each file
        let processed = 0;
        let renamed = 0;
        let skipped = 0;
        
        for (const file of filesInFolder) {
            try {
                const result = await processFile(file, app, false); // Don't show individual notifications
                
                if (result.processed) {
                    processed++;
                }
                if (result.renamed) {
                    renamed++;
                }
                if (!result.processed && !result.renamed) {
                    skipped++;
                }
                
                // Small delay to prevent UI freezing
                await new Promise(resolve => setTimeout(resolve, 50));
                
            } catch (error) {
                console.error(`Error processing file ${file.path}:`, error);
                skipped++;
            }
        }
        
        console.log(`Processed ${processed} files, renamed ${renamed}, skipped ${skipped} in folder ${folder.path}`);
        new Notice(`Processed ${processed} files, renamed ${renamed} in ${folder.name}`);
        
        return { processed, renamed, skipped };
        
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
        new Notice(`Error processing folder: ${error.message}`);
        return { processed: 0, renamed: 0, skipped: 0, error: error.message };
    }
}

/**
 * Process a single file
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @param {boolean} showNotifications - Whether to show notifications
 * @returns {Promise<object>} - Processing results
 */
async function processFile(file, app, showNotifications = true) {
    try {
        console.log(`Processing file: ${file.path}`);
        
        // Track results
        let permalink = false;
        let source = false;
        let renamed = false;
        
        // 1. Add permalink if needed
        permalink = await addPermalinkToFile(file, app);
        
        // 2. Extract source if needed
        source = await extractSourceFromFile(file, app);
        
        // 3. Rename file if needed (and permalink was added)
        renamed = await renameFileFromPermalink(file, app);
        
        // Show notification
        if (showNotifications && (permalink || source || renamed)) {
            new Notice(`Processed: ${file.basename}`);
        }
        
        return { 
            processed: permalink || source,
            renamed: renamed
        };
        
    } catch (error) {
        console.error(`Error processing file ${file.path}:`, error);
        if (showNotifications) {
            new Notice(`Error processing ${file.basename}: ${error.message}`);
        }
        return { processed: false, renamed: false, error: error.message };
    }
}

/**
 * Normalize file path for comparison (like Linter does)
 * @param {string} path - The path to normalize
 * @returns {string} - Normalized path
 */
function normalizeFilePath(path) {
    return path.replace(/\\/g, '|').replace(/\//g, '|');
}

// =====================================================
// Main Function for QuickAdd/Templater
// =====================================================

/**
 * Main function for processing files
 * @param {object} params - Parameters (app, tp for Templater)
 * @returns {Promise<object>} - Processing results
 */
async function fileProcessor(params) {
    // Get app from params or from tp
    const app = params?.app || (params?.tp ? params.tp.app : null);
    
    if (!app) {
        console.error("No app reference available");
        new Notice("Failed to get app reference");
        return { success: false, error: "No app reference" };
    }
    
    const stateManager = window.obsidianStateManager;
    
    // Try to acquire lock
    if (!stateManager.acquireLock()) {
        console.log('Another script is running, please wait and try again');
        new Notice('Another script is running, please wait and try again');
        return { success: false, error: "Script is already running" };
    }
    
    try {
        // Get the target file or folder
        const target = await getTarget(app, params);
        
        if (!target) {
            console.error("No file or folder found to process");
            new Notice("No file or folder found to process");
            return { success: false, error: "No target found" };
        }
        
        // Process based on target type
        if (Array.isArray(target)) {
            // Process multiple selected files
            console.log(`Processing ${target.length} selected files`);
            let processed = 0;
            let renamed = 0;
            
            for (const file of target) {
                if (file.extension === 'md') {
                    const result = await processFile(file, app);
                    if (result.processed) processed++;
                    if (result.renamed) renamed++;
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
            }
            
            return { success: true, processed, renamed };
        }
        else if (target.children !== undefined) {
            // It's a folder
            return { success: true, ...await processFolder(target, app) };
        }
        else if (target.extension === 'md') {
            // It's a single file
            const result = await processFile(target, app);
            return { 
                success: true, 
                processed: result.processed ? 1 : 0, 
                renamed: result.renamed ? 1 : 0 
            };
        }
        else {
            console.error("Selected item is not a markdown file or folder");
            new Notice("Selected item is not a markdown file or folder");
            return { success: false, error: "Invalid target type" };
        }
        
    } catch (error) {
        console.error('Error in fileProcessor:', error);
        new Notice(`Error: ${error.message}`);
        return { success: false, error: error.message };
    } finally {
        // Always release the lock when done
        stateManager.releaseLock();
    }
}

// Export for both QuickAdd and Templater
module.exports = fileProcessor;

// Export individual functions for potential separate use
module.exports.addPermalinkToFile = addPermalinkToFile;
module.exports.extractSourceFromFile = extractSourceFromFile;
module.exports.renameFileFromPermalink = renameFileFromPermalink;
module.exports.trimTitle = trimTitle;