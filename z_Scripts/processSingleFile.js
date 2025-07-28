/**
 * Process a single file for QuickAdd
 * - Add permalink based on filename
 * - Rename file based on permalink (preserving backlinks)
 * - Extract source from content
 */
module.exports = async function(params) {
    const { app } = params;
    
    try {
        // Get the target file
        const file = params.file || app.workspace.getActiveFile();
        
        if (!file) {
            console.error("No file found to process");
            new Notice("No file selected or active");
            return false;
        }
        
        console.log(`Processing single file: ${file.path}`);
        
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
                }
            }
        }
        
        new Notice(`Processed: ${file.basename}`);
        return true;
        
    } catch (error) {
        console.error("Error processing file:", error);
        new Notice(`Error: ${error.message}`);
        return false;
    }
};

// Helper function to parse frontmatter
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

// Helper function to generate content with updated frontmatter
function generateFileContent(frontmatter, contentWithoutFrontmatter) {
    let content = "---\n";
    
    // Add all frontmatter properties
    Object.entries(frontmatter).forEach(([key, value]) => {
        content += `${key}: ${value}\n`;
    });
    
    content += "---\n\n" + contentWithoutFrontmatter;
    return content;
}