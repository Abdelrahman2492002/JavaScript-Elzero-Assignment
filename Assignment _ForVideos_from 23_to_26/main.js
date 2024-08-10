// Challenge 01
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10 ** 5); // 100000
console.log(Math.floor(100000.4)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.ceil(99999.4)); // 100000
console.log(1000 * 100); // 100000
console.log(1e6 - 9e5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(1e5); // 100000
console.log(1_000_000 / 10); // 100000
console.log(+"100000"); // 100000
console.log(Number((100000.4).toFixed())); // 100000
console.log(parseInt("100000")); // 100000
console.log(Number("1" + "0".repeat(5))); // 100000

// Challenge 02
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// Challenge 03
console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// Challenge 04
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

// Challenge 05
let num = 10;

console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2

// Challenge 06
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed()); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(flt | 0); // 10س
console.log(flt << 0); // 10

// Challenge 07
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
