// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  cats.push("Ralph");
}

function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}
function appendCat() {
  let newCats = [...cats, "Broom"];
  return newCats;
}

console.log(appendCat());

function prependCat() {
  let newCats = [ "Arnold",...cats];
  return newCats;
}

function removeFirstCat () {
    let newCats = cats.slice(1);
    return newCats;
}
function removeLastCat () {
    let newCats = cats.slice(0,cats.length-1);
    return newCats;
}