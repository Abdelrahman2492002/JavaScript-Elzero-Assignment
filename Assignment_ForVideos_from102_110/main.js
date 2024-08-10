// Chellenge 01

// const result = prompt("Print Number From ... To ....", 5 + " - " + 20);
// const resultArr = result.split("-").sort((a, b) => a - b);

// for (let i = +resultArr[0]; i <= +resultArr[1]; i++) {
//   const div = document.createElement("div");
//   div.textContent = i;
//   document.body.appendChild(div);
// }

//======================================================================================
// Chellenge 02

const popUpElement = document.querySelector(".pop-container");
const closePopUpElement = popUpElement.querySelector("button");

setTimeout(function () {
  popUpElement.style.display = "block";
}, 5000);

closePopUpElement.onclick = () => {
  popUpElement.remove();
};
/* 

//======================================================================================
// Chellenge 03

const divCounterElement = document.querySelector(".divCounter");
let counterValue = parseInt(divCounterElement.textContent);

let counterDown = setInterval(function () {
  counterValue--;
  divCounterElement.textContent = counterValue;
  if (counterValue === 0) {
    clearTimeout(counterDown);
  }
}, 1000);


//======================================================================================
// Chellenge 04

const divCounterElement = document.querySelector(".divCounter");
let counterValue = parseInt(divCounterElement.textContent);

let counterDown = setInterval(function () {
  counterValue--;
  divCounterElement.textContent = counterValue;
  if (counterValue === 0) {
    location.href = "https://elzero.org/";
  }
}, 1000);



//======================================================================================
// Chellenge 05
const divCounterElement = document.querySelector(".divCounter");
let counterValue = parseInt(divCounterElement.textContent);

let counterDown = setInterval(function () {
  counterValue--;
  divCounterElement.textContent = counterValue;
  if (counterValue === 5) {
   open("https://elzero.org/", "_blank", "width= 600 , height= 400");
  } else if (counterValue === 0) {
    clearInterval(counterDown);
  }
}, 1000);
*/
