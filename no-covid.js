// Filters out elements that include COVID-19 related keywords

// words to filter on
keywords = ['covid', 'coronavirus']

// return true if any of the keywords are in the text
function containsKeywords(text) {
    for (let i = 0; i < keywords.length; i++) {
        if (text.includes(keywords[i])) {
            return true;
        }
    }
    return false;
}

// if the node contains any coronavirus keywords, erase its content
function filter(node) {
    var content = node.innerHTML;
    var count = 0;

    if (content) {
        // make lower case so content can be compared easily
        content = content.toLowerCase();

        // check for covid-19 keywords and remove node content if found
        if (containsKeywords(content)) {
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
            count += filterAll(node.childNodes[i]);  // recurse on child nodes
        }
    }

    // only filter the node after all its children have been filtered
    count += filter(node, count); 
    return count;
}


var total = filterAll(document.body);

// log how many elements were filtered
console.log(total.toString() + " COVID-related elements filtered out.")
