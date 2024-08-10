//Challenge 1
// Replace ? With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

//Challenge 2

let num = 3;
let trueValue = true;
let falseValue = false;

// Solution One
console.log(num * ++trueValue); // 6

// Solution Two
console.log(++num + trueValue); // 6

// Soultion Three
console.log(++num + ++falseValue); // 6

// Soultion Four
console.log((++num * trueValue) / ++falseValue); // 6

// Solution Five
console.log(trueValue / falseValue + --num); // 6

// Solution Six
console.log(++num + trueValue - falseValue); // 6

// challenge 3

let number = "10";

// Solution One
console.log(+number + +number); // 20

// Solution Two
console.log(+number + --number + --number - --number); // 20

// Solution Three
console.log(--number * --number - number - number); // 20

// Solution Four
console.log(+number * number - number); // 20

//Challenge 4
let points = 10;

console.log(points + points + points - --points - --points); // 13

console.log(points); // 8;
