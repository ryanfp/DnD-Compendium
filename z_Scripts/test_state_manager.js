/**
 * Test script for state manager's stage-based processing
 */

// Mock files for testing
const testFiles = [
    'test1.md',
    'test2.md',
    'test3.md'
];

// Mock app for testing
const mockApp = {
    metadataCache: {
        getFileCache: (file) => ({
            frontmatter: {}
        }),
        trigger: async () => {}
    },
    fileManager: {
        processFrontMatter: async (file, callback) => {
            console.log(`[MOCK] Processing frontmatter for ${file}`);
        }
    }
};

async function runTest() {
    const stateManager = window.obsidianStateManager;
    console.log('\n=== Starting State Manager Test ===\n');

    // Clear any existing state
    stateManager.clearState();
    console.log('State cleared');

    // Queue test files
    stateManager.queueFiles(testFiles);
    console.log('\nInitial queue state:');
    console.log(stateManager.getDebugInfo());

    // Process files through stages
    let nextFile;
    while ((nextFile = stateManager.getNextFile()) !== null) {
        console.log(`\nProcessing file: ${nextFile}`);
        
        // Simulate random processing time
        await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 500));

        // Randomly decide if file needs changes
        const needsChange = Math.random() > 0.5;
        
        if (needsChange) {
            console.log(`${nextFile} needs changes in ${stateManager.currentStage}`);
            stateManager.markOperationComplete(nextFile, stateManager.currentStage);
        } else {
            console.log(`${nextFile} already correct for ${stateManager.currentStage}`);
            stateManager.skipOperation(nextFile, stateManager.currentStage, 'already correct');
        }

        // Show queue state after each file
        console.log('\nCurrent state:');
        const state = stateManager.getDebugInfo();
        console.log(`Current stage: ${state.currentStage}`);
        console.log('Stage queues:', state.stageQueues);
        console.log('File status:', state.fileStatus);
    }

    console.log('\n=== Test Complete ===\n');
    console.log('Final state:', stateManager.getDebugInfo());
}

// Export for Templater
module.exports = runTest; 