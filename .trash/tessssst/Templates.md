
<%_* let calloutType = await tp.system.suggester(["Abstract", "Attention", "Bug", "Caution", "Check", "Cite", "Danger", "Done", "Error", "Example", "Fail", "Failure", "FAQ", "Help", "Hint", "Important", "Info", "Missing","Note", "Question", "Quote", "Success", "Summary", "Tip", "TLDR", "Todo", "Warning"], ["abstract", "attention", "bug", "caution", "check", "cite", "danger", "done", "error", "example", "fail", "failure", "faq", "help", "hint", "important", "info", "missing","note", "question", "quote", "success", "summary", "tip", "tldr", "todo", "warning"], false, "Which type of callout do you want to insert?")%>

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
%>