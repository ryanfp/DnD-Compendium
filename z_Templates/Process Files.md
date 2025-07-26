<%* 
try {
    const target = tp.file;
    const app = this.app;
    
    new Notice(`Starting processing for ${target.basename || target.name}`);
    
    // Call the unified processing function
    await tp.user.processFiles({ app, file: target });
    
    new Notice(`Completed processing for ${target.basename || target.name}`);
} catch (error) {
    console.error('Error in template:', error);
    new Notice('Error processing file/folder. Check console for details.');
}
%>