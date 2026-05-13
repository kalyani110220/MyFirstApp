// Array to store all tasks
let tasks = [];

// Add a new task
function addTask() {
    // Get the input element
    let input = document.getElementById("taskInput");

    // Get the text typed by the user
    let task = input.value.trim();

    // Check if input is empty
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Add task to array
    tasks.push(task);

    // Print array in browser console
    console.log("Tasks array:", tasks);

    // Clear the input box
    input.value = "";

    // Show all tasks on the screen
    renderTasks();
}

// Display all tasks in the HTML
function renderTasks() {
    // Get the <ul> element
    let list = document.getElementById("taskList");

    // Clear old HTML
    list.innerHTML = "";

    // Loop through all tasks
    for (let i = 0; i < tasks.length; i++) {
        // Add one <li> for each task
        list.innerHTML += `<li>${tasks[i]}  
                <button onclick="deleteTask(${i})">❌</button>
</li>`;
    }
}
function deleteTask(index) {
    tasks.splice(index, 1);

        renderTasks();
}