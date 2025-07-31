/**
 * QuickAdd integration for renaming files based on permalink
 * - Preserves backlinks by adding the original filename as an alias
 * - Works with files/folders from context menu
 * 
 * Created: 2025-07-28 05:08:08
 * Author: ryanfp
 */

module.exports = async function(params) {
    const app = params.app;
    
    console.log("renameFromPermalink: Starting with params", Object.keys(params));
    
    try {
        console.log("TRYING TO GET ACTIVE FILE'S PARENT FOLDER");
        
        // Try to get selected files from file explorer
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0];
        
        if (fileExplorer) {
            console.log("Found file explorer");
            console.log("File explorer:", Object.keys(fileExplorer));
            console.log("File explorer view:", fileExplorer.view ? Object.keys(fileExplorer.view) : "no view");
            
            if (fileExplorer.view && fileExplorer.view.fileItems) {
                console.log("fileItems exists:", Object.keys(fileExplorer.view.fileItems).length);
                
                const selectedFileItems = Object.values(fileExplorer.view.fileItems)
                    .filter(item => {
                        const isSelected = item && item.selected;
                        if (isSelected) {
                            console.log("Found selected item:", item.file ? item.file.path : "no file");
                        }
                        return isSelected && item.file;
                    });
                
                console.log(`Found ${selectedFileItems.length} selected items`);
                
                if (selectedFileItems.length > 0) {
                    for (const item of selectedFileItems) {
                        const file = item.file;
                        if (file.children) {
                            // It's a folder
                            console.log(`Selected folder: ${file.path}`);
                            new window.Notice(`Processing folder: ${file.name}`);
                            await processFolder(file, app);
                        } else if (file.extension === 'md') {
                            // It's a markdown file
                            console.log(`Selected file: ${file.path}`);
                            await renameFileFromPermalink(file, app);
                        }
                    }
                    return;
                }
            }
        }
        
        // If we get here, we don't have selected files
        console.log("No selection found, using active file");
        
        // Get the active file or folder
        const activeFile = app.workspace.getActiveFile();
        
        if (activeFile) {
            console.log(`Using active file: ${activeFile.path}`);
            
            // If active file's parent folder should be processed
            const parentFolder = activeFile.parent;
            if (parentFolder) {
                console.log(`Using active file's parent folder: ${parentFolder.path}`);
                new window.Notice(`Processing folder: ${parentFolder.name}`);
                await processFolder(parentFolder, app);
            } else {
                // Just process the active file
                await renameFileFromPermalink(activeFile, app);
            }
        } else {
            console.log("No active file found");
            new window.Notice("No file or folder selected");
        }
    } catch (error) {
        console.error("Error in renameFromPermalink:", error);
        new window.Notice(`Error: ${error.message}`);
    }
};

async function processFolder(folder, app) {
    try {
        console.log(`Processing folder: ${folder.path}`);
        
        // Get all markdown files from vault
        const allFiles = app.vault.getMarkdownFiles();
        
        // Filter for files in this folder (including subfolders)
        const filesInFolder = allFiles.filter(file => {
            return file.path.startsWith(folder.path + '/');
        });
        
        console.log(`Found ${filesInFolder.length} markdown files in folder`);
        
        let renamed = 0;
        let skipped = 0;
        
        // Process each file
        for (const file of filesInFolder) {
            try {
                const result = await renameFileFromPermalink(file, app, false);
                if (result) {
                    renamed++;
                } else {
                    skipped++;
                }
                
                // Add a small delay
                await new Promise(resolve => setTimeout(resolve, 50));
            } catch (error) {
                console.error(`Error processing file ${file.path}:`, error);
                skipped++;
            }
        }
        
        console.log(`Renamed ${renamed} files, skipped ${skipped} files in folder ${folder.path}`);
        new window.Notice(`Renamed ${renamed} files in folder ${folder.name}`);
        
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
        new window.Notice(`Error processing folder: ${error.message}`);
    }
}

async function renameFileFromPermalink(file, app, showNotification = true) {
    try {
        console.log(`Processing file: ${file.path}`);
        
        // Get the frontmatter
        const cache = app.metadataCache.getFileCache(file)?.frontmatter;
        
        // Skip if no permalink exists
        if (!cache?.permalink) {
            console.log(`No permalink found for ${file.basename}`);
            return false;
        }

        // Get the permalink and current folder path
        const permalink = cache.permalink;
        const folderPath = file.path.substring(0, file.path.lastIndexOf("/") + 1);
        const newPath = folderPath + permalink + '.md';
        
        // Skip if file already has the correct name
        if (file.path === newPath) {
            console.log(`${file.basename} already has correct name`);
            return false;
        }

        console.log(`Renaming: ${file.path} → ${newPath}`);

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
            
            if (showNotification) {
                new window.Notice(`Renamed: ${file.basename} → ${permalink}.md`);
            }
            
            console.log(`Successfully renamed: ${file.basename} → ${permalink}.md`);
            return true;
        } catch (renameError) {
            console.error(`Error renaming file ${file.path}:`, renameError);
            if (showNotification) {
                new window.Notice(`Error renaming ${file.basename}: ${renameError.message}`);
            }
            return false;
        }

    } catch (error) {
        console.error(`Error renaming ${file.basename}:`, error);
        if (showNotification) {
            new window.Notice(`Error renaming ${file.basename}: ${error.message}`);
        }
        return false;
    }
}