/**
 * Process a single file:
 * - Add permalink based on filename
 * - Rename file based on permalink (preserving backlinks)
 * - Extract source from content
 * 
 * Updated: 2025-07-28
 */
module.exports = async function(params) {
    const { app } = params;
    
    try {
        // Get the target file from multiple sources
        let file = await getTargetFile(app, params);
        
        if (!file) {
            console.error("No file found to process");
            new Notice("No file selected or active");
            return false;
        }
        
        console.log(`Processing single file: ${file.path}`);
        
        // Process the file
        return await processFile(app, file);
        
    } catch (error) {
        console.error("Error processing file:", error);
        new Notice(`Error: ${error.message}`);
        return false;
    }
};

/**
 * Get target file using multiple methods
 */
async function getTargetFile(app, params) {
    let file = null;
    
    // 1. Try QuickAdd's params.file or params.filepath (highest priority)
    if (params.file && !params.file.children) {
        console.log(`Using file from params.file: ${params.file.path}`);
        return params.file;
    } 
    
    if (params.filepath) {
        file = app.vault.getAbstractFileByPath(params.filepath);
        if (file && !file.children) {
            console.log(`Using file from filepath: ${file.path}`);
            return file;
        }
    }
    
    // 2. Try to get selected item from file explorer (like Linter does)
    try {
        const fileExplorer = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
        
        if (fileExplorer) {
            // Different versions of Obsidian use different methods
            if (typeof fileExplorer.getSelectedFile === 'function') {
                file = fileExplorer.getSelectedFile();
                if (file && !file.children) {
                    console.log(`Using selection from file explorer API: ${file.path}`);
                    return file;
                }
            }
            
            // Try DOM-based approach (as seen in Linter)
            const selectedEl = fileExplorer.containerEl.querySelector(
                '.nav-file.is-active, .nav-file.mod-active'
            );
            
            if (selectedEl) {
                const filePath = selectedEl.getAttribute('data-path');
                if (filePath) {
                    file = app.vault.getAbstractFileByPath(filePath);
                    if (file && !file.children) {
                        console.log(`Using selection from DOM: ${file.path}`);
                        return file;
                    }
                }
            }
        }
    } catch (e) {
        console.warn("Error getting selection from file explorer:", e);
    }
    
    // 3. Fall back to active file
    file = app.workspace.getActiveFile();
    if (file) {
        console.log(`Using active file: ${file.path}`);
        return file;
    }
    
    return null;
}

/**
 * Process a single file
 */
async function processFile(app, file) {
    try {
        // 1. Read file content
        const content = await app.vault.read(file);
        
        // 2. Parse frontmatter
        const { frontmatter, contentWithoutFrontmatter } = parseFrontmatter(content);
        
        // 3. Track if anything was modified
        let frontmatterModified = false;
        
        // 4. Add permalink if needed
        if (!frontmatter.permalink) {
            // Generate permalink from filename
            const currentDate = new Date().toISOString().split('T')[0];
            let nameBase = file.basename.toLowerCase()
                .replace(/[^\w\s-]/g, '')   // Remove invalid chars
                .replace(/\s+/g, '-')       // Replace spaces with hyphens
                .replace(/--+/g, '-')       // Replace multiple hyphens with single
                .replace(/^-+|-+$/g, '');   // Trim hyphens from both ends
            
            // Create permalink
            const permalink = `${currentDate}-${nameBase}`;
            frontmatter.permalink = permalink;
            frontmatterModified = true;
            console.log(`Added permalink: ${permalink}`);
        }
        
        // 5. Extract source if needed
        if (!frontmatter.source) {
            // Look for source pattern in content
            const sourcePattern = /\b(?:Source|source)[;:]\s*([^(][^\n]+?)(?:\s*\((?:p|pp)\.?\s*\d+(?:-\d+)?\))?$/m;
            const match = contentWithoutFrontmatter.match(sourcePattern);
            
            if (match && match[1]) {
                const source = match[1].trim();
                frontmatter.source = source;
                frontmatterModified = true;
                console.log(`Extracted source: ${source}`);
            }
        }
        
        // 6. Update file if frontmatter was modified
        if (frontmatterModified) {
            // Generate new frontmatter
            const newContent = generateFileContent(frontmatter, contentWithoutFrontmatter);
            await app.vault.modify(file, newContent);
            console.log("Updated frontmatter");
        }
        
        // 7. Rename file if auto_rename is enabled
        let renamed = false;
        if (frontmatter.auto_rename === "true" || frontmatter.auto_rename === true) {
            const permalink = frontmatter.permalink;
            
            if (permalink) {
                const newFileName = permalink + ".md";
                const folderPath = file.path.substring(0, file.path.lastIndexOf("/"));
                const newPath = folderPath ? `${folderPath}/${newFileName}` : newFileName;
                
                // Skip if file already has correct name
                if (file.path !== newPath) {
                    // Handle aliases to preserve backlinks
                    let aliases = [];
                    let aliasesModified = false;
                    
                    if (frontmatter.aliases) {
                        // Parse aliases
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
                        const newContent = generateFileContent(frontmatter, contentWithoutFrontmatter);
                        await app.vault.modify(file, newContent);
                    }
                    
                    // Rename the file
                    await app.fileManager.renameFile(file, newPath);
                    console.log(`Renamed file to: ${newPath}`);
                    new Notice(`Renamed to: ${newFileName}`);
                    renamed = true;
                }
            }
        }
        
        if (frontmatterModified || renamed) {
            new Notice(`Processed: ${file.basename}`);
            return true;
        } else {
            console.log(`No changes needed for ${file.path}`);
            return false;
        }
        
    } catch (error) {
        console.error(`Error processing file ${file.path}:`, error);
        new Notice(`Error processing ${file.basename}: ${error.message}`);
        return false;
    }
}

/**
 * Parse frontmatter from file content
 */
function parseFrontmatter(content) {
    let frontmatter = {};
    let contentWithoutFrontmatter = content;
    
    if (content.startsWith("---")) {
        const endIndex = content.indexOf("---", 3);
        
        if (endIndex !== -1) {
            const frontmatterText = content.slice(3, endIndex).trim();
            contentWithoutFrontmatter = content.slice(endIndex + 3).trim();
            
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
    
    return { frontmatter, contentWithoutFrontmatter };
}

/**
 * Generate content with updated frontmatter
 */
function generateFileContent(frontmatter, contentWithoutFrontmatter) {
    let content = "---\n";
    
    // Add all frontmatter properties
    Object.entries(frontmatter).forEach(([key, value]) => {
        content += `${key}: ${value}\n`;
    });
    
    content += "---\n\n" + contentWithoutFrontmatter;
    return content;
}