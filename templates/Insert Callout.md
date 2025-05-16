[<%_* let calloutType = await tp.system.suggester(["Abstract", "Attention", "Bug", "Caution", "Check", "Cite", "Danger", "Done", "Error", "Example", "Fail", "Failure", "FAQ", "Help", "Hint", "Important", "Info", "Missing","Note", "Question", "Quote", "Success", "Summary", "Tip", "TLDR", "Todo", "Warning"], ["abstract", "attention", "bug", "caution", "check", "cite", "danger", "done", "error", "example", "fail", "failure", "faq", "help", "hint", "important", "info", "missing","note", "question", "quote", "success", "summary", "tip", "tldr", "todo", "warning"], false, "Which type of callout do you want to insert?")%>

<%_* let foldState = await tp.system.suggester(["Not Foldable", "Default Expanded", "Default Collapsed"], ["", "+", "-"], false, "Folding state of callout?")%>

<%_*
  Let title = await tp.System.Prompt ("Optional Title Text", "")
%>

<%_*
  Let calloutContent = await tp.System.Prompt ("Optional Content Text (Shift Enter to Insert New Line)", "", false, true)
  CalloutContent = calloutContent.ReplaceAll ("\n", "\n> ")
%>

<%-*
If (calloutType != null) {
  let content = '> [!' + calloutType + '] ' + foldState + ' ' + title + '\n> ' + calloutContent + '\n'
  TR+=content
}
%>](<%3C%*
const callouts = {
//  Callout name   |  Prompt Name     |  UI Icon Description

    // Red - Critical/Error group
    "bug":            "🟥 🪳 Bug",        // Bug icon
    "danger":         "🟥 ⚡️ Danger",     // Lightning Bolt icon
    "error":          "🟥 ⚡️ Error",      // Lightning Bolt icon
    "fail":           "🟥 ❌ Fail",       // 'X' mark icon
    "failure":        "🟥 ❌ Failure",    // 'X' mark icon
    "missing":        "🟥 ❌ Missing",    // 'X' mark icon
    
    // Orange - Warning group
    "attention":      "🟧 ⚠️ Attention",  // Exclamation Sign icon
    "caution":        "🟧 ⚠️ Caution",    // Exclamation Sign icon
    "warning":        "🟧 ⚠️ Warning",    // Exclamation Sign icon
    "help":           "🟧 ❓ Help",       // Question Mark in Circle icon
    "faq":            "🟧 ❓ FAQ",        // Question Mark in Circle icon
    "question":       "🟧 ❓ Question",   // Question Mark in Circle icon
    
    // Green - Success group
    "done":           "🟩 ✅ Done",       // Green Checkmark icon
    "check":          "🟩 ✅ Check",      // Green Checkmark icon
    "success":        "🟩 ✅ Success",    // Green Checkmark icon
    
    // Blue - Information group
    "info":           "🟦 ⓘ Info",       // 'i' in Circle icon
    "note":           "🟦 ✏️ Note",       // Pencil icon
    "abstract":       "🟦 📋 Abstract",   // Clipboard icon 
    "summary":        "🟦 📋 Summary",    // Clipboard icon  
    "tldr":           "🟦 📋 TL;DR;",     // Clipboard icon  
    "example":        "🟦 📑 Example",    // Outline icon (ish so a folder?)
    "hint":           "🟦 🔥 Hint",       // Flame icon
    "important":      "🟦 🔥 Important",  // Flame icon
    "tip":            "🟦 🔥 Tip",        // Flame icon
    "todo":           "🟦 ✅ Todo",       // Checkmark in Circle icon
    
    // White - Quotes
    "cite":           "⬜️ ⍘ Cite",        // Quotation Mark icon
    "quote":          "⬜️ ⍘ Quote",       // Quotation Mark icon
    
    // Custom types (via Callout Manager)
};

const typeNames = [];
const typeLabels = [];

Object.keys(callouts)
	// Uncomment the line below to sort the callouts order alphabetically
	//.sort()
	.forEach((key, index) =%3E {
	    typeNames.push(key);
	    // Add number prefix to each option for keyboard selection
	    typeLabels.push(`${index+1}. ${callouts[key]}`);
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

// Extract the main name from the label to pre-fill the header
let defaultTitle = callouts[calloutType].split(' ').pop();

let title = await tp.system.prompt("Callout Header:", defaultTitle);

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
<% formattedContent %> <%* tp.file.cursor() %>>)