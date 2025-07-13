---
aliases:
  - Untitled
title: 20 - Add Permalink
---
<%*
tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["permalink"] = tp.user.trim_title( tp.file.title );
  });
});
%>