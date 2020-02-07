
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

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n){
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

//sum: functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n;0});
}
console.log(functionalSum(numbers));

//lenght: imperative Solution
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element){
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

//length: functional Solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
                            lengths [element] = element.length;
                            return lengths;
                        }, {});
}
console.log(functionalLengths(states));
