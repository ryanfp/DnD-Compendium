const { Plugin, MarkdownView, PluginSettingTab, Setting, Notice } = require('obsidian');

class LinkDisplayTextReplacer extends Plugin {
  async onload() {
    console.log('Loading Link Display Text Replacer plugin');

    // Register the post-processor for markdown
    this.registerMarkdownPostProcessor(this.processLinks.bind(this));
    
    // Add a command to manually trigger refresh of all visible links
    this.addCommand({
      id: 'refresh-link-display-text',
      name: 'Refresh link display text',
      callback: () => this.refreshAllLinks()
    });
    
    // Add a settings tab
    this.addSettingTab(new LinkDisplayTextSettingsTab(this.app, this));
    
    // Listen for file changes to update links when frontmatter changes
    this.registerEvent(
      this.app.vault.on('modify', (file) => {
        if (file && file.extension === 'md') {
          this.refreshLinksTo(file.path);
        }
      })
    );
    
    // Register for layout changes to catch new views
    this.registerEvent(
      this.app.workspace.on('layout-change', () => {
        setTimeout(() => this.refreshAllLinks(), 300);
      })
    );
    
    // Initial refresh
    setTimeout(() => this.refreshAllLinks(), 1000);
  }

  async processLinks(el, ctx) {
    // Find all internal links
    const links = el.querySelectorAll('a.internal-link');
    
    for (const link of links) {
      await this.updateLinkText(link);
    }
  }
  
  async updateLinkText(link) {
    // Skip links that already have custom display text specified in the markdown
    if (link.getAttribute('data-linktext') !== link.textContent) {
      return;
    }
    
    // Get the target file path from data-href attribute
    const targetPath = link.getAttribute('data-href');
    if (!targetPath) return;
    
    // Skip if this is a heading/block reference
    if (targetPath.startsWith('#')) return;
    
    // Remove anchor and query parts if present
    const cleanPath = targetPath.split('#')[0].split('?')[0];
    
    // Get the full path with .md extension
    const fullPath = this.app.metadataCache.getFirstLinkpathDest(cleanPath, '');
    if (!fullPath) {
      return; // File not found
    }
    
    // Get the file's frontmatter
    const metadata = this.app.metadataCache.getCache(fullPath.path);
    if (!metadata || !metadata.frontmatter) {
      return; // No frontmatter
    }
    
    // Use title as display text source
    const displayText = metadata.frontmatter["title"] || null;
    
    if (displayText) {
      // Store the original text if not already stored
      if (!link.hasAttribute('data-original-text')) {
        link.setAttribute('data-original-text', link.textContent);
      }
      
      // Update the display text
      link.textContent = displayText;
      link.setAttribute('data-frontmatter-display', 'true');
      
      // Add a special class for styling
      link.classList.add('has-frontmatter-display');
    }
  }
  
  refreshAllLinks() {
    // Process all open markdown views
    this.app.workspace.iterateAllLeaves(leaf => {
      if (leaf.view instanceof MarkdownView) {
        // Check if in preview mode (reading view)
        const previewEl = leaf.view.previewMode?.containerEl;
        if (previewEl) {
          const links = previewEl.querySelectorAll('a.internal-link');
          links.forEach(link => this.updateLinkText(link));
        }
      }
    });
  }
  
  refreshLinksTo(filePath) {
    // Get the file name without extension and path
    const fileName = filePath.split('/').pop().replace(/\.md$/, '');
    
    // Process all open markdown views
    this.app.workspace.iterateAllLeaves(leaf => {
      if (leaf.view instanceof MarkdownView) {
        // Find links in preview mode
        const previewEl = leaf.view.previewMode?.containerEl;
        if (previewEl) {
          // Find all links where data-href points to our file
          const links = Array.from(previewEl.querySelectorAll('a.internal-link'))
            .filter(link => {
              const dataHref = link.getAttribute('data-href');
              // Check if the path ends with our filename
              return dataHref && dataHref.split('/').pop() === fileName;
            });
            
          links.forEach(link => this.updateLinkText(link));
        }
      }
    });
  }

  onunload() {
    console.log('Unloading Link Display Text Replacer plugin');
  }
}

// Settings tab implementation
class LinkDisplayTextSettingsTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const {containerEl} = this;
    containerEl.empty();

    containerEl.createEl('h2', {text: 'Link Display Text Settings'});

    new Setting(containerEl)
      .setName('Frontmatter key')
      .setDesc('The plugin uses the "title" frontmatter property for display text')
      .addText(text => text
        .setValue('title')
        .setDisabled(true));
        
    containerEl.createEl('h3', {text: 'Supported Link Types'});
    
    const formatList = containerEl.createEl('ul');
    formatList.createEl('li', {text: 'WikiLinks: [[Page Name]]'});
    formatList.createEl('li', {text: 'Markdown links: [Link Text](Page Name)'});
    
    containerEl.createEl('p', {text: 'Note: Links that already have custom display text in the markup (like [[Page|Custom]] or [Custom](Page)) will not be modified.'});
        
    new Setting(containerEl)
      .addButton(button => button
        .setButtonText('Refresh All Links Now')
        .setCta()
        .onClick(() => {
          this.plugin.refreshAllLinks();
          new Notice('Links refreshed!');
        }));
  }
}

module.exports = LinkDisplayTextReplacer;