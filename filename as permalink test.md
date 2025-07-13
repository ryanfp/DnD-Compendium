---
permalink: 
aliases:
  - filename as permalink test
  - Test
created: 2025/06/24 at 22:06
updated: 2025/07/13 at 15:12
title: filename's title
---

tp.file.filename.replace(/ /, '-')

<%* let filename = tp.file.filename if (filename.startsWith("Untitled")) { filename = await tp.system.prompt("Filename"); } const modFilename = filename.replace(/ /g, "-").toLowerCase() await tp.file.rename(modFilename) _%>

<% tp.file.filename %>


<%* 
const permalink = tp.file.filename; 
const sanitizedFilename = filename
	.toLowerCase() 
	.replace(/[^a-z0-9]+/g, '-') 
	.replace(/^-+|-+$/g, '');  
%>


<%*  
  const filename = tp.file.title;  
  const sanitizedFilename = filename  
    .toLowerCase()  
    .replace(/[^a-z0-9]+/g, '-')  
    .replace(/^-+|-+$/g, '');  
  tp.file.rename(sanitizedFilename);  
%>