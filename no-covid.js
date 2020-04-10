// Filters out elements that include COVID-19 related keywords

function filter(node) {
    var content = node.innerHTML;
    var count = 0;

    if (content) {
        // make lower case so content can be compared easily
        content = content.toLowerCase();

        // check for covid-19 keywords and remove element content if found
        if (content.includes('covid') || content.includes('coronavirus')) {
            count++;  // keep count of how many elements are filtered
            node.innerHTML = "";
        }
    }
    return count;
}

// go through the nodes in reverse DFS order
// this way, for any node, all its children are filtered before it is
// so we remove the minimum amount of content
function filterAll(node) {
    var count = 0;
    if (node && node.hasChildNodes()) {
        for (let i = 0; i < node.childNodes.length; i++) {
            count = filterAll(node.childNodes[i]);
        }
    }
    count += filter(node, count);
    return count;
}


var total = filterAll(document.body);

// log how many elements were filtered
console.log(total.toString() + " COVID-related elements filtered out.")
