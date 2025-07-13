---
permalink: filename as permalink test
aliases:
  - filename as permalink test
  - Test
created: 2025/06/24 at 22:06
updated: 2025/07/13 at 17:13
title: filename as permalink test
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

<% (await (tp.file.filename()).replace(/ /g, '-')) %>

<% (await tp.file.filename()) .replace %>

<%*  
  const filename = tp.file.title;  
  const sanitizedFilename = filename  
    .toLowerCase()  
    .replace(/[^a-z0-9]+/g, '-')  
    .replace(/^-+|-+$/g, '');  
  tp.file.rename(sanitizedFilename);  
%>

<% tp.frontmatter.type %>/<% tp.user.url_title( tp.file.filename ) %>

<% tp.user.trim_title( tp.file.title ) %>

<% tp.user.url_title( tp.file.filename ) %>

function url_title(filename) {  
	return title  
		.replace(/\W+/g, ' ')  
		.trim()  
		.split(' ')  
		.slice(0, 5)  
		.join('-')  
		.toLowerCase();  
}  
module.exports = url_title;

<% tp.user.trim_title( tp.file.title ) %>