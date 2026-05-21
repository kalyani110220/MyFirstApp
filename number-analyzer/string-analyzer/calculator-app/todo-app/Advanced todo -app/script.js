// =========================
// LOAD SAVED TASKS
// =========================
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Show tasks immediately
renderTasks();


// =========================
// ADD TASK
// =========================
function addTask() {

    // Get input element
    let input = document.getElementById("taskInput");

    // Get typed text
    let taskText = input.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create task object
    let task = {
        text: taskText,
        completed: false
    };

    // Add task to array
    tasks.push(task);

    // Clear input box
    input.value = "";

    // Save tasks
    saveTasks();

    // Update UI
    renderTasks();
}


// =========================
// RENDER TASKS
// =========================
function renderTasks() {

    // Get UL element
    let list = document.getElementById("taskList");

    // Clear old tasks
    list.innerHTML = "";

    // Loop through all tasks
    tasks.forEach((task, index) => {

        list.innerHTML += `
            <li class="${task.completed ? 'done' : ''}">

                <span onclick="toggleTask(${index})">
                    ${task.text}
                </span>

                <div class="task-buttons">

                    <button onclick="editTask(${index})">
                        ✏️
                    </button>

                    <button onclick="deleteTask(${index})">
                        ❌
                    </button>

                </div>

            </li>
        `;
    });
}


// =========================
// SAVE TASKS
// =========================
function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


// =========================
// DELETE TASK
// =========================
function deleteTask(index) {

    // Remove task from array
    tasks.splice(index, 1);

    // Save updated tasks
    saveTasks();

    // Re-render UI
    renderTasks();
}


// =========================
// TOGGLE COMPLETE
// =========================
function toggleTask(index) {

    // Reverse true/false
    tasks[index].completed =
        !tasks[index].completed;

    // Save updated tasks
    saveTasks();

    // Re-render UI
    renderTasks();
}


// =========================
// EDIT TASK
// =========================
function editTask(index) {

    // Ask for new text
    let newText = prompt(
        "Edit your task:",
        tasks[index].text
    );

    // Cancel pressed
    if (newText === null) {
        return;
    }

    // Remove extra spaces
    newText = newText.trim();

    // Prevent empty edit
    if (newText === "") {
        alert("Task cannot be empty");
        return;
    }

    // Update task text
    tasks[index].text = newText;

    // Save updated tasks
    saveTasks();

    // Re-render UI
    renderTasks();
}