
// Switches the custom theme to DND

document.body.addClass('dnd');

// Frontmatter Initialize Block
let id;

/* Use Frontmatter Function to Display DatesTimes */
function insertMetaDates(...args: []) {
    const frontmatter = app.site.cache.cache[app.currentFilepath].frontmatter;
    if (!frontmatter) {
        clearInterval(id);
        return;
    }

    const created = frontmatter["created"]?.replaceAll("-", "/");
    const updated = frontmatter["updated"]?.replaceAll("-", "/");
    if (!created && !updated) {
        clearInterval(id);
        return;
    }

    const frontmatterEl = document.querySelector(".frontmatter");
    if (!frontmatterEl) {
        return;
    }

    frontmatterEl.insertAdjacentHTML(
        "afterend",
        `
<div class="properties">
    <div class="created">created:${created}</div>
    <div class="updated">updated:${updated}</div>
</div>
`
    );

    clearInterval(id);
}





/* TAG ELEMENT DISPLAY
let id;

function insertMetaDates() {
  const frontmatter = app.site.cache.cache[app.currentFilepath].frontmatter;
  if (!frontmatter) {
    return;
  }

  const tags = frontmatter["tags"];
  if (!tags) {
    return;
  }

  const frontmatterEl = document.querySelector(".frontmatter");
  if (!frontmatterEl) {
    return;
  }

  const tagElms = tags
    .map(
      (tag) => `
    <a href="#${tag}" class="tag" target="_blank" rel="noopener">#${tag}</a>
    `
    )
    .join("");
    frontmatterEl.insertAdjacentHTML(
        "afterend",
        `
    <div style="display: flex-wrap; margin: 3px; gap: 3px;">
      ${tagElms}
    </div> 
`
  );

  clearInterval(id);
}

const onChangeDOM = (mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (
      mutation.type === "childList" &&
      mutation.addedNodes[0]?.className === "page-header"
    ) {
      clearInterval(id);
      id = setInterval(insertMetaDates, 50);
    }
  }
};

const targetNode = document.querySelector(
  ".markdown-preview-sizer.markdown-preview-section"
);
const observer = new MutationObserver(onChangeDOM);
observer.observe(targetNode, { childList: true, subtree: true });
id = setInterval(insertMetaDates, 50);


 <div style="display: flex-wrap; gap: 3px;">
  ${tagElms}
</div> */

