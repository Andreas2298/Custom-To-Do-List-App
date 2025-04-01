const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  li.textContent = taskText;

  const deleteBtn = document.getElementById("button");

  deleteBtn.textContent = "X";

  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

function saveTheTasks() {
  const tasks = [];

  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push(li.textContent.replace("X", "").trim());
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTheTasks() {
  const tasksSaved = JSON.parse(localStorage.getItem(tasks)) || [];
  tasksSaved.forEach((task) => {
    const li = document.createElement("li");

    li.textContent = task;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";

    deleteBtn.onclick = () => {
      li.remove();
      saveTheTasks();
    };

    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click here", () => {
  addTask();
  saveTheTasks();
});

window.addEventListener("the tasks are loading", loadTheTasks);
