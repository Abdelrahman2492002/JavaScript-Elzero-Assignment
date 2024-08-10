// Chellenge 01

function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    let name = "";
    let firstChar = zName[0].toUpperCase();
    for (let i = 0; i < zName.length; i++) {
      if (zName[i] === " ") {
        name += ` ${zName[i + 1].toUpperCase()}.`;
        break;
      } else {
        if (i === 0) {
          name += firstChar;
        } else {
          name += zName[i];
        }
      }
    }
    return `${name}`;
  }
  function ageWithMessage() {
    let ageArr = zAge.split(" ");
    let age = 0;
    for (let i = 0; i < ageArr.length; i++) {
      if (!isNaN(parseInt(ageArr[i]))) {
        age = parseInt(ageArr[i]);
      }
    }
    return `Your Age is ${age}`;
  }
  function countryTwoLetters() {
    let countryLetter = zCountry.slice(0, 2).toUpperCase();
    return `You Live In ${countryLetter}`;
  }
  function fullDetails() {
    return `${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//=========================================================================
// Chellenge 02

// function itsMe() {
//     return `Iam A Normal Function`;
//   }

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
//   }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//========================================================================
// Chellenge 03

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Avaialble`;
//     };
//   };
// }

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//=======================================================================
// Chellenge 04

function specialMix(...data) {
  let sum = 0;
  let allString = true;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      sum += data[i];
      allString = false;
    } else if (typeof data[i] === "string") {
      if (!isNaN(parseInt(data[i]))) {
        sum += parseInt(data[i]);
        allString = false;
      }
    }
  }
  if (allString) {
    return `All Is Strings`;
  }
  return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
