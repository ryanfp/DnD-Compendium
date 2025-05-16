<%*
// =====================================================================================================================================================================
// FURTHER UPDATES TO PREVIOUS DANTEALI VERSIONS
// Templater discussion: https://github.com/SilentVoid13/Templater/discussions/888
// After my V2 update (https://github.com/SilentVoid13/Templater/discussions/888#discussioncomment-5523668) cr0Kz merged the two scripts and heavily refactored the code. 
// Cr0Kz latest version (as of 20231005): https://github.com/SilentVoid13/Templater/discussions/888#discussioncomment-7024450
// This version: https://github.com/SilentVoid13/Templater/discussions/888#discussioncomment-7204381
//
// Additional changes in this version:
//  - Added additional code commenting - for my own understanding later when I inevitably come back and forget it all 😉.
//    Not as clean and concise as cr0Kz any longer - sorry!
//  - Added empty line at top of TOC, otherwise there was no separation between file content and TOC callout.
//  - Added debugging (enabled/disabled by constant/switch at top of file) which cr0Kz had in his first version but removed in latest.
//    Added additional debug messages to help me with development. Debug console accessible with Ctrl+Shift+I.
//  - If a TOC already exists it will always be updated in the current location. If no existing TOC, default location is top of file (below
//    any frontmatter). 
//    Added switches to allow default location to be changed to: below the first header, or at cursor position.
//  - Added switch (at top of file) to change from default Markdown-style links used in TOC to Wiki-style links.
//  - Added switch to disable header level depth prompt and const to define default depth. If you know what level you will always want then easy to disable prompt.
//
// =====================================================================================================================================================================
// FUNCTIONALITY
// =============
//
// DEBUG MESSAGES
// Write useful debugging messages to console (Ctrl+Shiift+i)
Const deBug = 0;
//
// TOC LOCATION
// If a TOC already exists it will be updated in the same location.
// If no existing TOC then default location is top of file (below any frontmatter). OR...
//   - Insert TOC below first header instead of top of file
Const insertBelowHeader = 0;
//   - Insert TOC at cursor position instead of top of file or below first header (overrides insertBelowHeader=1)
Const insertAtCursor = 1;
//
// TOC LINKS STYLE
// Swap to using Wiki-style syntax for TOC links. By default links in TOC use the Markdown syntax.
Const useWikilinks = 0;
//
// DISABLE LEVEL PROMPT
// Disable prompt for user to select level depth to use in TOC.
// Set default level depth too (1-6).
Const levelDepthPromptDisable = 1;
Const levelDepthDefault = "6";
//
// =====================================================================================================================================================================

// Utility function for debugging
Const debugLog = (label, data) => {
    If (typeof deBug !== 'undefined' && deBug === 1) console.Log (`${label} \n\n`, data);
};

// Otherwise place in default location at top of file (below frontmatter) or below first header.
Let curPosition = this.App.Workspace.ActiveLeaf.View.Editor.GetCursor (). Line;
DebugLog ("Cursor position", curPosition);

// Constants for TOC markers
const markerTOCstart = '>[!SUMMARY]+ Table of Contents';
Const markerTOCend = '%%ENDTOC%%';

// Get the active file info and its metadata
Const activeFile = await this.App.Workspace.GetActiveFile ();
Const mdCache = await this.App.MetadataCache.GetFileCache (activeFile);

// Show file info
DebugLog ("File Info - activeFile: ", activeFile);
//debugLog ("File Info - tp. Config. Active_file", tp. Config. Active_file); // Matches 'activeFile' above
//debugLog ("File Info - app. Workspace. ActiveLeaf. View. File", app. Workspace. ActiveLeaf. View. File); // Matches 'activeFile' above
DebugLog ("File Info - tp. File. Find_tfile", tp. File. Find_tfile (tp. File. Title)); // Matches 'activeFile' above
DebugLog ("File Cache - mdCache: ", mdCache); // Metadata
DebugLog ("Filename - tp. Config. Active_file. Name", tp. Config. Active_file. Name); // Filename

// Get the current file content and split it into lines
Const fileContent = await tp. File. Content;
Const fileContentSplit = fileContent.Split ('\n');

// Check if the file starts with a YAML frontmatter block
// hasYAML is a bool matching evaluation of the two conditionals i.e. will be true if
// (the first line in file = '---') AND (if the next occurrence of '---' is on line > 0, start looking from line 1)
Let hasYAML = fileContentSplit[0] === '---' && fileContentSplit.IndexOf ('---', 1) > 0;
// yamlEndLine equals the left hand side of ': ' expression if hasYAML is true, and right hand side if hasYAML is false.
// if hasYAML is true then yamlEndLine = first occurrence of '---' in array holding file lines start looking at index 1
// if hasYAML is false then yamlEndLine = -1
Let yamlEndLine = hasYAML ? FileContentSplit.IndexOf ('---', 1) : -1;
DebugLog ("First line in file", fileContentSplit[0]); // First line in file
DebugLog ("First line = '---' in file line array", fileContentSplit.IndexOf ('---')); // Find first occurrence of '---' in array holding file lines
DebugLog ("First line = '---' in file line array, start line 2", fileContentSplit.IndexOf ('---', 1)); // Find first occurrence of '---' in array holding file lines start looking at index 1
DebugLog ("hasYAML", hasYAML);
DebugLog ("yamlEndLine", yamlEndLine);

// Find existing TOC start and end positions
Let TOCstart = fileContentSplit.IndexOf (markerTOCstart);
Let TOCend = fileContentSplit.IndexOf (markerTOCend, TOCstart); // Start looking for occurrence after the array element holding start marker.
DebugLog ("TOCstart", TOCstart);
DebugLog ("TOCend", TOCend);

// Remove existing TOC if it exists
// Removes the TOC section from array of file lines
// array.Splice (X, Y) removes Y elements starting at position X.
If (TOCstart !== -1 && TOCend !== -1) {
    //fileContentSplit.Splice (TOCstart, TOCend - TOCstart + 1);
    // Updated to also remove empty line at start/end of TOC which we added
    FileContentSplit.Splice (TOCstart - 1, TOCend - TOCstart + 2);
}

// Initialize an empty array to hold new TOC lines
Let newTOC = [];

// Get header limit from user
Let header_limit = levelDepthDefault;
If (levelDepthPromptDisable == 0) header_limit = await tp.System.Prompt ("Show Contents Down to Which Header Level (1-6)?", levelDepthDefault);

Const mdCacheListItems = mdCache. Headings;
DebugLog ("Headers", mdCacheListItems);

// Parse headings and create new TOC
If (mdCacheListItems && mdCacheListItems. Length > 0) {
	// Generate new TOC
	MdCacheListItems.ForEach (item => {
	    Var header_text = item. Heading;
	    Var header_level = item. Level;
	    
	    If (header_level <= header_limit) {			
			If (useWikilinks == 1) {
				// Wiki-style
			    Let file_title = tp. File. Title;
			    Let header_url = header_text;         
			    let header_link = ` [[${file_title}#${header_url}|${header_text}]] `
			    NewTOC.Push (`>${'    '.Repeat (header_level - 1) + '- ' + header_link}`);
			} else {
				// Markdown-style 
				Let file_title = tp.File.Title.Replace (/ /g, '%20');    // Replace spaces with '%20'
		        Let header_url = header_text.Replace (/:/g, ''). Replace (/ /g, '%20');    // Remove ': ', Replace spaces in urls with '%20'
		        let header_link = ` [${header_text}](${file_title}.md#${header_url}) `;
		        NewTOC.Push (`>${'    '.Repeat (header_level - 1) + '- ' + header_link}`);
			}
	    }
	});
}

// Determine where to insert the new TOC
// Order of definitions below ensures that TOC is placed in priority order of:
//   - Directly below frontmatter, or top of file if no frontmatter
//   - Directly below first header
//   - At cursor position if no existing TOC (if feature enabled at top of file)
//   - ALWAYS update existing TOC location if it exists
// Insert below frontmatter or top of file.
Let insertPosition = hasYAML ? YamlEndLine + 2 : 0;    // Use +1 if not adding additional empty line to TOC before start marker
DebugLog ("insertPosition - frontmatter", insertPosition);
// Insert below first header
If (insertBelowHeader == 1) {
	Let firstHeaderFind = '#'.Repeat (mdCacheListItems[0]. Level) + ' ' + mdCacheListItems[0]. Heading;
	DebugLog ("First Header String", firstHeaderFind);
	InsertPosition = fileContentSplit.IndexOf (firstHeaderFind) + 2;  // Use +1 if not adding additional empty line to TOC before start marker
	DebugLog ("insertPosition - header", insertPosition);
}
// Insert at cursor position if feature enabled
If (insertAtCursor == 1)  insertPosition = curPosition;
DebugLog ("insertPosition - cursor", insertPosition);
// Insert at existing TOC location
If (TOCstart !== -1) insertPosition = TOCstart;
DebugLog ("insertPosition - existing", insertPosition);

// Add or remove TOC based on newTOC's content
// Note the '... NewTOC' used to insert TOC. This is called the 'spread operator' and expands
//    the item to individual values.
If (newTOC. Length > 0) {
    // Insert the new TOC into the file content
    //fileContentSplit.Splice (insertPosition, 0, markerTOCstart, ... NewTOC, "", markerTOCend);
    // Updated with an empty line before start marker, we need to adjust insert location to compensate
    FileContentSplit.Splice (insertPosition-1, 0, "", markerTOCstart, ... NewTOC, "", markerTOCend);
} else if (TOCstart !== -1 && TOCend !== -1) {
    // Remove the markers when there are no headers
    FileContentSplit.Splice (TOCstart, TOCend - TOCstart + 1);
}

DebugLog ("TOC: ", newTOC);
// Update the file with the new content
Await app.Vault.Modify (activeFile, fileContentSplit.Join ('\n'));
%>
