<%*
// Helper function, decides which templates to ignore.
// Adjust this function to match your setup.
const ignoreFolder = folder => 
	folder.contains('Zotero');

const ignoreFileName = name => 
	name.startsWith('nt')
	|| name.includes('Test');

// Auto-Detect the templates folder.
const plugins = app.setting.pluginTabs
	.filter(tab => 'Templater' === tab.name);
	
if (1 !== plugins.length) {
	new Notice('[Error] Could not find the Templater settings')
	return;
}

const templatesFolder = plugins[0].plugin.settings.templates_folder;

// Find all ".md" files inside the templates folder.
const templates = app.vault
	.getFiles()
	.filter(file => 'md' === file.extension
		&& file.path.startsWith(templatesFolder)
		&& ! ignoreFolder(file.path)
		&& ! ignoreFileName(file.basename)
	)
	.sort((a, b) => a.name < b.name ? -1 : 1);

// calculate the current ISO week number
const currentWeek = tp.date.now("WW");

// calculate the current year
const currentYear = tp.date.now("YYYY")

// create regex pattern to test file names
let weekPattern = new RegExp(`^${currentYear}-W${currentWeek}$`);

// Switch statement here allows testing various cases and selecting
// the appropriate template file based on the cases defined. 
// Default case will display a list of template files to select from.
let useTemplate; 
switch (true) {
    case tp.file.title.startsWith('@'):
        // file title prefix of @ is used for people files, but 
        // prompt user whether this is a contact person, or an
        // author.
        type = await tp.system.suggester(["Contact", "Author"], ["Contact", "Author"])

        // use the answer to get the correct template
        if (type === "Author") {
            useTemplate = tp.file.find_tfile('tpl-author')
        } else {
            useTemplate = tp.file.find_tfile('tpl-person')
        }
        break;
    case weekPattern.test(tp.file.title):
        // Match files with title like YYYY-WWnn, which is the
        // pattern used for my weekly notes
        useTemplate = tp.file.find_tfile('tpl-weekly')
        break;
    case tp.file.folder() == '22.00 assets':
        // Match files being created in the folder '22.00 assets'
        useTemplate = tp.file.find_tfile('tpl-dtm-asset')
        break;
    default:
        // Ask the user to select a template. ESC is also allowed.
        const templateNames = templates
        	.map((file, i) => `[${i+1}]  ${file.basename}`);
        useTemplate = await tp.system.suggester(
        	templateNames,
        	templates,
        	false,
        	'Choose a template for the file'
        );
}

if (useTemplate) { 
	%><% tp.file.include(useTemplate) %><%*
}

%>