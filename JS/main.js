function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.className =
      "list-group-item d-flex justify-content-between align-items-center";

    // Task Text
    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    taskSpan.onclick = function () {
      taskSpan.classList.toggle("completed");
    };

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.onclick = function () {
      taskList.removeChild(taskItem);
    };

    // Append Elements
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear Input
    taskInput.value = "";
  }
}
