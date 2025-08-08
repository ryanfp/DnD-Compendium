// Link Title Replacer - QuickAdd Compatible Version
// This script replaces link display text with the title frontmatter property

module.exports = async (params) => {
  const { app, quickAddApi } = params;
  
  // Process a single file
  async function processFile(file) {
    if (file.extension !== 'md') return false;
    
    try {
      // Read the file content
      let content = await app.vault.read(file);
      
      // Track if we made any changes
      let modified = false;
      
      // Find all wiki-style links [[...]] and markdown-style links [...](...) in the content
      const wikiLinkRegex = /\[\[(.*?)(?:\|(.*?))?\]\]/g;
      const markdownLinkRegex = /\[(.*?)\]\((.*?)\)/g;
      
      // Process wiki-style links
      const wikiMatches = [...content.matchAll(wikiLinkRegex)];
      for (const match of wikiMatches) {
        const fullMatch = match[0];
        const link = match[1];
        const alias = match[2]; // Will be undefined if no alias is present
        
        // Only process links without custom alias
        if (alias === undefined) {
          const title = await getTitleFromLink(link);
          if (title && shouldReplaceText(link, title)) {
            // Replace with new title
            const replacement = `[[${link}|${title}]]`;
            content = content.replace(fullMatch, replacement);
            modified = true;
          }
        }
      }
      
      // Process markdown-style links
      const mdMatches = [...content.matchAll(markdownLinkRegex)];
      for (const match of mdMatches) {
        const fullMatch = match[0];
        const text = match[1];
        const link = match[2];
        
        // Clean the link (remove .md extension if present)
        const cleanLink = link.replace(/\.md$/, '');
        
        // Get the filename from the link (handle paths)
        const fileName = cleanLink.split('/').pop();
        
        // Check if display text is roughly the same as the filename
        if (isSimilarText(text, fileName)) {
          const title = await getTitleFromLink(cleanLink);
          if (title) {
            // Replace with new title
            const replacement = `[${title}](${link})`;
            content = content.replace(fullMatch, replacement);
            modified = true;
          }
        }
      }
      
      // Save the file if modified
      if (modified) {
        await app.vault.modify(file, content);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error(`Error processing file ${file.path}:`, error);
      return false;
    }
  }
  
  // Check if display text is similar to the filename (fuzzy matching)
  function isSimilarText(displayText, filename) {
    // Normalize both strings: lowercase, remove hyphens/underscores, and remove file extension
    const normalizeText = (text) => 
      text.toLowerCase()
           .replace(/[_\-\.]/g, ' ')
           .replace(/\s+/g, ' ')
           .trim();
           
    const normalizedDisplay = normalizeText(displayText);
    const normalizedFilename = normalizeText(filename);
    
    // Direct match
    if (normalizedDisplay === normalizedFilename) return true;
    
    // Check if one is a subset of the other (handles abbreviated forms)
    if (normalizedDisplay.includes(normalizedFilename) || 
        normalizedFilename.includes(normalizedDisplay)) {
      return true;
    }
    
    // Compare words (for more fuzzy matching)
    const displayWords = normalizedDisplay.split(' ');
    const filenameWords = normalizedFilename.split(' ');
    
    // If most words match (>70% similarity), consider it a match
    if (displayWords.length > 0 && filenameWords.length > 0) {
      const commonWords = displayWords.filter(w => filenameWords.includes(w)).length;
      const maxWords = Math.max(displayWords.length, filenameWords.length);
      if (commonWords / maxWords > 0.7) {
        return true;
      }
    }
    
    return false;
  }
  
  // Decide if we should replace text (avoid unnecessary changes)
  function shouldReplaceText(originalText, newText) {
    // Don't replace if they're already the same
    if (originalText === newText) return false;
    
    // Don't replace if only case differs
    if (originalText.toLowerCase() === newText.toLowerCase()) return false;
    
    return true;
  }
  
  // Get the title from a linked file
  async function getTitleFromLink(link) {
    try {
      // Clean the link
      const cleanLink = link.split('#')[0].split('|')[0].trim();
      
      // Find the file
      const targetFile = app.metadataCache.getFirstLinkpathDest(cleanLink, '');
      if (!targetFile) return null;
      
      // Get the frontmatter
      const metadata = app.metadataCache.getFileCache(targetFile);
      if (!metadata || !metadata.frontmatter || !metadata.frontmatter.title) {
        return null;
      }
      
      return metadata.frontmatter.title;
    } catch (error) {
      console.error('Error getting title:', error);
      return null;
    }
  }
  
  // Ask user what to process
  const choice = await quickAddApi.suggester(
    ["Current File", "Current Folder"], 
    ["current", "folder"]
  );
  
  if (choice === "current") {
    // Process active file
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) {
      new Notice('No active file');
      return;
    }
    
    const result = await processFile(activeFile);
    new Notice(result ? 'Links updated with titles' : 'No links needed updating');
  } 
  else if (choice === "folder") {
    // Process current folder
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) {
      new Notice('No active file');
      return;
    }
    
    // Get the folder path from the active file
    const folderPath = activeFile.parent?.path || '';
    
    // Get all markdown files in the folder
    const files = app.vault.getFiles().filter(f => 
      f.extension === 'md' && f.parent && f.parent.path === folderPath
    );
    
    if (files.length === 0) {
      new Notice('No markdown files found in the current folder');
      return;
    }
    
    let updatedCount = 0;
    const totalFiles = files.length;
    
    // Create progress notification
    const statusBarItem = app.statusBar.addStatusBarItem();
    statusBarItem.setText(`Processing files: 0/${totalFiles}`);
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      statusBarItem.setText(`Processing files: ${i+1}/${totalFiles}`);
      const result = await processFile(file);
      if (result) updatedCount++;
    }
    
    // Remove progress notification
    statusBarItem.remove();
    
    new Notice(`Updated links in ${updatedCount} of ${totalFiles} files`);
  }
  
  return "Done";
};