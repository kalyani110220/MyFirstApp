🧠 How It Works (Simple Flow)
User types a task
        ↓
Clicks "Add Task"
        ↓
addTask()
        ↓
tasks.push(taskText)
        ↓
saveTasks()
        ↓
renderTasks()
        ↓
Task appears on screen
        ↓
Refresh page
        ↓
Tasks are loaded from localStorage
        ↓
renderTasks() runs automatically
        ↓
Tasks still appear

#Key Lines Explained
Load Saved Tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
localStorage.getItem("tasks") gets saved data.
JSON.parse(...) converts the saved string back into an array.
|| [] means use an empty array if no data exists.

Save Tasks
localStorage.setItem("tasks", JSON.stringify(tasks));
JSON.stringify(tasks) converts the array to a string.
setItem stores that string in the browser.

Render Tasks
renderTasks();

This displays all tasks currently in the tasks array.

✅ Testing Checklist
Type: Study JavaScript
Click Add Task
Verify it appears in the list
Add more tasks
Refresh the browser
Confirm all tasks are still visible

🐞 Debug Tip

Add this inside addTask() after tasks.push(taskText);

console.log(tasks);

Open the browser console (F12 → Console) to see the array.

🎯 Concepts You Practiced
Arrays
push()
DOM Manipulation
getElementById()
innerHTML
Functions
localStorage
JSON.parse() and JSON.stringify()


🚀 Next Upgrades

After this works, you can add:

❌ Delete Task
✔ Mark as Completed
✏️ Edit Task
🔍 Filter Tasks