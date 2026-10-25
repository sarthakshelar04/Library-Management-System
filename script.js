
/* Student Task Manager */

// Get HTML elements
const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const studentInput = document.getElementById("studentInput");

const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");

const pendingTasks = document.getElementById("pendingTasks");


// Load saved tasks from browser
let tasks = [];

try {
    tasks = JSON.parse(
        localStorage.getItem("studentTasks")
    ) || [];
} catch (error) {
    tasks = [];
}


// Save tasks in browser
function saveTasks() {

    localStorage.setItem(
        "studentTasks",
        JSON.stringify(tasks)
    );

}


// Update task statistics
function updateStatistics() {

    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = total - completed;

    totalTasks.textContent = total;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;

}


// Display tasks
function displayTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML =
            '<p class="empty-message">No tasks available. Add a new task!</p>';

        updateStatistics();

        return;
    }

    tasks.forEach(function(task) {

        const taskCard = document.createElement("div");

        taskCard.className = "task-card";

        if (task.completed) {
            taskCard.classList.add("completed");
        }

        // Task information
        const taskInfo = document.createElement("div");

        taskInfo.className = "task-info";

        const taskTitle = document.createElement("h3");

        taskTitle.textContent = task.name;

        const studentName = document.createElement("p");

        studentName.textContent =
            "Student: " + task.student;

        taskInfo.appendChild(taskTitle);

        taskInfo.appendChild(studentName);


        // Task action buttons
        const taskActions = document.createElement("div");

        taskActions.className = "task-actions";

        const completeButton =
            document.createElement("button");

        completeButton.className = "complete-btn";

        completeButton.textContent =
            task.completed ? "Undo" : "Complete";

        completeButton.addEventListener("click", function() {

            toggleTask(task.id);

        });


        const deleteButton =
            document.createElement("button");

        deleteButton.className = "delete-btn";

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {

            deleteTask(task.id);

        });


        // Add buttons to task
        taskActions.appendChild(completeButton);

        taskActions.appendChild(deleteButton);


        // Add information and buttons
        taskCard.appendChild(taskInfo);

        taskCard.appendChild(taskActions);


        // Add task to website
        taskList.appendChild(taskCard);

    });

    updateStatistics();

}


// Add new task
taskForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const taskName = taskInput.value.trim();

    const studentName = studentInput.value.trim();

    // Check empty inputs
    if (taskName === "" || studentName === "") {

        alert("Please enter both task and student name.");

        return;

    }


    // Create task object
    const newTask = {

        id: Date.now(),

        name: taskName,

        student: studentName,

        completed: false

    };


    // Add task
    tasks.push(newTask);


    // Save and display
    saveTasks();

    displayTasks();


    // Clear input fields
    taskInput.value = "";

    studentInput.value = "";

});


// Mark task completed or pending
function toggleTask(id) {

    tasks = tasks.map(function(task) {

        if (task.id === id) {

            return {

                ...task,

                completed: !task.completed

            };

        }

        return task;

    });

    saveTasks();

    displayTasks();

}


// Delete task
function deleteTask(id) {

    tasks = tasks.filter(function(task) {

        return task.id !== id;

    });

    saveTasks();

    displayTasks();

}


// Display saved tasks when website opens
displayTasks();
