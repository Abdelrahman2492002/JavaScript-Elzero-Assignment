// Chellenge 03
/*
let mainDiv = document.querySelector(".our-element");
let pElement = document.querySelector("p").remove();

let startDiv = document.createElement("div");
startDiv.className = "start";
startDiv.setAttribute("title", "Start Element");
startDiv.dataset.value = "start";
startDiv.textContent = "Start";

let endDiv = document.createElement("div");
endDiv.className = "end";
endDiv.setAttribute("title", "End Element");
endDiv.dataset.value = "end";
endDiv.textContent = "End";
endDiv.textContent = "End";

mainDiv.insertAdjacentElement("beforebegin", startDiv);
mainDiv.insertAdjacentElement("afterend", endDiv);


//========================================================================
// Chellenge 04

let divElement = document.querySelector("div");
console.log(divElement.lastChild.textContent.trim());

//========================================================================
// Chellenge 05

let elements = document.body.children;

console.log(elements);
[...elements].forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(`This Is ${e.target.tagName}`);
  });
});
*/

//=============================================================================
// Chellenge 02 big

// const addClasses = document.querySelector(".classes-to-add");
// const removeClasses = document.querySelector(".classes-to-remove");
// const classesList = document.querySelector(".classes-list");
// const h5Element = document.querySelector("h5");
// const currentElement = document.querySelector(".current");
// const divElement = document.querySelector(".classes-list div:last-child");

// const updateClassList = () => {
//   const spanElements = divElement.querySelectorAll("span");
//   if (spanElements.length === 0) {
//     divElement.textContent = "No Classes To Show";
//   } else {
//     divElement.innerHTML = "";
//     spanElements.forEach((span) => divElement.appendChild(span));
//   }
// };

// updateClassList();

// addClasses.addEventListener("blur", () => {
//   let addClassValue = addClasses.value.toLowerCase();
//   if (addClassValue !== "") {
//     const spanElement = document.createElement("span");
//     spanElement.classList.add(addClassValue.replace(/ /g, "-"));
//     spanElement.textContent = addClassValue;
//     divElement.appendChild(spanElement);
//     addClasses.value = "";
//   }
//   updateClassList();
// });

// removeClasses.addEventListener("blur", () => {
//   let removeClassValue = removeClasses.value.toLowerCase();
//   if (removeClassValue !== "") {
//     const spanElements = divElement.querySelectorAll("span");
//     spanElements.forEach((span) => {
//       if (span.textContent === removeClassValue) {
//         span.remove();
//       }
//     });
//     removeClasses.value = "";
//   }
//   updateClassList();
// });

const addClassesElement = document.querySelector(".classes-to-add");
const removeClassesElement = document.querySelector(".classes-to-remove");
const classListsDiv = document.querySelector(".classes-list div");

const updateClassList = () => {
  const spanElements = document.querySelectorAll("span");
  if (spanElements.length === 0) {
    classListsDiv.textContent = "No Classes To Show";
  } else {
    classListsDiv.innerHTML = "";
    spanElements.forEach((span) => classListsDiv.appendChild(span));
  }
};

updateClassList();

const addClass = () => {
  const addClassesValue = addClassesElement.value.toLowerCase();
  if (addClassesValue !== "") {
    const spanElement = document.createElement("span");
    spanElement.className = addClassesValue;
    spanElement.textContent = addClassesValue;
    classListsDiv.appendChild(spanElement);
    addClassesElement.value = "";
  }
  updateClassList();
};

const removeClass = () => {
  const removeClassesValue = removeClassesElement.value.toLowerCase();
  const spanElements = document.querySelectorAll("span");
  for (let i = 0; i < spanElements.length; i++) {
    if (spanElements[i].textContent === removeClassesValue) {
      spanElements[i].remove();
      break;
    }
  }

  removeClassesElement.value = "";
  updateClassList();
};

addClassesElement.addEventListener("blur", addClass);
removeClassesElement.addEventListener("blur", removeClass);
