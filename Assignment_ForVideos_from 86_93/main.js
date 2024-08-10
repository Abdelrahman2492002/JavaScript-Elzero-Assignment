// Chellenge 01
/*
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementById("elzero"));
console.log(document.getElementsByTagName("div")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector("[name = js]"));
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("[name = js]")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.firstElementChild);


//=================================================================
// Chellenge 02

let images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  images[i].alt = "Elzero Logo";
}

//=================================================================
// Chellenge 03

let dollarInput = document.querySelector("[name=dollar]");

let resultElement = document.querySelector(".result");

dollarInput.addEventListener("input", () => {
  if (dollarInput.value && !isNaN(dollarInput.value)) {
    let egyptionValue = (dollarInput.value * 15.6).toFixed(2);
    resultElement.innerHTML = `{${dollarInput.value}} USD Dollar = ${egyptionValue} Egyptian Pound `;
  } else {
    resultElement.textContent = "Please enter a valid dollar amount.";
  }
});
*/
// //=================================================================
// Chellenge 04

let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");

divOne.title = divTwo.title;
divTwo.title = divTwo.className;

let divOneText = divOne.textContent;
let divTwoText = divTwo.textContent;

divOne.textContent = divTwoText;
divTwo.textContent = `${divOneText} ${divOne.attributes.length}`;

//=================================================================
// Chellenge 05

// let imgElements = document.querySelectorAll("img");

// for (let i = 0; i < imgElements.length; i++) {
//   if (imgElements[i].hasAttribute("alt")) {
//     imgElements[i].alt = "Old";
//   } else {
//     imgElements[i].alt = "Elzero New";
//   }
// }

//=================================================================
// Chellenge 06

// let form = document.querySelector("form");
// let inputElements = document.querySelector("input[name = elements]");
// let inputText = document.querySelector("input[name = texts]");
// let selectElement = document.querySelector("select");
// let submitButton = document.querySelector("input[name = create]");
// let resultsElement = document.querySelector(".results");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let elementsNumber = inputElements.value;
//   let textValue = inputText.value;
//   let selectedElement = selectElement.value;

//   while (resultsElement.firstChild) {
//     resultsElement.removeChild(resultsElement.firstChild);
//   }
//   for (let i = 1; i <= elementsNumber; i++) {
//     let element;
//     if (selectedElement === "Div") {
//       element = document.createElement("div");
//     } else {
//       element = document.createElement("section");
//     }
//     element.className = "box";
//     element.setAttribute("id", `id=${i}`);
//     element.setAttribute("title", "Element");
//     element.textContent = textValue;
//     resultsElement.appendChild(element);
//   }
// });
