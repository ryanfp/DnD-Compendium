<%*
// Helper function, decides which templates to ignore.
// Adjust this function to match your setup.
Const ignoreFolder = folder => 
	Folder.Contains ('Zotero');

Const ignoreFileName = name => 
	Name.StartsWith ('nt')
	|| name.Includes ('Test');

// Auto-Detect the templates folder.
Const plugins = app. Setting. PluginTabs
	. Filter (tab => 'Templater' === tab. Name);
	
If (1 !== plugins. Length) {
	New Notice ('[Error] Could not find the Templater settings')
	Return;
}

Const templatesFolder = plugins[0]. Plugin. Settings. Templates_folder;

// Find all ". Md" files inside the templates folder.
Const templates = app. Vault
	. GetFiles ()
	. Filter (file => 'md' === file. Extension
		&& file.Path.StartsWith (templatesFolder)
		&& ! IgnoreFolder (file. Path)
		&& ! IgnoreFileName (file. Basename)
	)
	. Sort ((a, b) => a.name < b.name ? -1 : 1);

// calculate the current ISO week number
Const currentWeek = tp.Date.Now ("WW");

// calculate the current year
Const currentYear = tp.Date.Now ("YYYY")

// create regex pattern to test file names
Let weekPattern = new RegExp (`^${currentYear}-W${currentWeek}$`);

// Switch statement here allows testing various cases and selecting
// the appropriate template file based on the cases defined. 
// Default case will display a list of template files to select from.
Let useTemplate; 
Switch (true) {
    Case tp.File.Title.StartsWith ('@'):
        // file title prefix of @ is used for people files, but 
        // prompt user whether this is a contact person, or an
        // author.
        Type = await tp.System.Suggester (["Contact", "Author"], ["Contact", "Author"])

        // use the answer to get the correct template
        If (type === "Author") {
            UseTemplate = tp. File. Find_tfile ('tpl-author')
        } else {
            UseTemplate = tp. File. Find_tfile ('tpl-person')
        }
        Break;
    Case weekPattern.Test (tp. File. Title):
        // Match files with title like YYYY-WWnn, which is the
        // pattern used for my weekly notes
        UseTemplate = tp. File. Find_tfile ('tpl-weekly')
        Break;
    Case tp.File.Folder () == '22.00 assets':
        // Match files being created in the folder '22.00 assets'
        UseTemplate = tp. File. Find_tfile ('tpl-dtm-asset')
        Break;
    Default:
        // Ask the user to select a template. ESC is also allowed.
        Const templateNames = templates
        	. Map ((file, i) => `[${i+1}]  ${file. Basename}`);
        UseTemplate = await tp.System.Suggester (
        	TemplateNames,
        	Templates,
        	False,
        	'Choose a template for the file'
        );
}

If (useTemplate) { 
	%><% tp.file.include(useTemplate) %><%*
}

%>