import calc from "./mode-one.js";
import * as modOne from "./mode-two.js";

// Challenge 01
let currentDate = new Date();
let myBirthdayDate = new Date("2002-09-24");

let myAge = currentDate - myBirthdayDate;

console.log(`${Math.round(myAge / 1000)} Seconds`);
console.log(`${Math.round(myAge / 1000 / 60)} Minutes`);
console.log(`${Math.round(myAge / 1000 / 60 / 60)} Hours`);
console.log(`${Math.round(myAge / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.round(myAge / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.round(myAge / 1000 / 60 / 60 / 24 / 30 / 12)} Years`);
// Needed Output

("1247939400 Seconds");
("20798990 Minutes");
("346650 Hours");
("14444 Days");
("481 Months");
("40 Years");

//=============================================================================
//Challenge 02

let time = new Date(0);
time.setFullYear(1980);
time.setHours(0, 0, 1);
console.log(time);

// Needed Output

("Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)");

//=============================================================================
//Challenge 03

const dateThree = new Date();
dateThree.setDate(0);

console.log(
  `Previous Month Is ${dateThree.toLocaleDateString("en", {
    month: "long",
  })} And Last Day Is ${dateThree.getDate()}`
);
// Needed Output

("Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)");

("Previous Month Is April And Last Day Is 30");

//===========================================================================
// Challenge 04

const myBirthday1 = new Date("2002-09-24");
const myBirthday2 = new Date("09-24-2002");
const myBirthday3 = new Date("09/24/2002");

console.log(myBirthday1);
console.log(myBirthday2);
console.log(myBirthday3);
// Needed Output

("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");
("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");
("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");

//===========================================================================
// Challenge 05

// const startTime = performance.now();
// for (let i = 1; i <= 99999; i++) {
//   console.log(i);
// }
// const endTime = performance.now();
// console.log(`The duration : ${Math.round(endTime - startTime) / 1000} S`);

//===========================================================================
// Challenge 06
// function* gen() {
//   let index = 14;
//   let num = 140;
//   let sum = 200;
//   while (true) {
//     yield index;
//     if (index == 14) {
//       index += num;
//     } else {
//       index += num + sum;
//       sum += 200;
//     }
//   }
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

//===========================================================================
// Challenge 07
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

const uniqueNumber = new Set(genNumbers());
const uniqueLetter = new Set(genLetters());

function* genAll() {
  yield* uniqueNumber;
  yield* uniqueLetter;
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

//===========================================================================
// Challenge 08
// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-two.js File
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names
