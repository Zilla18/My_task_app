const TASK_INPUT = document.getElementById("task-input");
const ADD_TASK_BTN = document.getElementById("add-task-btn");

// an array to store all our task
let allMyTask = [];

// a function to add task to an array
const addNewTask = (event) => {
  event.preventDefault();
  const taskId = Math.floor(Math.random() * 9999);
  console.log(taskId);
};

ADD_TASK_BTN.addEventListener("click", addNewTask);
