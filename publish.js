
console.log("Load start publish.js");

// Disable default favicon
document.querySelector("head > link[rel=icon]").href =
  "https://publish-01.obsidian.md/access/35d05cd1bf5cc500e11cc8ba57daaf88/favicon.ico";

let id;

function insertMetaData() {
  const frontmatter = app.site.cache.cache[app.currentFilepath].frontmatter;
  if (!frontmatter) {
    clearInterval(id);
    return;
  }

  const created = frontmatter["created"]?.replaceAll("-", "/");
  const updated = frontmatter["updated"]?.replaceAll("-", "/");
  const status = frontmatter["status"];
  const url = frontmatter["url"];
  if (!(created || updated || status || url)) {
    clearInterval(id);
    return;
  }

  const frontmatterEl = document.querySelector(".frontmatter");
  if (!frontmatterEl) {
    // DOM Don't use clearInterval because it is likely that the prepartaion is not yet complete
    return;
  }

  const urlElement = url ? `<a href="${url}" class="url">一次情報あり</a>` : "";

  frontmatterEl.insertAdjacentHTML(
    "afterend",
    `
<div class="properties-container">
  <div class="properties">
    ${created ? '<div class="created">created: ' + created + "</div>" : ""}
    ${updated ? '<div class="updated">updated: ' + updated + "</div>" : ""}
    ${status ? '<div class="status">' + status + "</div>" : ""}
  </div>
  <div class="properties">
    ${urlElement}
  </div>
</div>
`,
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
      id = setInterval(insertMetaData, 50);
    }
  }
};

const targetNode = document.querySelector(
  ".markdown-preview-sizer.markdown-preview-section",
);
const observer = new MutationObserver(onChangeDOM);
observer.observe(targetNode, { childList: true, subtree: true });
id = setInterval(insertMetaData, 50);

// Switches the custom theme to DND

document.body.addClass('dnd');

/* Frontmatter Initialize Block
let id;

function insertMetaDates() {
  // TODO: 
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


/* Use Frontmatter Function to Display DatesTimes 
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

*/










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

