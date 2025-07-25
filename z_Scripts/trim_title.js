/**
 * @typedef {import('obsidian').TFile} TFile
 * @typedef {import('obsidian').TFolder} TFolder
 */

/**
 * Track files we've already processed to prevent duplicates
 */
const processedFiles = new Set();

/**
 * Global lock to prevent concurrent script execution
 */
let scriptLock = false;

/**
 * Wait for script lock to be released
 * @param {number} timeout - Maximum time to wait in milliseconds
 * @returns {Promise<boolean>} - True if lock was acquired, false if timeout
 */
async function waitForLock(timeout = 30000) {
    const startTime = Date.now();
    while (scriptLock) {
        if (Date.now() - startTime > timeout) {
            console.log('Timeout waiting for script lock');
            return false;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    scriptLock = true;
    return true;
}

/**
 * Release the script lock
 */
function releaseLock() {
    scriptLock = false;
}

/**
 * Check if a file needs processing
 * @param {TFile} file - The file to check
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<{needsProcessing: boolean, reason: string}>}
 */
async function checkFileStatus(file, app) {
    // Skip if we've already processed this file
    if (processedFiles.has(file.path)) {
        return { needsProcessing: false, reason: "already processed" };
    }

    // Get the frontmatter
    const cache = app.metadataCache.getFileCache(file)?.frontmatter;
    
    // Check if permalink already exists
    if (cache?.permalink) {
        return { needsProcessing: false, reason: "permalink already exists" };
    }

    return { needsProcessing: true, reason: "needs permalink" };
}

/**
 * Process a single file
 * @param {TFile} file - The file to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFile(file, app) {
    try {
        // Check if file needs processing
        const status = await checkFileStatus(file, app);
        if (!status.needsProcessing) {
            console.log(`Skipping ${file.basename}: ${status.reason}`);
            processedFiles.add(file.path);
            return;
        }

        // Generate permalink from filename
        const permalink = file.basename.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        
        // Add permalink to frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter.permalink = permalink;
        });

        // Force metadata cache refresh
        await app.metadataCache.trigger();

        console.log(`Added permalink to ${file.basename}`);
        processedFiles.add(file.path);

    } catch (error) {
        console.error(`Error processing ${file.basename}:`, error);
    }
}

/**
 * Process all markdown files in a folder sequentially
 * @param {TFolder} folder - The folder to process
 * @param {App} app - The Obsidian app instance
 * @returns {Promise<void>}
 */
async function processFolder(folder, app) {
    try {
        // Clear the processed files set when starting a new folder
        processedFiles.clear();
        
        // Get all markdown files in the folder
        const files = folder.children || [];
        for (const file of files) {
            if (file instanceof TFile && file.extension === 'md') {
                await processFile(file, app);
            }
        }
    } catch (error) {
        console.error(`Error processing folder ${folder.path}:`, error);
    }
}

/**
 * Main function to handle both single file and folder cases
 * @param {Object} tp - The Templater object (optional)
 * @returns {Promise<void>}
 */
async function trim_title(tp = null) {
    // Try to acquire lock
    if (!await waitForLock()) {
        console.log('Another script is running, please wait and try again');
        return;
    }

    try {
        // Clear the processed files set at the start
        processedFiles.clear();
        
        // Try to get selected files from file explorer
        const fileExplorer = app.workspace.getLeavesOfType('file-explorer')[0];
        if (fileExplorer?.view?.fileItems) {
            const selectedFiles = Object.values(fileExplorer.view.fileItems)
                .filter(item => item.file && item.selected)
                .map(item => item.file);

            if (selectedFiles && selectedFiles.length > 0) {
                // Process only the selected files
                for (const file of selectedFiles) {
                    if (file instanceof TFile && file.extension === 'md') {
                        await processFile(file, app);
                    }
                }
                return;
            }
        }

        // If no selection, try Templater or active file
        let targetFile = null;

        // Try Templater context
        if (tp) {
            try {
                targetFile = tp.file.find_tfile(tp.file.path(true));
            } catch (e) {
                // Ignore error if tp.file.path fails
            }
        }

        // If no file from Templater, try active file
        if (!targetFile) {
            targetFile = app.workspace.getActiveFile();
        }

        // If we have a single file, process it
        if (targetFile && targetFile.extension === 'md') {
            await processFile(targetFile, app);
            return;
        }

        // If we're processing a folder
        if (targetFile?.parent) {
            await processFolder(targetFile.parent, app);
        }

    } catch (error) {
        console.error('Error in trim_title:', error);
    } finally {
        // Always release the lock when done
        releaseLock();
    }
}

// Export the main function as default
module.exports = trim_title;