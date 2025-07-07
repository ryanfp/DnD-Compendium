document.body.addClass('dnd');

let id;

function insertMetaDates() {
  // TODO: あとで実装
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

function insertMetaDates() {
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
    <div class="created">create:${created}</div>
    <div class="updated">renew:${updated}</div>
</div>
`
  );

  clearInterval(id);
}

function insertMetaDates() {
  const frontmatter = app.site.cache.cache[app.currentFilepath].frontmatter;
  if (!frontmatter) {
    clearInterval(id);
    return;
  }

  const tags = frontmatter["tags"];
  if (!tags) {
    clearInterval(id);
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
<div class="properties">
    ${tagElms}
</div>
`
  );

  clearInterval(id);
}