const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoItemsList = document.querySelector(".todo-items");

// Create an array to store the todos
let todos = [];

// Add an event listener to the form to listen for submit events
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = "";
});

// Function to add a todo
function addTodo(item) {
    if (item !== "") {
        const todo = {
            id: Date.now(),
            name: item,
            completed: false,
        };
        todos.push(todo);
        renderTodos(todos);
        addToLocalStorage(todos);
    }
}

// Function to render the todos
function renderTodos(todos) {
    todoItemsList.innerHTML = "";
    todos.forEach(function (item) {
        const todoItem = document.createElement("li");
        const checkmark = document.createElement("span");
        checkmark.className = "checkmark";
        checkmark.dataset.id = item.id;
        if (item.completed) {
            checkmark.classList.add("checked");
            checkmark.innerHTML = '<i class="material-symbols-outlined">check</i>';
        }
        todoItem.appendChild(checkmark);
        const todoText = document.createTextNode(item.name);
        todoItem.appendChild(todoText);
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "material-symbols-outlined delete";
        deleteIcon.textContent = "delete";
        deleteIcon.onclick = function () {
            deleteTodo(item.id);
        };
        todoItem.appendChild(deleteIcon);
        todoItemsList.appendChild(todoItem);
    });
}

// Add an event listener to the checkmark element to toggle the completed status of a todo
todoItemsList.addEventListener("click", function (event) {
    if (event.target.classList.contains("checkmark")) {
        toggle(event.target.dataset.id);
    }
});

// Function to toggle the completed status of a todo
function toggle(id) {
    todos.forEach(function (item) {
        if (item.id == id) {
            item.completed = !item.completed;
            renderTodos(todos);
        }
    });
    addToLocalStorage(todos);
}

// Function to delete a todo
function deleteTodo(id) {
    todos = todos.filter(function (item) {
        return item.id != id;
    });
    addToLocalStorage(todos);
    renderTodos(todos);
}

// Function to add the todos to local storage
function addToLocalStorage(todos) {
    localStorage.setItem("mytodo", JSON.stringify(todos));
}

// Function to get the todos from local storage
function getFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem("mytodo"));
    if (data) {
        todos = data;
        renderTodos(todos);
    } else {
        todos = [];
    }
}

// Call the getFromLocalStorage function to load the todos from local storage
getFromLocalStorage();
