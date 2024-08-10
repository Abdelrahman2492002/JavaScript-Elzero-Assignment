// Chellenge 01

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let name = mix
  .map((element) => {
    return typeof element === "string" ? element : "";
  })
  .reduce((acc, element) => {
    return `${acc}${element}`;
  });

console.log(name);

//==================================================================
// Chellenge 02

let myString = "EElllzzzzzzzeroo";
let nameFiltering = myString
  .split("")
  .filter((element, index, array) => {
    return array.indexOf(element) === index;
  })
  .reduce((acc, element) => {
    return `${acc}${element}`;
  });

console.log(nameFiltering);
// Elzero

//==================================================================
// Chellenge 03

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flattenArr = [];
myArray.forEach((element) => {
  if (Array.isArray(element)) {
    flattenArr = flattenArr.concat(element);
  } else {
    flattenArr.push(element);
  }
});

let resyltFlat = flattenArr.join("");

let reduceSolve = myArray
  .reduce((acc, element) => {
    return acc.concat(Array.isArray(element) ? element : [element]);
  }, [])
  .join("");

console.log(reduceSolve);

//==================================================================
// Chellenge 04

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings
  .filter((element) => typeof element !== "string")
  .map((element) => -element);
console.log(result);
// [-1, -10, 10, 20, -5, -3]

//==================================================================
// Chellenge 05

let nums = [2, 12, 11, 5, 10, 1, 99];

let theResult = nums.reduce((acc, element) => {
  return element % 2 === 0 ? acc * element : acc + element;
}, 1);

console.log(theResult);
// 500
