<%* 
try {
    const target = tp.file;
    const app = this.app;
    
    // Initialize state manager first
    await tp.user.stateManager({ app });
    
    // Then run each step in sequence
    if (target.children) {
        // Process a folder
        new Notice(`Processing folder: ${target.name}`);
        
        // First add permalinks to all files
        new Notice(`Step 1: Adding permalinks`);
        await tp.user.addPermalink({ app, file: target });
        
        // Then rename based on permalinks
        new Notice(`Step 2: Renaming files`);
        await tp.user.copyPermalinkAndRename({ app, file: target });
        
        // Finally extract source info
        new Notice(`Step 3: Extracting sources`);
        await tp.user.extractSource({ app, file: target });
        
        new Notice(`Completed processing folder: ${target.name}`);
    } else {
        // Process a single file
        new Notice(`Processing file: ${target.basename}`);
        
        // First add permalink
        new Notice(`Step 1: Adding permalink`);
        await tp.user.addPermalink({ app, file: target });
        
        // Then rename based on permalink
        new Notice(`Step 2: Renaming file`);
        await tp.user.copyPermalinkAndRename({ app, file: target });
        
        // Finally extract source
        new Notice(`Step 3: Extracting source`);
        await tp.user.extractSource({ app, file: target });
        
        new Notice(`Completed processing file: ${target.basename}`);
    }
} catch (error) {
    console.error('Error in processing:', error);
    new Notice('Error during processing. Check console for details.');
}
%>