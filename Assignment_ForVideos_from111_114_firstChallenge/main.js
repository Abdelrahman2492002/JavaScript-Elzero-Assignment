// Chellenge 01
const pElement = document.querySelector("p");
const fontsList = document.querySelector(".font-list");
const colorList = document.querySelector(".colors-list");
const fontSizeList = document.querySelector(".font-sizes");

if (window.localStorage.getItem("font")) {
  document.body.style.fontFamily = window.localStorage.getItem("font");
  fontsList.value = window.localStorage.getItem("font");
}

fontsList.addEventListener("change", () => {
  let selectedValue = fontsList.value;
  window.localStorage.setItem("font", selectedValue);
  document.body.style.fontFamily = selectedValue;
});

if (window.localStorage.getItem("color")) {
  pElement.style.color = window.localStorage.getItem("color");
  colorList.value = window.localStorage.getItem("color");
}

colorList.addEventListener("change", () => {
  let selectedValue = colorList.value;
  window.localStorage.setItem("color", selectedValue);
  pElement.style.color = selectedValue;
});

if (window.localStorage.getItem("fontSize")) {
  pElement.style.fontSize = window.localStorage.getItem("fontSize");
  fontSizeList.value = window.localStorage.getItem("fontSize");
}

fontSizeList.addEventListener("change", () => {
  let selectedValue = fontSizeList.value;
  window.localStorage.setItem("fontSize", selectedValue);
  pElement.style.fontSize = selectedValue;
});

const applySettings = (element, key) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue) {
    element.style.setProperty(key, savedValue);
    element.value = savedValue;
  }
};

const setupEventListener = (element, key, styleProperty) => {
  element.addEventListener("change", () => {
    let selectedValue = element.value;
    window.localStorage.setItem(key, selectedValue);
    pElement.style.setProperty(styleProperty, selectedValue);
  });
};

applySettings(document.body, "font");
applySettings(pElement, "color");
applySettings(pElement, "fontSize");

setupEventListener(fontsList, "font", "font-family");
setupEventListener(colorList, "color", "color");
setupEventListener(fontSizeList, "fontSize", "font-size");
