// All supported domains with matching extension styles URLs
var STYLES = [
    {"acdc.epita.fr":          getSrcUrl('src/acdc.css')},
    {"cri.epita.fr":           getSrcUrl('src/cri.css')},
    {"www.debug-pro.com":      getSrcUrl('src/debugpro.css')},
    {"ionisx.com":             getSrcUrl('src/ionisx.css')},
    {"helvetius.net/pegasus/": getSrcUrl('src/pegasus.css')}
];

/**
 * Convert a local url to browser url
 * @param path the file to load
 * @returns {*} the new url
 */
function getSrcUrl(path) {
    return browser.runtime.getURL(path);
}

/**
 * Add a style to the page
 * @param styleLink the link of the css
 */
function addStyle(styleLink) {
    var style = document.createElement('link');
    style.rel = "stylesheet"
    style.type = "text/css"
    style.href = styleLink;
    document.head.appendChild(style);
}

// Select which css should be used and adding it
STYLES.filter(obj => document.location.host.toString().indexOf(Object.keys(obj)[0].toString()) !== -1)
      .forEach(obj => addStyle(obj[Object.keys(obj)[0]]))
