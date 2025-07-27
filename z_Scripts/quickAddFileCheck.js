/**
 * Comprehensive file processing script for QuickAdd
 * - Works with files/folders selected in context menu
 * - Handles both files and folders
 * - Preserves backlinks when renaming
 * - Only updates frontmatter when necessary
 */
module.exports = async (params) => {
    // Ensure we have the required Obsidian APIs
    const { app } = params;
    
    try {
        // Get the selected file - very important for context menu operation
        let targetFile = null;
        
        // CRITICAL: Check for QuickAdd params.file first (passed when using context menu)
        if (params.file) {
            targetFile = params.file;
            console.log(`Using file from QuickAdd context menu: ${targetFile.path}`);
        }
        // Explicitly check for context-menu-specific API
        else if (params.choices && params.choice && params.variables && params.variables.file) {
            targetFile = params.variables.file;
            console.log(`Using file from QuickAdd variables: ${targetFile.path}`);
        }
        // Try the explorer view's selection
        else {
            const explorerView = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
            if (explorerView && typeof explorerView.getSelectedFile === 'function') {
                const selectedFile = explorerView.getSelectedFile();
                if (selectedFile) {
                    targetFile = selectedFile;
                    console.log(`Using file from explorer selection: ${targetFile.path}`);
                }
            }
        }
        
        // Last resort: active file
        if (!targetFile) {
            targetFile = app.workspace.getActiveFile();
            if (targetFile) {
                console.log(`Using active file (fallback): ${targetFile.path}`);
            } else {
                console.error("No file found in any context");
                new Notice("No file selected or active. Please select a file first.");
                return false;
            }
        }
        
        // Check if it's a folder
        const isFolder = targetFile.children !== undefined;
        
        // Initialize global tracking if it doesn't exist
        if (!window.zProcessedFiles) {
            window.zProcessedFiles = new Set();
        }
        
        // Cache timeout (15 minutes)
        const CACHE_TIMEOUT = 900000;
        
        // Reset cache if it's been too long
        if (!window.zLastProcessingTime || Date.now() - window.zLastProcessingTime > CACHE_TIMEOUT) {
            window.zProcessedFiles.clear();
            window.zLastProcessingTime = Date.now();
            console.log("Cleared processed files cache due to timeout");
        }
        
        // Update the timestamp
        window.zLastProcessingTime = Date.now();
        
        // Process based on type
        if (isFolder) {
            // Process folder
            await processFolder(app, targetFile);
        } else {
            // Process single file - check if already processed
            if (window.zProcessedFiles.has(targetFile.path)) {
                console.log(`File ${targetFile.path} already processed, skipping`);
                new Notice(`File ${targetFile.basename} already processed`);
                return false;
            }
            
            // Mark file as processed and process it
            window.zProcessedFiles.add(targetFile.path);
            await processFile(app, targetFile);
        }
        
        return true;
    } catch (error) {
        console.error("Error in QuickAdd script:", error);
        new Notice(`Error: ${error.message}`);
        return false;
    }
};

/**
 * Process a folder by processing all markdown files within it
 */
async function processFolder(app, folder) {
    console.log(`Processing folder: ${folder.path}`);
    new Notice(`Processing folder: ${folder.name}`);
    
    // Get all markdown files in the folder (non-recursive)
    const files = folder.children.filter(file => 
        file.extension === "md" && !file.children // Only markdown files, not folders
    );
    
    if (files.length === 0) {
        console.log("No markdown files found in folder");
        new Notice("No markdown files found in folder");
        return;
    }
    
    // Process each file
    let processedCount = 0;
    let skippedCount = 0;
    
    for (const file of files) {
        try {
            // Check if already processed
            if (window.zProcessedFiles.has(file.path)) {
                console.log(`File ${file.path} already processed, skipping`);
                skippedCount++;
                continue;
            }
            
            // Mark as processed and process
            window.zProcessedFiles.add(file.path);
            await processFile(app, file);
            processedCount++;
            
            // Small delay to prevent UI freezing
            await new Promise(resolve => setTimeout(resolve, 50));
        } catch (error) {
            console.error(`Error processing file ${file.path}:`, error);
            new Notice(`Error processing ${file.basename}: ${error.message}`);
            // Continue with next file
        }
    }
    
    console.log(`Processed ${processedCount} files in folder ${folder.path}`);
    new Notice(`Processed ${processedCount} files, skipped ${skippedCount} files in ${folder.name}`);
}

/**
 * Process a single file - add permalink, rename if needed, etc.
 */
async function processFile(app, file) {
    console.log(`Processing file: ${file.path}`);
    
    try {
        // Read file content
        const content = await app.vault.read(file);
        
        // Parse frontmatter and content
        const { frontmatter, body, hasFrontmatter } = parseFrontmatter(content);
        let frontmatterModified = false;
        
        // 1. Add processed timestamp if needed
        const currentDate = new Date().toISOString().split('T')[0];
        if (!frontmatter.processed) {
            frontmatter.processed = currentDate;
            frontmatterModified = true;
        }
        
        // 2. Generate permalink if needed
        if (!frontmatter.permalink) {
            const dateStr = currentDate;
            const nameBase = file.basename.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            
            frontmatter.permalink = `${dateStr}-${nameBase}`;
            frontmatterModified = true;
        }
        
        // 3. Update the file if frontmatter was modified
        if (frontmatterModified) {
            const updatedContent = generateFileContent(frontmatter, body);
            await app.vault.modify(file, updatedContent);
        }
        
        // 4. Rename from permalink if needed
        if (frontmatter.auto_rename === "true" || frontmatter.auto_rename === true) {
            await renameFromPermalink(app, file, frontmatter);
        }
        
        // 5. Extract source if needed
        if (frontmatter.extract_source === "true" || frontmatter.extract_source === true) {
            if (frontmatter.source) {
                console.log(`Extracted source URL: ${frontmatter.source}`);
                // Additional source processing logic could go here
            }
        }
        
        new Notice(`Processed: ${file.basename}`);
        return true;
    } catch (error) {
        console.error(`Error processing ${file.path}:`, error);
        new Notice(`Error processing ${file.basename}: ${error.message}`);
        throw error;
    }
}

/**
 * Parse frontmatter from content
 */
function parseFrontmatter(content) {
    let frontmatter = {};
    let body = content;
    let hasFrontmatter = false;
    
    if (content.startsWith("---")) {
        const endIndex = content.indexOf("---", 3);
        
        if (endIndex !== -1) {
            hasFrontmatter = true;
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
    
    return { frontmatter, body, hasFrontmatter };
}

/**
 * Generate file content from frontmatter and body
 */
function generateFileContent(frontmatter, body) {
    let content = "---\n";
    
    // Add all frontmatter properties
    Object.entries(frontmatter).forEach(([key, value]) => {
        content += `${key}: ${value}\n`;
    });
    
    content += "---\n\n" + body;
    return content;
}

/**
 * Rename a file based on its permalink while preserving backlinks
 */
async function renameFromPermalink(app, file, frontmatter) {
    const permalink = frontmatter.permalink;
    
    if (!permalink) {
        console.log("No permalink found for renaming");
        return;
    }
    
    const newFileName = permalink + ".md";
    const folderPath = file.path.substring(0, file.path.lastIndexOf("/"));
    const newPath = folderPath ? `${folderPath}/${newFileName}` : newFileName;
    
    // Skip if file already has the correct name
    if (file.path === newPath) {
        console.log(`File already has the correct name: ${file.path}`);
        return;
    }
    
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
        
        // Update file with new frontmatter
        const content = await app.vault.read(file);
        const { body } = parseFrontmatter(content);
        const updatedContent = generateFileContent(frontmatter, body);
        await app.vault.modify(file, updatedContent);
    }
    
    // Rename the file using Obsidian's API which preserves links
    try {
        await app.fileManager.renameFile(file, newPath);
        console.log(`Renamed file to: ${newPath}`);
        new Notice(`Renamed to: ${newFileName}`);
    } catch (error) {
        console.error("Error renaming file:", error);
        throw error;
    }
}