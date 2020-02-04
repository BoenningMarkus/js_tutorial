
let states = ["Niedersachsen", "Hamburg", "Nordrhein Westfalen", "Mecklenburg Vorpommern"];

// return a URL-friendly Version of a String
// example: "Nordrhein Westfale" -> "nordrhein-westfalen"

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// urls: imperative Version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
    urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

//urls: functional Version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//singles: Imperative Version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length===1) {
            singles.push(element);
    }
    });
    return singles;
}
console.log(imperativeSingles(states));

//singles: Functional  Version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states)); 
