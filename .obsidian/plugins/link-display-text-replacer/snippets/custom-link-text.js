// Link Display Text Script (Add to snippets folder)
// Current Date: 2025-08-08 01:26:18
// User: ryanfp

(function() {
  const updateDisplayText = async () => {
    // Get all internal links in the document
    const links = document.querySelectorAll('a.internal-link');
    
    for (const link of links) {
      // Skip if already processed
      if (link.getAttribute('data-processed') === 'true') continue;
      
      // Get target path
      const targetPath = link.getAttribute('data-href');
      if (!targetPath) continue;
      
      try {
        // Try to get the file content
        const file = app.vault.getAbstractFileByPath(targetPath + '.md');
        if (!file) continue;
        
        const content = await app.vault.read(file);
        
        // Simple frontmatter extraction
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (!frontmatterMatch) continue;
        
        const frontmatter = frontmatterMatch[1];
        
        // Look for display text
        const displayTextMatch = frontmatter.match(/display(?:-|_)?text:\s*["']?(.*?)["']?\s*(?:\n|$)/i) || 
                                frontmatter.match(/display:\s*["']?(.*?)["']?\s*(?:\n|$)/i);
        
        if (displayTextMatch && displayTextMatch[1]) {
          const displayText = displayTextMatch[1].trim();
          link.textContent = displayText;
          link.setAttribute('data-processed', 'true');
          link.style.color = 'var(--text-accent)';
          link.style.borderBottom = '1px dashed var(--text-accent)';
        }
      } catch (e) {
        console.error('Error processing link:', e);
      }
    }
  };
  
  // Run on page load
  updateDisplayText();
  
  // Add a button to refresh
  const refreshButton = document.createElement('button');
  refreshButton.textContent = '🔄 Refresh Link Text';
  refreshButton.style.position = 'fixed';
  refreshButton.style.bottom = '10px';
  refreshButton.style.right = '10px';
  refreshButton.style.zIndex = '1000';
  refreshButton.style.padding = '5px';
  refreshButton.style.fontSize = '12px';
  refreshButton.style.opacity = '0.7';
  refreshButton.addEventListener('click', updateDisplayText);
  document.body.appendChild(refreshButton);
  
  // Run periodically
  setInterval(updateDisplayText, 5000);
  
  // Listen for navigation events
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length > 0) {
        setTimeout(updateDisplayText, 300);
      }
    });
  });
  
  const contentContainer = document.querySelector('.markdown-preview-view');
  if (contentContainer) {
    observer.observe(contentContainer, { childList: true, subtree: true });
  }
})();