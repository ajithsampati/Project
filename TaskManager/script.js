// Get the task input and add button elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Initialize an empty task list
let tasks = [];

// Add an event listener to the add button
addBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task !== '') {
        // Add the task to the task list
        tasks.push({ text: task, completed: false });
        taskInput.value = '';
        renderTaskList();
    }
});

// Render the task list
function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.text;
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskElement.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTaskList();
        });
        taskList.appendChild(taskElement);
    });
}

// Add an event listener to the task list to remove tasks
taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const taskIndex = Array.prototype.indexOf.call(taskList.children, event.target);
        tasks.splice(taskIndex, 1);
        renderTaskList();
    }
});

// Initialize the task list
renderTaskList();