// Challenge 01
// Solution One
/* let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1

console.log(myFriends.slice(num / num - true, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2

myFriends.splice(-num / num, num / num);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
*/

// Solution Two
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = 3;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//=============================================================================================

// Challenge 02

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

//=============================================================================================

// Challenge 03

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//=============================================================================================

// Challenge 04

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

//=============================================================================================

// Challenge 05

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle) != -1) {
  console.log("Found");
}
if (haystack.indexOf(needle)) {
  console.log("Found");
}
if (haystack[1] === needle) {
  console.log("Found");
}

//=============================================================================================

// Challenge 06

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().slice(-arr1.length).join("").toLowerCase();
allArrs = arr1
  .concat(arr2)
  .sort()
  .slice(arr2.indexOf("E") + arr2.indexOf("Y"))
  .join("")
  .toLowerCase();
console.log(allArrs); // adcefxy
