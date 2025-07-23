<%*
tp.hooks.on_all_templates_executed(async () => {
    await tp.user.extractSource(tp);
});
%> 