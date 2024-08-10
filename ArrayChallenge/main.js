/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.length = 4;
my.reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]

console.log(
  `${my[zero].substring(--zero, --counter)}${my[counter].substring(counter)}`
); // "Elzero"

console.log(
  `${my[counter].slice(-counter, --zero)}${my[counter]
    .slice(zero)
    .toUpperCase()}`
); // "rO"
