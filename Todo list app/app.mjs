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
