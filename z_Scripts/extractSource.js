async function extractSource(tp) {
    try {
        // Get the current file
        const file = tp.file.find_tfile(tp.file.path(true));
        if (!file) {
            console.warn('No active file');
            return;
        }

        // Read the file content
        const content = await app.vault.read(file);

        // Look for "Source:" pattern and extract the value
        const sourceMatch = content.match(/Source:\s*([^\n]+)/);
        if (!sourceMatch) {
            console.warn('No Source: pattern found in file');
            return;
        }

        // Get the source value and clean it
        let sourceValue = sourceMatch[1].trim();
        
        // Remove page numbers by splitting at "p. " and taking the first part
        if (sourceValue.includes("p. ")) {
            sourceValue = sourceValue.split("p. ")[0].trim();
        }

        // Clean up formatting symbols while preserving specific punctuation
        sourceValue = sourceValue
            // Remove Markdown formatting
            .replace(/\*\*/g, '') // bold
            .replace(/\*/g, '') // italic
            .replace(/\_\_/g, '') // bold
            .replace(/\_/g, '') // italic
            .replace(/\~/g, '') // strikethrough
            .replace(/\`/g, '') // code
            .replace(/\[\[/g, '') // wiki links start
            .replace(/\]\]/g, '') // wiki links end
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // markdown links
            .replace(/\#/g, '') // hashtags
            .replace(/\|/g, '') // table separators
            .replace(/\>/g, '') // blockquotes
            .replace(/\</g, '') // html tags
            .replace(/\{/g, '') // curly braces
            .replace(/\}/g, '')
            .replace(/\$/g, '') // latex delimiters
            .replace(/\^/g, '') // superscript
            .replace(/\=/g, '') // headers
            .trim();

        // Get existing frontmatter
        const currentFrontmatter = app.metadataCache.getFileCache(file)?.frontmatter || {};

        // Check if source already exists and is correct
        if (currentFrontmatter.source === sourceValue) {
            console.log('Source already exists and is correct');
            return;
        }

        // Update frontmatter with the source value
        await app.fileManager.processFrontMatter(file, (frontmatter) => {
            // Preserve existing frontmatter
            Object.keys(currentFrontmatter).forEach(key => {
                if (key !== 'position') { // Skip position metadata
                    frontmatter[key] = currentFrontmatter[key];
                }
            });

            // Update the source
            frontmatter["source"] = sourceValue;
        });

    } catch (error) {
        console.error('Error in extractSource:', error);
    }
}

module.exports = extractSource; 