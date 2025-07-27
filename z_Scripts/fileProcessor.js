/**
 * Comprehensive file processing script
 * - Works with files/folders from any context (active, selected, or context menu)
 * - Handles permalink generation, renaming, and source extraction
 * - Avoids duplicate processing during a single session while still checking files each time
 * - No "processed" tag or other unnecessary frontmatter additions
 * 
 * Created: 2025-07-27
 */
class FileProcessor {
    constructor(app) {
        this.app = app;
        // Track files processed in current session to avoid duplicate processing
        this.currentSessionFiles = new Set();
    }
    
    /**
     * Process a target (file or folder)
     * @param {Object} target - File or folder to process
     * @param {Object} options - Processing options
     * @returns {Promise<Object>} - Processing results
     */
    async process(target, options = {}) {
        // Default options
        const opts = {
            addPermalink: true,
            renameFromPermalink: true, 
            extractSource: true,
            ...options
        };
        
        try {
            // Clear session cache at the beginning of each explicit call to process
            this.currentSessionFiles.clear();
            
            // If no target provided, try to find one from context
            if (!target) {
                target = await this._getTargetFromContext();
                
                if (!target) {
                    this._notify("No file or folder found to process", "error");
                    return { success: false, error: "No target found" };
                }
            }
            
            console.log(`Starting processing on: ${target.path}`);
            
            // Process based on type
            const isFolder = target.children !== undefined;
            
            if (isFolder) {
                return await this._processFolder(target, opts);
            } else {
                return await this._processFile(target, opts);
            }
            
        } catch (error) {
            console.error("Processing error:", error);
            this._notify(`Error: ${error.message}`, "error");
            return { success: false, error: error.message };
        }
    }
    
    /**
     * Get a target file or folder from the context using multiple methods
     * Inspired by Linter's approach to finding files
     * @private
     */
    async _getTargetFromContext() {
        let target = null;
        
        // 1. Try to get from file explorer selection (like Linter does)
        try {
            const fileExplorer = this.app.workspace.getLeavesOfType("file-explorer")[0]?.view;
            
            if (fileExplorer) {
                // Handle different Obsidian versions and plugins that might modify the API
                if (typeof fileExplorer.getSelectedFile === 'function') {
                    target = fileExplorer.getSelectedFile();
                } else if (fileExplorer.file && typeof fileExplorer.file === 'object') {
                    target = fileExplorer.file;
                } else if (fileExplorer.getFileData && typeof fileExplorer.getFileData === 'function') {
                    const fileData = fileExplorer.getFileData();
                    if (fileData && fileData.file) {
                        target = fileData.file;
                    }
                }
                
                // If we got a target, return it
                if (target) {
                    console.log(`Found target in file explorer: ${target.path}`);
                    return target;
                }
            }
        } catch (e) {
            console.warn("Error accessing file explorer:", e);
        }
        
        // 2. Try to get from the most recently active leaf's file
        try {
            const activeLeaf = this.app.workspace.getLeaf();
            if (activeLeaf && activeLeaf.view && activeLeaf.view.file) {
                console.log(`Found target in active leaf: ${activeLeaf.view.file.path}`);
                return activeLeaf.view.file;
            }
        } catch (e) {
            console.warn("Error accessing active leaf:", e);
        }
        
        // 3. Fall back to traditional active file method
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile) {
            console.log(`Using active file: ${activeFile.path}`);
            return activeFile;
        }
        
        return null;
    }
    
    /**
     * Process a folder by recursively processing all markdown files
     * Using Linter-inspired approach to folder traversal
     * @param {Object} folder - Folder to process
     * @param {Object} options - Processing options
     * @private
     */
    async _processFolder(folder, options) {
        console.log(`Processing folder: ${folder.path}`);
        this._notify(`Processing folder: ${folder.name}`, "info");
        
        // Get all markdown files from the folder (recursive)
        const files = await this._getAllMarkdownFiles(folder);
        
        if (files.length === 0) {
            console.log("No markdown files found in folder");
            this._notify("No markdown files found in folder", "info");
            return { success: true, processed: 0, skipped: 0 };
        }
        
        // Process each file
        let processed = 0;
        let skipped = 0;
        let errors = 0;
        
        for (const file of files) {
            try {
                // Check if already processed in this session
                if (this.currentSessionFiles.has(file.path)) {
                    console.log(`File ${file.path} already processed in this session, skipping`);
                    skipped++;
                    continue;
                }
                
                // Process file and track result
                const result = await this._processFile(file, options);
                
                if (result.success) {
                    processed++;
                } else if (result.skipped) {
                    skipped++;
                }
                
                // Small delay to prevent UI freezing
                await new Promise(resolve => setTimeout(resolve, 30));
            } catch (error) {
                console.error(`Error processing file ${file.path}:`, error);
                errors++;
                // Continue with next file
            }
        }
        
        console.log(`Processed ${processed} files, skipped ${skipped}, errors: ${errors} in folder ${folder.path}`);
        this._notify(`Processed ${processed} files, skipped ${skipped}${errors ? `, errors: ${errors}` : ''} in ${folder.name}`, "success");
        
        return { success: true, processed, skipped, errors };
    }
    
    /**
     * Get all markdown files in a folder recursively
     * Similar to how Linter scans folders
     * @param {Object} folder - Folder to scan
     * @returns {Array} - All markdown files in folder and subfolders
     * @private
     */
    async _getAllMarkdownFiles(folder) {
        const files = [];
        
        // Function to recursively collect files
        const collectFiles = (item) => {
            if (!item) return;
            
            if (item.children) {
                // It's a folder, process its children
                for (const child of item.children) {
                    collectFiles(child);
                }
            } else if (item.extension === 'md') {
                // It's a markdown file
                files.push(item);
            }
        };
        
        // Start collection from the folder
        collectFiles(folder);
        return files;
    }
    
    /**
     * Process a single file
     * @param {Object} file - File to process
     * @param {Object} options - Processing options
     * @private
     */
    async _processFile(file, options) {
        const filePath = file.path;
        
        // Mark as processed in this session
        this.currentSessionFiles.add(filePath);
        
        console.log(`Processing file: ${filePath}`);
        
        try {
            // Read file content
            const content = await this.app.vault.read(file);
            
            // Parse frontmatter and body
            let { frontmatter, body } = this._parseFrontmatter(content);
            let modified = false;
            
            // 1. Add permalink if needed
            if (options.addPermalink) {
                const permalinkAdded = await this._addPermalink(file, frontmatter);
                modified = modified || permalinkAdded;
            }
            
            // 2. Extract source if needed
            if (options.extractSource) {
                const sourceExtracted = await this._extractSource(file, frontmatter, body);
                modified = modified || sourceExtracted;
            }
            
            // 3. Update file content if modified
            if (modified) {
                const newContent = this._generateFileContent(frontmatter, body);
                await this.app.vault.modify(file, newContent);
                console.log(`Updated frontmatter for ${file.path}`);
            }
            
            // 4. Rename file from permalink if needed
            let renamed = false;
            if (options.renameFromPermalink) {
                renamed = await this._renameFromPermalink(file, frontmatter);
            }
            
            if (modified || renamed) {
                this._notify(`Processed: ${file.basename}`, "success");
                return { success: true, modified };
            } else {
                console.log(`No changes needed for ${file.path}`);
                return { success: false, skipped: true };
            }
            
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error);
            this._notify(`Error processing ${file.basename}: ${error.message}`, "error");
            throw error;
        }
    }
    
    /**
     * Add permalink to frontmatter if it doesn't exist
     * @param {Object} file - File to add permalink to
     * @param {Object} frontmatter - Frontmatter object
     * @returns {Boolean} - Whether frontmatter was modified
     * @private
     */
    async _addPermalink(file, frontmatter) {
        if (frontmatter.permalink) {
            console.log(`Permalink already exists: ${frontmatter.permalink}`);
            return false;
        }
        
        // Generate a permalink using the improved formatting from addPermalink
        // Get current date in ISO format (YYYY-MM-DD)
        const currentDate = new Date().toISOString().split('T')[0];
        
        // Clean the filename by:
        // 1. Converting to lowercase
        // 2. Removing any characters that aren't letters, numbers, spaces, or hyphens
        // 3. Replacing multiple spaces with a single hyphen
        // 4. Trimming any leading or trailing hyphens
        let nameBase = file.basename.toLowerCase()
            .replace(/[^\w\s-]/g, '')   // Remove invalid chars
            .replace(/\s+/g, '-')       // Replace spaces with hyphens
            .replace(/--+/g, '-')       // Replace multiple hyphens with single
            .replace(/^-+|-+$/g, '');   // Trim hyphens from both ends
        
        // Combine date and cleaned name to create the permalink
        const permalink = `${currentDate}-${nameBase}`;
        frontmatter.permalink = permalink;
        console.log(`Added permalink: ${permalink}`);
        
        return true;
    }
    
    /**
     * Extract source from content and add to frontmatter
     * @param {Object} file - File to extract source from
     * @param {Object} frontmatter - Frontmatter object
     * @param {String} body - File body content
     * @returns {Boolean} - Whether frontmatter was modified
     * @private
     */
    async _extractSource(file, frontmatter, body) {
        // Skip if source already exists in frontmatter
        if (frontmatter.source) {
            console.log(`Source already exists in frontmatter: ${frontmatter.source}`);
            return false;
        }
        
        // Look for source patterns in the content with improved regex
        // Matches both "Source:" and "Source;" with various capitalizations
        // Excludes page numbers in (p. X) or (pp. X-Y) format
        const sourcePattern = /\b(?:Source|source)[;:]\s*([^(][^\n]+?)(?:\s*\((?:p|pp)\.?\s*\d+(?:-\d+)?\))?$/m;
        const match = body.match(sourcePattern);
        
        if (match && match[1]) {
            const source = match[1].trim();
            frontmatter.source = source;
            console.log(`Extracted source: ${source}`);
            return true;
        }
        
        return false;
    }
    
    /**
     * Rename file based on permalink while preserving backlinks
     * @param {Object} file - File to rename
     * @param {Object} frontmatter - Frontmatter object
     * @returns {Boolean} - Whether the file was renamed
     * @private
     */
    async _renameFromPermalink(file, frontmatter) {
        // Skip if auto_rename is not enabled
        if (frontmatter.auto_rename !== "true" && frontmatter.auto_rename !== true) {
            return false;
        }
        
        const permalink = frontmatter.permalink;
        if (!permalink) {
            console.log("No permalink found for renaming");
            return false;
        }
        
        const newFileName = permalink + ".md";
        const folderPath = file.path.substring(0, file.path.lastIndexOf("/"));
        const newPath = folderPath ? `${folderPath}/${newFileName}` : newFileName;
        
        // Skip if file already has the correct name
        if (file.path === newPath) {
            console.log(`File already has the correct name: ${file.path}`);
            return false;
        }
        
        // Handle aliases to preserve backlinks
        let aliases = [];
        let aliasesModified = false;
        
        if (frontmatter.aliases) {
            // Parse aliases (handles various formats)
            const aliasesStr = frontmatter.aliases.toString().trim();
            
            if (aliasesStr.startsWith("[") && aliasesStr.endsWith("]")) {
                // Parse YAML array format
                aliases = aliasesStr
                    .slice(1, -1)
                    .split(",")
                    .map(a => a.trim().replace(/^["']|["']$/g, '')); // Remove quotes if present
            } else {
                // Single value
                aliases = [aliasesStr.replace(/^["']|["']$/g, '')]; // Remove quotes if present
            }
        }
        
        // Add current filename as alias if it's not already there
        if (!aliases.includes(file.basename)) {
            aliases.push(file.basename);
            aliasesModified = true;
        }
        
        // Update aliases in frontmatter if modified
        if (aliasesModified) {
            frontmatter.aliases = aliases.length === 1 
                ? aliases[0] 
                : "[" + aliases.join(", ") + "]";
            
            // Update file with new frontmatter before renaming
            const content = await this.app.vault.read(file);
            const { body } = this._parseFrontmatter(content);
            const updatedContent = this._generateFileContent(frontmatter, body);
            await this.app.vault.modify(file, updatedContent);
            console.log("Updated aliases in frontmatter");
        }
        
        // Rename the file using Obsidian's API which preserves links
        try {
            await this.app.fileManager.renameFile(file, newPath);
            console.log(`Renamed file to: ${newPath}`);
            this._notify(`Renamed to: ${newFileName}`, "info");
            return true;
        } catch (error) {
            console.error("Error renaming file:", error);
            throw error;
        }
    }
    
    /**
     * Parse frontmatter from file content
     * @param {String} content - File content
     * @returns {Object} - Parsed frontmatter and body
     * @private
     */
    _parseFrontmatter(content) {
        let frontmatter = {};
        let body = content;
        
        if (content.startsWith("---")) {
            const endIndex = content.indexOf("---", 3);
            
            if (endIndex !== -1) {
                const frontmatterText = content.slice(3, endIndex).trim();
                body = content.slice(endIndex + 3).trim();
                
                // Parse frontmatter lines
                frontmatterText.split("\n").forEach(line => {
                    const colonIndex = line.indexOf(":");
                    if (colonIndex > 0) {
                        const key = line.substring(0, colonIndex).trim();
                        const value = line.substring(colonIndex + 1).trim();
                        frontmatter[key] = value;
                    }
                });
            }
        }
        
        return { frontmatter, body };
    }
    
    /**
     * Generate file content from frontmatter and body
     * @param {Object} frontmatter - Frontmatter object
     * @param {String} body - File body content
     * @returns {String} - Combined file content
     * @private
     */
    _generateFileContent(frontmatter, body) {
        let content = "---\n";
        
        // Add all frontmatter properties
        Object.entries(frontmatter).forEach(([key, value]) => {
            content += `${key}: ${value}\n`;
        });
        
        content += "---\n\n" + body;
        return content;
    }
    
    /**
     * Display notification
     * @param {String} message - Notification message
     * @param {String} type - Notification type (info, error, success)
     * @private
     */
    _notify(message, type = "info") {
        const Notice = window.Notice;
        if (Notice) {
            new Notice(message);
        } else {
            console.log(`[${type}] ${message}`);
        }
    }
}

// Export for both CommonJS and ES modules
module.exports = FileProcessor;