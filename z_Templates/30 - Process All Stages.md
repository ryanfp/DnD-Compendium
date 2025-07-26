<%* 
try {
    const target = tp.file;
    const app = this.app;
    
    // Always initialize/refresh state manager first
    await tp.user.stateManager({ app });
    new Notice('State manager initialized.');
    
    // Call processAll with the appropriate parameters
    await tp.user.processAll({ app, file: target });
    
    new Notice(`Completed processing: ${target.basename}`);
} catch (error) {
    console.error('Error in Process All Stages template:', error);
    new Notice('Error processing file/folder. Check console for details.');
}
%>