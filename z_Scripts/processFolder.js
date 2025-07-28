/**
 * Process all markdown files in a folder:
 * - Add permalink based on filename
 * - Rename file based on permalink (preserving backlinks)
 * - Extract source from content
 *
 * Using Linter's approach for folder selection and file processing
 * Updated: 2025-07-28
 */
module.exports = async function(params) {
    const { app } = params;
    
    try {
        // Get the selected folder using Linter's approach
        const folder = await getTargetFolder(app, params);
        
        if (!folder) {
            console.error("No folder selected");
            new Notice("No folder selected. Please select a folder in the file explorer.");
            return false;
        }
        
        console.log(`Processing folder: ${folder.path}`);
        new Notice(`Processing folder: ${folder.name}`);
        
        // Get all markdown files using Linter's approach
        const allFiles = app.vault.getMarkdownFiles();
        const folderPath = normalizeFilePath(folder.path);
        
        // Filter for files in this folder (including subfolders)
        // Using Linter's approach of comparing normalized paths
        const filesInFolder = allFiles.filter(file => 
            normalizeFilePath(file.path).startsWith(folderPath + '|') || 
            normalizeFilePath(file.path) === folderPath
        );
        
        if (filesInFolder.length === 0) {
            console.log("No markdown files found in folder");
            new Notice("No markdown files found in folder");
            return false;
        }
        
        // Process each file
        let processed = 0;
        let skipped = 0;
        let errors = 0;
        
        for (const file of filesInFolder) {
            try {
                const result = await processFile(app, file, false); // Don't show individual notifications
                
                if (result) {
                    processed++;
                } else {
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
        new Notice(`Processed ${processed} files, skipped ${skipped}${errors ? `, errors: ${errors}` : ''} in ${folder.name}`);
        
        return true;
        
    } catch (error) {
        console.error("Error processing folder:", error);
        new Notice(`Error: ${error.message}`);
        return false;
    }
};

/**
 * Get the target folder using multiple methods
 */
async function getTargetFolder(app, params) {
    let folder = null;
    
    // 1. Try QuickAdd's params.file (highest priority)
    if (params.file && params.file.children) {
        console.log(`Using folder from params.file: ${params.file.path}`);
        return params.file;
    }
    
    // 2. Try from filepath parameter
    if (params.filepath) {
        folder = app.vault.getAbstractFileByPath(params.filepath);
        if (folder && folder.children) {
            console.log(`Using folder from filepath: ${folder.path}`);
            return folder;
        }
    }
    
    // 3. Try to get selected folder from file explorer (like Linter does)
    try {
        const fileExplorer = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
        
        if (fileExplorer) {
            // Different versions of Obsidian use different methods
            if (typeof fileExplorer.getSelectedFile === 'function') {
                folder = fileExplorer.getSelectedFile();
                if (folder && folder.children) {
                    console.log(`Using selection from file explorer API: ${folder.path}`);
                    return folder;
                }
            }
            
            // Try DOM-based approach (as seen in Linter)
            const selectedEl = fileExplorer.containerEl.querySelector(
                '.nav-folder.is-active, .nav-folder.mod-active'
            );
            
            if (selectedEl) {
                const folderPath = selectedEl.getAttribute('data-path');
                if (folderPath) {
                    folder = app.vault.getAbstractFileByPath(folderPath);
                    if (folder && folder.children) {
                        console.log(`Using folder from DOM selection: ${folder.path}`);
                        return folder;
                    }
                }
            }
        }
    } catch (e) {
        console.warn("Error getting folder from explorer:", e);
    }
    
    // 4. Last resort: use active file's parent folder
    try {
        const activeFile = app.workspace.getActiveFile();
        if (activeFile && activeFile.parent) {
            folder = activeFile.parent;
            console.log(`Using active file's parent folder: ${folder.path}`);
            return folder;
        }
    } catch (e) {
        console.warn("Error getting active file's parent folder:", e);
    }
    
    return null;
}

/**
 * Process a single file
 */
async function processFile(app, file, showNotifications = true) {
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
                    if (showNotifications) {
                        new Notice(`Renamed to: ${newFileName}`);
                    }
                    renamed = true;
                }
            }
        }
        
        if ((frontmatterModified || renamed) && showNotifications) {
            new Notice(`Processed: ${file.basename}`);
        }
        
        return frontmatterModified || renamed;
        
    } catch (error) {
        console.error(`Error processing file ${file.path}:`, error);
        if (showNotifications) {
            new Notice(`Error processing ${file.basename}: ${error.message}`);
        }
        throw error; // Re-throw to be handled by the caller
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

/**
 * Normalize file path for comparison (like Linter does)
 */
function normalizeFilePath(path) {
    return path.replace(/\\/g, '|').replace(/\//g, '|');
}