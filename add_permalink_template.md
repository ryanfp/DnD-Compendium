<%*
async function addPermalink() {
    try {
        // Get the current file
        const file = tp.file.find_tfile(tp.file.path(true));
        if (!file) {
            console.warn('No active file found');
            return;
        }

        // Get current frontmatter
        const currentFrontmatter = app.metadataCache.getFileCache(file)?.frontmatter || {};
        
        // Generate new permalink from title
        const newPermalink = tp.user.trimTitle(tp.file.title);
        
        // If permalink exists and matches, skip
        if (currentFrontmatter.permalink === newPermalink) {
            console.log('Permalink already exists and matches the expected value');
            return;
        }

        // Update frontmatter
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            // Preserve existing frontmatter
            Object.keys(currentFrontmatter).forEach(key => {
                if (key !== 'position') { // Skip position metadata
                    frontmatter[key] = currentFrontmatter[key];
                }
            });
            
            // Add or update permalink
            frontmatter["permalink"] = newPermalink;
        });

    } catch (error) {
        console.error('Error in addPermalink:', error);
    }
}

await addPermalink();
%> 