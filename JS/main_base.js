function addTask() {
    const taskInput = document.getElementById('new-task')
    const taskText = taskInput.value.trim()

    if(taskText){
        const taskList = document.getElementById("task-list")
        const taskItem = document.createElement("li")
        taskItem.innerText = taskText
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete"
        deleteBtn.onclick = function(){
            taskList.removeChild(taskItem)
        }

        taskItem.appendChild(deleteBtn)
        taskList.appendChild(taskItem)
        
        taskInput.value = ""
    }
}
