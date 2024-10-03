const TASK_INPUT = document.getElementById("task-input");
const ADD_TASK_BTN = document.getElementById("add-task-btn");
const TASK_LIST_CONTAINER = document.getElementById("task-list");

// an array to store all our task
let allMyTasks = [];

// a function to add task to an array
const addNewTask = (event) => {
  event.preventDefault();
  const taskId = Math.floor(Math.random() * 99999);
  const task = TASK_INPUT.value;

  //   check if user did not provide a task
  if (task === "") {
    alert("Task field is empty");
    return;
  }

  //   add the new task to the allMyTaskArray
  allMyTasks.unshift({
    taskId: taskId,
    task: task,
  });

  displayAllTask();
  //   console.log(allMyTasks);
  //   Clear the TASK INPUT FIELD value so that the user can type a new text
  TASK_INPUT.value = "";
};
ADD_TASK_BTN.addEventListener("click", addNewTask);

function displayAllTask() {
  let taskElements = [];
  for (let i = 0; i < allMyTasks.length; i++) {
    taskElements.push(`<li class="p-2 flex justify-between">
          <span>${allMyTasks[i].task}</span>
          <button class="bg-red-400 text-white rouded-md text-sm p-1">
            Delete
          </button>
        </li>`);
  }
  TASK_LIST_CONTAINER.innerHTML = taskElements.join("");
}
