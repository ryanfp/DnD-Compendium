<%*
tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  
  // Get existing frontmatter
  const currentFrontmatter = app.metadataCache.getFileCache(file)?.frontmatter || {};
  
  // Merge new permalink with existing frontmatter
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    // Preserve existing frontmatter by copying all properties
    Object.keys(currentFrontmatter).forEach(key => {
      if (key !== 'position') { // Skip position metadata
        frontmatter[key] = currentFrontmatter[key];
      }
    });
    
    // Add or update the permalink
    frontmatter["permalink"] = tp.user.trim_title(tp.file.title);
  });
});
%>