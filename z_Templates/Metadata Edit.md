<%*
Const modalForm = app. Plugins. Plugins. Modalforms. Api;
  Const run = async (frontmatter) => {
    Const result = await modalForm.OpenForm ('metadata-edit', {
      Values: { ... Frontmatter },
    });
    Return result.GetData ();
  };
  //first we get the data from the form
  Const data = await run (tp. Frontmatter);
 // Then we update the frontmatter with the new data
  App.FileManager.ProcessFrontMatter (
    Tp. Config. Target_file,
    Frontmatter => {
      Object.Assign (frontmatter, data);
    },
  );
%>