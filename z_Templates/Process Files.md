<%*
// Process Files Template
// Handles both individual files and folders
try {
    // Get the app object
    const app = this.app;
    
    // Get the active file
    const activeFile = app.workspace.getActiveFile();
    
    if (!activeFile) {
        new Notice("No active file. Please open a file first.", 3000);
        tR = "";
        return;
    }
    
    // Initialize the FileProcessor - corrected syntax for importing user script
    const FileProcessor = tp.user.processFiles;
    const processor = new FileProcessor(app);
    
    new Notice(`Processing: ${activeFile.basename}`, 2000);
    
    // Call the process method from your existing processor
    const result = await processor.process(tp);
    
    // Add additional functionality to match your requirements
    
    // 1. Generate permalink if needed
    try {
        const content = await app.vault.read(activeFile);
        if (!content.includes("permalink:")) {
            // Generate a permalink
            const date = new Date();
            const dateStr = date.toISOString().split('T')[0];
            const nameBase = activeFile.basename.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            
            const permalink = `${dateStr}-${nameBase}`;
            
            // Add permalink to frontmatter
            let newContent = content;
            if (newContent.startsWith("---")) {
                // File has frontmatter, add to it
                const frontmatterEndPos = newContent.indexOf("---", 3);
                if (frontmatterEndPos > 0) {
                    newContent = newContent.slice(0, frontmatterEndPos) + 
                        `permalink: ${permalink}\n` + 
                        newContent.slice(frontmatterEndPos);
                }
            } else {
                // No frontmatter, add new one
                newContent = `---\npermalink: ${permalink}\n---\n\n${newContent}`;
            }
            
            // Write the updated content back to the file
            await app.vault.modify(activeFile, newContent);
            console.log(`Added permalink: ${permalink} to ${activeFile.path}`);
        }
    } catch (permalinkError) {
        console.error("Error adding permalink:", permalinkError);
    }
    
    // 2. Rename from permalink if needed
    try {
        const content = await app.vault.read(activeFile);
        
        // Check if the file has auto_rename: true in frontmatter
        if (content.includes("auto_rename: true")) {
            // Extract permalink
            const permalinkMatch = content.match(/permalink:\s*([^\n]+)/);
            if (permalinkMatch) {
                const permalink = permalinkMatch[1].trim();
                const newFileName = permalink + ".md";
                
                // Get folder path
                const folderPath = activeFile.path.substring(0, activeFile.path.lastIndexOf("/"));
                const newPath = folderPath ? `${folderPath}/${newFileName}` : newFileName;
                
                // Skip if file already has the correct name
                if (activeFile.path !== newPath) {
                    // Rename file
                    await app.fileManager.renameFile(activeFile, newPath);
                    console.log(`Renamed file to: ${newPath}`);
                    new Notice(`Renamed to: ${newFileName}`, 2000);
                }
            }
        }
    } catch (renameError) {
        console.error("Error renaming file:", renameError);
    }
    
    // 3. Extract source if needed
    try {
        const content = await app.vault.read(activeFile);
        
        // Check if extract_source: true is in frontmatter
        if (content.includes("extract_source: true")) {
            // Look for source URL in the content
            const sourceMatch = content.match(/source:\s*(\S+)/);
            if (sourceMatch) {
                const sourceUrl = sourceMatch[1].trim();
                console.log(`Extracted source URL: ${sourceUrl} from ${activeFile.path}`);
                
                // Additional source processing logic could go here
            }
        }
    } catch (sourceError) {
        console.error("Error extracting source:", sourceError);
    }
    
    new Notice(`Processing complete for: ${activeFile.basename}`, 2000);
    tR = ""; // Clear template result
} catch (error) {
    console.error('Error in Process Files template:', error);
    new Notice(`Error: ${error.message}`, 3000);
    tR = ""; // Clear template result
}
-%>