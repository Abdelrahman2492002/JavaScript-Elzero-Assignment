// Challenge 01
function sayHello(theName, theGender) {
  theGender === "Male"
    ? console.log(`Hello Mr ${theName}`)
    : theGender === "Female"
    ? console.log(`Hello Miss ${theName}`)
    : console.log(`Hello ${theName}`);
  //   if (theGender === "Male") {
  //     console.log(`Hello Mr ${theName}`);
  //   } else if (theGender === "Female") {
  //     console.log(`Hello Miss ${theName}`);
  //   } else {
  //     console.log(`Hello ${theName}`);
  //   }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//====================================================
// Challenge 02

function calculate(firstNum, secondNum, operation) {
  if (!secondNum) {
    console.log(`Second Number Not Found`);
  } else if (operation === "add") {
    console.log(`${firstNum + secondNum}`);
  } else if (operation === "subtract") {
    console.log(`${firstNum - secondNum}`);
  } else if (operation === "multiply") {
    console.log(`${firstNum * secondNum}`);
  } else if (operation === undefined) {
    console.log(`${firstNum + secondNum}`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//====================================================
// Challenge 03

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Age With Years => ${theAge}`);
    console.log(`Age With Months => ${theAge * 12}`);
    console.log(`Age With Weeks => ${theAge * 12 * 4}`);
    console.log(`Age With Days => ${theAge * 12 * 4 * 7}`);
    console.log(`Age With Hours => ${theAge * 12 * 4 * 7 * 24}`);
    console.log(`Age With Minutes => ${theAge * 12 * 4 * 7 * 24 * 60}`);
    console.log(`Age With Seconds => ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//====================================================
// Challenge 04

function checkStatus(a, b, c) {
  let name;
  let age;
  let status;
  let abcArr = [a, b, c];
  for (let i = 0; i < abcArr.length; i++) {
    typeof abcArr[i] === "string"
      ? (name = abcArr[i])
      : typeof abcArr[i] === "number"
      ? (age = abcArr[i])
      : (status = abcArr[i]);
  }
  let avilability = status ? "Available For Hire" : "Not Available For Hire";
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${avilability}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//====================================================
// Challenge 05

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option>${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

//====================================================
// Challenge 06

function multiply(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    } else result *= parseInt(numbers[i]);
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
