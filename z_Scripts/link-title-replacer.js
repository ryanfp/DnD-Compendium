// Link Title Replacer - QuickAdd Compatible Version
// This script replaces link display text with the title frontmatter property

module.exports = async (params) => {
  const { app, quickAddApi } = params;
  
  // Simple console logging function
  function log(message) {
    console.log(`Link Title Replacer: ${message}`);
  }
  
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
          // Skip if link references a heading
          if (link.includes('#')) {
            log(`Skipping wiki link with heading reference: ${link}`);
            continue;
          }
          
          // Get just the filename without path for link
          const fileName = link.split(/[\/\\]/).pop();
          
          // If the link text already appears to be a custom title (not just the filename)
          // then skip it - we only want to replace file-like display text
          if (!isFilenameText(fileName)) {
            log(`Skipping wiki link with apparent custom text: ${link}`);
            continue;
          }
          
          const title = await getTitleFromLink(link);
          if (title && shouldReplaceText(fileName, title)) {
            // Replace with new title
            const replacement = `[[${link}|${title}]]`;
            content = content.replace(fullMatch, replacement);
            modified = true;
            log(`Updated wiki link: ${link} -> ${title}`);
          }
        }
      }
      
      // Process markdown-style links
      const mdMatches = [...content.matchAll(markdownLinkRegex)];
      for (const match of mdMatches) {
        const fullMatch = match[0];
        const displayText = match[1];
        let link = match[2];
        
        // Handle URL encoded characters
        try {
          link = decodeURIComponent(link);
        } catch (e) {
          // If decoding fails, use original link
        }
        
        // Extract the base link (without heading reference)
        const hasHeading = link.includes('#');
        const baseLink = hasHeading ? link.split('#')[0] : link;
        
        // Clean the link (remove .md extension if present)
        const cleanLink = baseLink.replace(/\.md$/, '');
        
        // Get just the filename without path for comparison
        // Handle both forward and back slashes
        const fileName = cleanLink.split(/[\/\\]/).pop();
        
        // If link has a heading and the display text matches the heading (not the filename)
        // then we should skip this link as it's already properly customized
        if (hasHeading) {
          const headingPart = link.split('#')[1];
          // Decode the heading part for comparison
          try {
            const decodedHeading = decodeURIComponent(headingPart);
            // Check if display text is similar to the heading
            if (isSimilarText(displayText, decodedHeading)) {
              log(`Skipping link with heading-matching display text: ${fullMatch}`);
              continue;
            }
          } catch (e) {
            // If decoding fails, continue with normal processing
          }
        }
        
        // Skip if the display text appears to be intentionally customized
        // (Check if it's not similar to filename or if it appears to be a custom title)
        if (!isSimilarText(displayText, fileName) || !isFilenameText(displayText)) {
          log(`Skipping markdown link with apparent custom text: ${fullMatch}`);
          continue;
        }
        
        // Use the original link for lookup (without the heading part)
        const title = await getTitleFromLink(cleanLink);
        if (title && shouldReplaceText(displayText, title)) {
          // Replace with new title, but keep the original link including heading reference
          const replacement = `[${title}](${match[2]})`;
          content = content.replace(fullMatch, replacement);
          modified = true;
          log(`Updated markdown link: ${displayText} -> ${title}`);
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
  
  // Check if text appears to be a filename rather than a custom title
  function isFilenameText(text) {
    // List of common words to ignore in similarity comparison
    const commonWords = ['the', 'a', 'an', 'of', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 'as'];
    
    // Normalize text for checking
    const normalizedText = text.toLowerCase()
      .replace(/[_\-\.]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Characteristics of filenames vs titles:
    
    // 1. Filenames often use kebab-case or snake_case
    if (text.includes('-') || text.includes('_')) {
      return true;
    }
    
    // 2. Filenames typically don't use proper title case (first letter of major words capitalized)
    // A title would have proper capitalization like "My Important Note"
    const words = text.split(/\s+/);
    if (words.length > 1) {
      // Count capitalized words (excluding the first word and common words)
      const capitalizedWords = words.slice(1).filter(word => 
        !commonWords.includes(word.toLowerCase()) && 
        word.length > 1 && 
        word[0] === word[0].toUpperCase()
      );
      
      // If there are multiple words but few capitalized, it's likely a filename
      if (words.length > 2 && capitalizedWords.length < (words.length / 3)) {
        return true;
      }
    }
    
    // 3. Check for spaces - filenames typically don't have spaces in Obsidian links
    if (!text.includes(' ')) {
      return true;
    }
    
    // 4. Filenames might include file extensions
    if (text.endsWith('.md') || text.match(/\.\w{2,4}$/)) {
      return true;
    }
    
    // If we can't determine clearly, be cautious and say it might be a custom title
    return false;
  }
  
  // Check if display text is similar to the filename (fuzzy matching)
  function isSimilarText(displayText, filename) {
    // List of common words to ignore in similarity comparison
    const commonWords = ['the', 'a', 'an', 'of', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 'as'];
    
    // Normalize both strings: lowercase, remove hyphens/underscores, and remove file extension
    const normalizeText = (text) => {
      const normalized = text.toLowerCase()
        .replace(/[_\-\.]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      
      // Remove common words for comparison
      let words = normalized.split(' ');
      words = words.filter(word => !commonWords.includes(word));
      return words.join(' ');
    };
           
    const normalizedDisplay = normalizeText(displayText);
    const normalizedFilename = normalizeText(filename);
    
    // Direct match after normalization
    if (normalizedDisplay === normalizedFilename) return true;
    
    // Check if one is a subset of the other (handles abbreviated forms)
    if (normalizedDisplay.includes(normalizedFilename) || 
        normalizedFilename.includes(normalizedDisplay)) {
      return true;
    }
    
    // Compare words (for more fuzzy matching)
    const displayWords = normalizedDisplay.split(' ').filter(w => w.length > 1); // Ignore single-letter words
    const filenameWords = normalizedFilename.split(' ').filter(w => w.length > 1);
    
    // If both have no significant words after filtering, they're not similar enough
    if (displayWords.length === 0 || filenameWords.length === 0) {
      return false;
    }
    
    // If most significant words match (>80% similarity), consider it a match
    // Using a higher threshold (80% vs previous 70%) to be more selective
    const commonWords = displayWords.filter(w => filenameWords.includes(w)).length;
    const maxWords = Math.max(displayWords.length, filenameWords.length);
    if (commonWords / maxWords > 0.8) {
      return true;
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
      // Clean the link - handle various formats
      let cleanLink = link.split('#')[0].split('|')[0].trim();
      
      // Try to find the file using Obsidian's resolver
      let targetFile = app.metadataCache.getFirstLinkpathDest(cleanLink, '');
      
      // If not found directly, try other variations
      if (!targetFile) {
        // Try removing the path and just use the filename
        const fileName = cleanLink.split(/[\/\\]/).pop();
        targetFile = app.metadataCache.getFirstLinkpathDest(fileName, '');
      }
      
      if (!targetFile) {
        return null;
      }
      
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
  
  // Get all files in a folder (always recursive)
  function getFilesInFolder(folderPath) {
    try {
      const folder = app.vault.getAbstractFileByPath(folderPath);
      if (!folder || folder.children === undefined) {
        console.error(`Folder not found: ${folderPath}`);
        return [];
      }
      
      let files = [];
      
      // Process all children
      for (const child of folder.children) {
        if (child.extension === 'md') {
          // It's a markdown file
          files.push(child);
        } else if (child.children) {
          // It's a subfolder, always process recursively
          const subFiles = getFilesInFolder(child.path);
          files = files.concat(subFiles);
        }
      }
      
      return files;
    } catch (error) {
      console.error(`Error getting files from folder ${folderPath}:`, error);
      return [];
    }
  }
  
  // Process multiple files
  async function processFiles(files) {
    if (files.length === 0) {
      console.log("No markdown files found");
      return;
    }
    
    let updatedCount = 0;
    const totalFiles = files.length;
    
    log(`Starting to process ${totalFiles} files...`);
    
    // Process files one by one
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      log(`Processing ${i+1}/${totalFiles}: ${file.path}`);
      const result = await processFile(file);
      if (result) updatedCount++;
    }
    
    log(`Finished processing. Updated links in ${updatedCount} of ${totalFiles} files`);
    return updatedCount;
  }
  
  // Main function
  try {
    const choices = [
      {name: "Current File", value: "current"},
      {name: "Current Folder (includes subfolders)", value: "folder"},
      {name: "Select Folder", value: "select-folder"}
    ];
    
    const choice = await quickAddApi.suggester(
      choices.map(c => c.name), 
      choices.map(c => c.value)
    );
    
    if (!choice) return "Cancelled"; // User cancelled
    
    if (choice === "current") {
      // Process active file
      const activeFile = app.workspace.getActiveFile();
      if (!activeFile) {
        log('No active file');
        return "No active file";
      }
      
      log(`Processing file: ${activeFile.path}`);
      const result = await processFile(activeFile);
      const message = result ? 'Links updated with titles' : 'No links needed updating';
      log(message);
      
      // Show a notice for user feedback
      const Notice = app.Notice || window.Notice;
      if (typeof Notice === 'function') {
        new Notice(message);
      }
    } 
    else if (choice === "folder") {
      // Process current folder
      const activeFile = app.workspace.getActiveFile();
      if (!activeFile) {
        log('No active file');
        return "No active file";
      }
      
      // Get the folder path from the active file
      const folderPath = activeFile.parent?.path || '';
      log(`Processing folder: ${folderPath}`);
      
      // Get all markdown files in the folder (recursively)
      const files = getFilesInFolder(folderPath);
      const updatedCount = await processFiles(files);
      
      // Show a notice for user feedback
      const Notice = app.Notice || window.Notice;
      if (typeof Notice === 'function') {
        new Notice(`Updated links in ${updatedCount} files`);
      }
    }
    else if (choice === "select-folder") {
      // Let user select a folder
      const folders = app.vault.getAllLoadedFiles()
        .filter(f => f.children !== undefined)
        .map(f => f.path);
      
      const selectedFolder = await quickAddApi.suggester(folders, folders);
      
      if (!selectedFolder) {
        log('No folder selected');
        return "No folder selected";
      }
      
      log(`Processing selected folder: ${selectedFolder}`);
      
      // Get all markdown files in the folder (recursively)
      const files = getFilesInFolder(selectedFolder);
      const updatedCount = await processFiles(files);
      
      // Show a notice for user feedback
      const Notice = app.Notice || window.Notice;
      if (typeof Notice === 'function') {
        new Notice(`Updated links in ${updatedCount} files`);
      }
    }
    
    return "Done";
  } catch (error) {
    console.error("Error in script execution:", error);
    return "Error: " + error.message;
  }
};