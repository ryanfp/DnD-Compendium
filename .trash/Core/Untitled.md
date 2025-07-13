---
<%*
setTimeout(() => {
    app.fileManager.processFrontMatter(this.app.workspace.getActiveFile(), (frontmatter) => {
        frontmatter["permalink"] = [tp.user.trim_title( tp.file.title )]
    })
}, 1)
%>
---