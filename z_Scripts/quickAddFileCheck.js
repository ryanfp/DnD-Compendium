/**
 * QuickAdd integration for FileProcessor
 * - Works with files/folders from context menu
 * - Based on Linter's approach to handling files
 */
module.exports = async (params) => {
    const { app } = params;
    
    try {
        // Import the FileProcessor class
        const FileProcessor = require(app.vault.configDir + '/scripts/fileProcessor.js');
        const processor = new FileProcessor(app);
        
        // Determine target file or folder from QuickAdd context using multiple methods
        let target = null;
        
        // 1. Try to get file from QuickAdd context menu
        if (params.file) {
            target = params.file;
            console.log(`Using file from params.file: ${target.path}`);
        } 
        else if (params.filepath) {
            // Get file from path (context menu often provides this)
            target = app.vault.getAbstractFileByPath(params.filepath);
            if (target) {
                console.log(`Using file from filepath: ${target.path}`);
            }
        }
        else if (params.variables && params.variables.file) {
            target = params.variables.file;
            console.log(`Using file from params.variables.file: ${target.path}`);
        }
        // 2. Try QuickAdd's contextMenu target
        else if (app.plugins.plugins.quickadd?.api?.contextMenu?.target) {
            const menuTarget = app.plugins.plugins.quickadd.api.contextMenu.target;
            if (menuTarget.file) {
                target = menuTarget.file;
                console.log(`Using file from QuickAdd context menu: ${target.path}`);
            }
        }
        
        // 3. If no target found yet, try file explorer selection through DOM
        if (!target) {
            // This is a backup approach that Linter uses
            const fileExplorerLeaf = app.workspace.getLeavesOfType("file-explorer")[0];
            if (fileExplorerLeaf) {
                // Try to find selected item in file explorer through DOM
                const fileExplorerView = fileExplorerLeaf.view;
                const selectedEl = fileExplorerView.containerEl.querySelector('.nav-folder.mod-active, .nav-file.mod-active');
                
                if (selectedEl) {
                    // Get file path from data attribute
                    const filepath = selectedEl.getAttribute('data-path');
                    if (filepath) {
                        target = app.vault.getAbstractFileByPath(filepath);
                        console.log(`Using file from DOM selection: ${filepath}`);
                    }
                }
            }
        }
        
        // 4. Process the target or let processor find one
        const result = await processor.process(target);
        return result.success;
        
    } catch (error) {
        console.error("Error in QuickAdd script:", error);
        new Notice(`Error: ${error.message}`);
        return false;
    }
};