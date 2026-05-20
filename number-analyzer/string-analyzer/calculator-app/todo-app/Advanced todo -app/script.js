//1.Load task from local storage
//if nothing is stored yet,use an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//2. Show saved tasks immediately when the page Loads
renderTasks();

// =========================
// ADD TASK
// =========================
function addTask()
{
    // Get input element
    let input = document.getElementById("taskInput");

    //Get the text and remove extra spaces
    let taskText = input.value.trim();


    //Prevent empty tasks
    if (taskText === "")
    {
        alert("please enter a task.");
        return;
    }

    //Add task to the array
    tasks.push(taskText);
    //clear the input box
    input.value = "";
        // Save updated array to localStorage
    saveTasks();

    // Rebuild the UI so the new task appears
    renderTasks();

}
// =========================
// RENDER TASKS
// =========================
function renderTasks()
{
    //Get the UL element
    let list = document.getElementById("taskList");

    // Clear old HTML so we can rebuild it
    list.innerHTML = "";
    //loop through every task in the array
    tasks.forEach(function (task) {
        //create one list add it to the page
        list.innerHTML += `<li>${task}</li>`;
        
    });
}
// =========================
// SAVE TASKS
// =========================
function saveTasks() {
    // Convert array to JSON string and save it in browser storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}