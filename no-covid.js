// Filters out elements that include COVID-19 related keywords

var stack = [];
var order = [];
var content;
var current;
var count = 0;

// visit all nodes in order of DFS
// record the order they are visited in the order list
console.log("here");
stack.push(document.body);
while (stack.length !== 0) {
    current = stack.pop();

    order.push(current);

    if (current && current.hasChildNodes()) {
        for (let i = 0; i < current.childNodes.length; i++) {
            stack.push(current.childNodes[i]);
        }
    }
}

// go through the nodes in reverse DFS order
// this way, for any node, all its children are filtered before it is
// so we remove the minimum amount of content
for (i = order.length - 1; i >= 0; i--) {

    content = order[i].innerHTML

    if (content) {
        // make lower case so content can be compared easily
        content = content.toLowerCase();

        // check for covid-19 keywords and remove element content if found
        if (content.includes('covid') || content.includes('coronavirus')) {
            count++;  // keep count of how many elements are filtered
            order[i].innerHTML = "";
        }
    }
}

// log how many elements were filtered
console.log(count.toString() + " COVID-related elements filtered out.")
