let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let colorsList = document.getElementById("colors");

const applySettings = (element, key) => {
  let savedValue = window.sessionStorage.getItem(key);
  if (savedValue) {
    element.value = savedValue;
  }
};

const setupEventListener = (element, key) => {
  element.addEventListener("input", () => {
    let inputValue = element.value;
    window.sessionStorage.setItem(key, inputValue);
  });
};

const setupInput = (element, key) => {
  applySettings(element, key);
  setupEventListener(element, key);
};

colorsList.addEventListener("change", () => {
  let listValue = colorsList.value;
  window.sessionStorage.setItem("listValue", listValue);
});

setupInput(firstNameInput, "firstName");
setupInput(lastNameInput, "lastName");
setupInput(ageInput, "age");
applySettings(colorsList, "listValue");
