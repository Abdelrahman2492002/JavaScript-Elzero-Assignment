/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

let st = "Elzero Web School";

if (`${st.slice(0, 3).length}${st.slice(0, 4).length}` === "34") {
  console.log("Good");
}

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

if (st.repeat(2).length.toString() === "34") {
  console.log("Good");
}

// W Position May Change
if (st.toLowerCase().charAt(st.toLowerCase().indexOf("w")) === "w") {
  console.log("Good");
}
if (st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
