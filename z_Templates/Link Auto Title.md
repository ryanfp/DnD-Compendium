<%*
Let url = await tp.System.Clipboard (); // Paste link
// let url = await tp.File.Selection (). Trim (); // Replace selected link
Let page = await tp.Obsidian.Request ({url});
Let p = new DOMParser ();
let doc = p.parseFromString (page, "text/html");
Let $ = s => doc.QuerySelector (s);
Let title = $("title")?. TextContent || $("meta[property='title']")?. Content;
Let description = $("meta[name='description']")?. Content || $("meta[property='og: description']")?. Content;
%>
### <% title %>
<% description ? `${description}\n` : '' %>[<% title %>](<% url %>)