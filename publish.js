
console.log("Load start publish.js");

/**************************************
  Disable default favicon and insert custom one
*************************************/
document.querySelector("head > link[rel=icon]").href =
  "https://publish-01.obsidian.md/access/35d05cd1bf5cc500e11cc8ba57daaf88/favicon.ico";


/****************************************
Show Date and Time for Creation/Updating
****************************************/
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
    // DOM Don't use clearInterval because it is likely that the preparation is not yet complete
    return;
  }

  const urlElement = url ? `<a href="${url}" class="url">Test URL</a>` : "";

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



/*********************************
  Switches the custom theme to DND
*********************************/
document.body.addClass('dnd');


/*********************************
Hide 'Obsidian Promos' on site
**********************************/

function setupGraphSettings() {
    if (app && app.graph && app.graph.renderer) {
        app.graph.renderer.hidePowerTag = true;
        console.log('Graph settings successfully applied.');
    } else {
        console.log('Graph renderer still not available, retrying in 10ms...');
        setTimeout(setupGraphSettings, 10); // Retry after 10ms
    }
}

// Initial call to setupGraphSettings
setupGraphSettings();

/*********************************
    CHANGE FILE NAME VIEW TO TITLES
**********************************/
function pwReplaceTitles() {
    
    const pageHeader = document.getElementsByClassName("page-header")[0];
    const titleProperty = app.site.cache.cache[app.currentFilepath].frontmatter["title"];
    const doNotUseTitle = document.getElementsByClassName("pws-title-noproperty")[0];
    const firstHeading = document.querySelectorAll(".pws-title-promote-h1 h1")[0];
    
    if (firstHeading) {
        document.title = firstHeading.innerText;
        pageHeader.innerText = firstHeading.innerText;
        firstHeading.style.display = 'none';
    } else if (titleProperty && !doNotUseTitle) {
        document.title = titleProperty;
        pageHeader.innerText = titleProperty;
    }
    
}


/****************
 Navigation Title Functions
****************/

function pwGetNavTitle(filePath) {
  // Get the file's frontmatter from cache
  const fileCache = app.site.cache.cache[filePath];
  if (!fileCache) return null;

  // Check for title in frontmatter
  const titleProperty = fileCache.frontmatter?.title;
  if (titleProperty) return titleProperty;

  // Fallback to filename without extension
  return filePath.split('/').pop().replace(/\.[^/.]+$/, '');
}

function pwUpdateNavTitles() {
  // Update all navigation file titles
  const navTitles = document.querySelectorAll('.nav-file-title-content');
  navTitles.forEach(titleEl => {
      const filePath = titleEl.closest('.nav-file-title')?.getAttribute('data-path');
      if (!filePath) return;
      
      const displayTitle = pwGetNavTitle(filePath);
      if (displayTitle) {
          titleEl.textContent = displayTitle;
      }
  });
}


/****************
 Page Nav Observer
****************/

const pageNavObserverConfig  = { childList:true, subtree: true }
const pageNavObserverNode = document.getElementsByClassName("markdown-preview-section")[0];

function pwNavFunctions() {
    pwProcessFrontmatter();
    pwReplaceTitles();
    pwToggleGraphView();
    insertMetaData();
    pwUpdateNavTitles(); // Add this line to update nav titles when page changes
}

function pwNavCallback(mutationRecords, observer) {
    for(let mutationRecord of mutationRecords) { // each mutation in event
        for(let addedNode of mutationRecord.addedNodes) { // each node in mutation
            if(addedNode.firstChild?.classList?.contains("frontmatter")) { // To catch internal page nav
                //console.log("<================== FIRED");
                pwNavFunctions(); // Immediate execution for internal page nav
                setTimeout(pwNavFunctions, 550); // Delayed execution for new page / refreshes
            }
        }
    }
}

let pageNavObserver = new MutationObserver(pwNavCallback);
pageNavObserver.observe(pageNavObserverNode, pageNavObserverConfig);









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

