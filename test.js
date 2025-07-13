/****************
 Globals
****************/
const URL_PAGES = "https://jonlee.wiki/common/pages/";


/****************
 Utility Functions
****************/

function pwLinkify(innerHTML) {
    if(typeof(innerHTML) == "number") {
        return innerHTML;
    } else if(innerHTML.search(/\[\[.*\]\]/g) > -1) {
        const textActual = innerHTML.replace(/"/g, "").replace(/\[/g, "").replace(/]/g, "");
        const textUrl = textActual.replace(/\s/g, "+");
        const newHTML = `<a data-href="${textActual}" href="${URL_PAGES}${textUrl}" class="internal-link" target="_blank" rel="noopener">${textActual}</a>`;
        return newHTML;
    } else {
        return innerHTML;
    }
}

function pwTagify(tagName) {
    return `<a href="#${tagName}" class="tag" target="_blank" rel="noopener">#${tagName}</a>`;
}


/****************
 Layer Functions
****************/

function pwProcessFrontmatter() {
    
    /* Linkify already-rendered frontmatter HTML */
    const tokens = document.querySelectorAll('.token.string:not(.token-parsed)');
    for(let token of tokens) {
        token.classList.add("token-parsed");
        token.innerHTML = pwLinkify(token.innerHTML);
    }
    
    /* Generate pills using cache */
    const properties = app.site.cache.cache[app.currentFilepath].frontmatter;
    const pillsParsed = document.getElementsByClassName('pwa-properties-pill-container')[0];
    
    if(!pillsParsed) {
        let pillsHTML = "<div class='pwa-properties-pill-container'>";
        Object.keys(properties).forEach( (property) => {
            
            /* Core Properties */
            if(property === "classes") {
                if(Array.isArray(properties[property])) {
                    for(val of properties[property]) {
                        pillsHTML += `<span class="pwa-properties-pill pwa-properties-class"><b>${pwLinkify(val)}</b></span>`;
                    }
                }
            } else if(property === "states") {
                if(Array.isArray(properties[property])) {
                    for(val of properties[property]) {
                        pillsHTML += `<span class="pwa-properties-pill pwa-properties-state"><b>${pwLinkify(val)}</b></span>`;
                    }         
                }
            } else if(property === "tags") {
                if(Array.isArray(properties[property])) {
                    for(val of properties[property]) {
                        pillsHTML += `<span class="pwa-properties-pill pwa-properties-tag"><b>${pwTagify(val)}</b></span>`;
                    }
                }
            
            /* Internal Properties */
            } else if(
                       property == "cssclasses"
                    || property == "cover"
                    || property == "permalink"
                    || property == "title"
                    || property == "publish"
                    || property == "description"
                    || property == "internal"
                    || property == "group"
            )  {
                if(Array.isArray(properties[property])) {
                    for(val of properties[property]) {
                        pillsHTML += `<span class="pwa-properties-pill pwa-properties-internal"><b>${property}:</b> ${pwLinkify(val)}</span>`;
                    }  
                } else if(properties[property]) {
                    pillsHTML += `<span class="pwa-properties-pill pwa-properties-internal"><b>${property}:</b> ${pwLinkify(properties[property])}</span>`;
                }
            
            /* Other Properties */
            } else {
                if(Array.isArray(properties[property])) {
                    for(val of properties[property]) {
                        pillsHTML += `<span class="pwa-properties-pill pwa-properties-other"><b>${property}:</b> ${pwLinkify(val)}</span>`;
                    }  
                } else if(properties[property]) {
                    pillsHTML += `<span class="pwa-properties-pill pwa-properties-other"><b>${property}:</b> ${pwLinkify(properties[property])}</span>`;
                }
            }
            
        });
        pillsHTML += '</div>';
        document.querySelector(".frontmatter").insertAdjacentHTML("afterend", pillsHTML);
    }
 
}

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

function pwToggleGraphView() {
    
    const hasHideGraphClass = document.getElementsByClassName("pws-graph-hidden")[0];
    const graphOuterElement = document.getElementsByClassName("graph-view-outer")[0];
    
    if (hasHideGraphClass && graphOuterElement.style.display != 'none') { 
        graphOuterElement.style.display = 'none';
    } else if (!hasHideGraphClass && graphOuterElement.style.display != 'block') {
        graphOuterElement.style.display = 'block';
    }
    
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
}

function pwNavCallback(mutationRecords, observer) {
    for(let mutationRecord of mutationRecords) { // each mutation in event
        for(let addedNode of mutationRecord.addedNodes) { // each node in mutation
            if(addedNode.firstChild?.classList?.contains("frontmatter")) { // To catch internal page nav
                //console.log("<================== FIRED");
                pwNavFunctions(); // Immediate exectuion for internal page nav
                setTimeout(pwNavFunctions, 500); // Delayed execution for new page / refreshes
            }
        }
    }
}

let pageNavObserver = new MutationObserver(pwNavCallback);
pageNavObserver.observe(pageNavObserverNode, pageNavObserverConfig);

