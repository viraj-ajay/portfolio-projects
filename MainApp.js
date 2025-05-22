const taskForm = document.getElementByID ("task-form");
const taskList = document.getElementById ("task-list");

let taskIndex = 1;

taskForm.addEventListener("submit", function(event) 
{
    event.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText != "")
    {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-iten");
        taskItem.textContent = `${taskIndex}- ${taskText}`;

        taskItem.addEventListener("click", function() {
            console.log("completed");
            this.classList.toggle("completed");
        })

        taskList.appendChild(taskItem);

        taskIndex++;

        taskInput.value = "";
    }
});