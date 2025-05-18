<%*
Let url = await tp.System.Clipboard ();
Let page = await tp.Obsidian.Request ({url});
Let p = new DOMParser ();
let doc = p.parseFromString (page, "text/html");
Let $ = s => doc.QuerySelector (s);
%>[<%
$("meta[property='og: title']"). Content %>](<%
$("link[rel='shortLinkUrl']"). Href %>) (YT <%
$("link[itemprop='name']"). GetAttribute ("content") %> <%
$("meta[itemprop='uploadDate']"). Content.Slice (0, 7)%>)