const cats = ["Milo", "Otis", "Garfield",];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
return cats;
}
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
return cats;
}
function destructivelyRemoveLastCat(Ralph) {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(Bob) {
    cats.shift();
    return cats;
}
function appendCat(Broom) {
    appendCat = [...cats, Broom]
return appendCat;
}
function prependCat(Arnold) {
    prependCat = [Arnold, ...cats]
    return prependCat;
}
function removeLastCat() {
    removeLastCat = cats.slice(0,-1);
    return removeLastCat;
}
function removeFirstCat() {
    removeFirstCat = cats.slice(1);
    return removeFirstCat;
}