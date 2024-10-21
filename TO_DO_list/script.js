// script.js

// Get DOM elements
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
  const taskText = input.value.trim(); // Get the input value and trim any white space

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  
  // Attach delete functionality
  deleteButton.addEventListener('click', function () {
    listItem.remove(); // Remove the task when delete is clicked
  });

  // Append the delete button to the list item
  listItem.appendChild(deleteButton);

  // Append the list item to the todo list
  todoList.appendChild(listItem);

  // Clear the input field after adding the task
  input.value = "";
}

// Add task when clicking the "Add Task" button
addButton.addEventListener('click', addTask);

// Optional: Add task when pressing the 'Enter' key
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
