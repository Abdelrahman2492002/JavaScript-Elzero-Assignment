// Challenge 01
/*
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;
*/
//=================================================================================
// Challenge 02
/*
let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= 0; i--) {
  if (i < stop) {
    break;
  }
  if (i < start) {
    console.log(`0${i}`);
  } else {
    console.log(i);
  }
}
*/
/* Output
10;
09;
08;
07;
06;
05;
04;
03;
*/

//=================================================================================
// Challenge 03
/*
let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log(i);
  for (let j = breaker; j < end; j += breaker) {
    console.log(`-- ${j}`);
  }
}

//Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
//*/

//=================================================================================
// Challenge 04
/*
let index = 10;
let jump = 2;
for (;;) {
  if (index < jump + jump) break;
  console.log(index);
  index -= jump;
}

// // Output
// 10;
// 8;
// 6;
// 4;
*/
//=================================================================================
// Challenge 05
/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = letter.length;

for (let i = letter.length - 1; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) continue;
  console.log(`"${counter} => ${friends[i]}"`);
  counter++;
}
// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");
*/
//=================================================================================
// Challenge 06
/*
let start = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}

console.log(result);*/
// Output
// ("ELzERo")

//=================================================================================
// Challenge 07

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
  if (mix[i] !== start.toString().length && typeof mix[i] !== "string") {
    console.log(mix[i]);
  }
}

