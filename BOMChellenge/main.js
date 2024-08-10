const inputElement = document.querySelector(".input");
const addTaskButton = document.querySelector(".add");
const tasksList = document.querySelector(".tasks");

const getDeleteIcons = () => {
  const deletIcons = document.querySelectorAll(".delete-icon");
  deletIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      removeTask(index);
    });
  });
};

const removeTask = (index) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  getData();
};

const getData = () => {
  tasksList.innerHTML = "";
  let tasks = JSON.parse(window.localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach((task) => {
      tasksList.insertAdjacentHTML("beforeend", task);
    });
  }
  getDeleteIcons();
};

const addTask = () => {
  let inputValue = inputElement.value;
  let task = `<div class="task">
    <p class="task-text">${inputValue}</p>
    <span class="delete-icon">Delete</span>
   </div>`;
  if (inputValue !== "") {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    getData();
  }
  inputElement.value = "";
};

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

getData();
