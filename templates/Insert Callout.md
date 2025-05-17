<%*
const callouts = {
//  Callout name   |  Icon     |  UI Icon Description

    // Red - Critical/Error group
    "bug":            "  🟥   🪳",   // Bug icon
    "danger":         "  🟥   ⚡️",   // Lightning Bolt icon
    "fail":           "  🟥   ❌",   // 'X' mark icon
    // Orange - Warning group
    "attention":      "  🟧   ⚠️",  // Exclamation Sign icon
    "help":           "  🟧   ❓",  // Question Mark in Circle icon
    
    // Green - Success group
    "done":           "  🟩   ✅",  // Green Checkmark icon
    
    // Blue - Information group
    "info":           "  🟦   ⓘ",  // 'i' in Circle icon
    "note":           "  🟦   ✏️",  // Pencil icon
    "abstract":       "  🟦   📋",  // Clipboard icon 
    "example":        "🟦   📑",  // Outline icon (ish so a folder?)
    "hint":           "🟦   🔥",  // Flame icon
    "todo":           "🟦   ✅",  // Checkmark in Circle icon
    
    // White - Quotes
    "cite":           "⬜️   ⍘",   // Quotation Mark icon
    
    // Custom types (via Callout Manager)
};

const typeNames = [];
const typeLabels = [];

Object.keys(callouts)
    // Uncomment the line below to sort the callouts order alphabetically
    //.sort()
    .forEach((key, index) => { typeNames.push(key); 
	    // Add number prefix to each option for keyboard selection 
	    typeLabels.push(`${index+1}. ${callouts[key]} ${key}`);
    });

let calloutType = await tp.system.suggester(
    typeLabels,
    typeNames,
    false,
    "Select callout type (use numbers 1-" + typeLabels.length + " to select)"
);

// Stop here when the prompt was cancelled (ESC).
if (!calloutType) {
    return;
}

let title = await tp.system.prompt("Callout Header:");

let foldState = await tp.system.suggester(
    ["1. Static", "2. Expanded", "3. Collapsed"],
    ["", "+", "-"],
    false,
    "Select callout folding option (use numbers 1-3 to select)"
);

let content = await tp.file.selection();

// Format each line of content to be part of the callout
const formattedContent = content.split('\n').map(line => `> ${line}`).join('\n');
_%>

> [!<% calloutType %>]<% foldState %> <% title %>
<% formattedContent %> <%* tp.file.cursor() %>