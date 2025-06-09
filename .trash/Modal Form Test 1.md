[[<%*
Const result = await tp.User.OpenForm ('example-form', { values: { size: 'large' }});
%>](<const modalForm = app.plugins.plugins.modalforms.api;
module.exports = (formName, options) =%3E modalForm.openForm(formName, options);>)](<%3C%*
const example-form = app.plugins.plugins.modalforms.api;
  const run = async (frontmatter) =%3E {
    const result = await modalForm.openForm('frontmatter', {
      values: { ...frontmatter },
    });
    return result.getData();
  };
  //first we get the data from the form
  const data = await run(tp.frontmatter);
 // Then we update the frontmatter with the new data
  app.fileManager.processFrontMatter(
    tp.config.target_file,
    frontmatter => {
      Object.assign(frontmatter, data);
    },
  );
%>>)