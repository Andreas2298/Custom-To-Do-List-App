const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask(taskText = "", completed = false) {
  const text = taskText || taskInput.value.trim();

  if (text === "") return;

  const li = document.createElement("li");

  if (completed) {
    li.classList.add("completed");
  }

  li.addEventListener("click", () => {
    if (!li.classList.contains("completed")) {
      li.classList.toggle("completed");
    } else {
      const newText = prompt(
        "Edit task:",
        li.querySelector("span").textContent.trim()
      );

      if (newText && newText !== li.querySelector("span").textContent.trim()) {
        li.querySelector("span").textContent = newText;
        saveTheTasks();
      }
    }
  });

  const taskTextNode = document.createElement("span");
  taskTextNode.textContent = text;
  li.appendChild(taskTextNode);

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    li.remove();
    saveTheTasks();
  });

  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";

  saveTheTasks();
}

function saveTheTasks() {
  const tasks = [...taskList.children].map((li) => ({
    text: li.querySelector("span").textContent.trim(),
    completed: li.classList.contains("completed"),
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTheTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task.text, task.completed));
}

addTaskBtn.addEventListener("click", () => addTask());
window.addEventListener("DOMContentLoaded", loadTheTasks);
