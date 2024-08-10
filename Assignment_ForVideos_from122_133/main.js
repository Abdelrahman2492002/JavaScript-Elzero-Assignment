// Challenge 01

// let mySet = new Set([10]);
// mySet.add(20).add(mySet.size);
// console.log(mySet);
// console.log([...mySet][2]);

//=========================================================================
// Challenge 02

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(new Set(myFriends.sort()));
// Needed Output
(4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

//=========================================================================
// Challenge 03
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

const myMap = new Map(Object.entries(myInfo));
console.log(myInfo);
console.log(myMap.size);
console.log(myMap.has("role"));

//==========================================================================
//Challenge 04

let theNumber = 100020003000;
console.log(
  +[...new Set(theNumber.toString())].filter((n) => n !== "0").join("")
);
// Needed Output
123;

//==========================================================================
//Challenge 05

let theName = "Elzero";

// Needed Output
["E", "l", "z", "e", "r", "o"];

console.log(theName.split(""));
console.log([...theName]);
console.log([...new Set(theName)]);
console.log(Array.from(theName));
console.log(Object.assign([], theName));
console.log([].concat(...theName));

const arr = Array.prototype.reduce.call(
  theName,
  (acc, char) => {
    acc.push(char);
    return acc;
  },
  []
);
console.log(arr);

//==========================================================================
//Challenge 06

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// chars.sort();
// chars.copyWithin(0, 3, 6);
// // let solution = chars.copyWithin(3, 0);
// console.log(chars);
// ["A", "B", "C", "A", "B", "C", "D", "E"];

("====================================================");

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// chars.sort();
// chars.copyWithin(0, 4, 8);
// console.log(chars);
// // Needed Output
// ["A", "B", "C", "D", "A", "B", "C", "D", "E"];

("=======================================================");

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// chars.copyWithin(2, 0);
// console.log(chars);
// [("Z", "Y", "Z", "Y", "A", "D", "E")];

("=========================================================");

//==========================================================================
//Challenge 07

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(...numsTwo));
console.log(numsOne.push(...numsTwo));
[(1, 2, 3, 4, 5, 6)];

console.log(
  numsTwo.reduce((acc, num) => {
    acc.push(num);
    return acc;
  }, numsOne)
);

//==========================================================================
//Challenge 08

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n2));
210;
