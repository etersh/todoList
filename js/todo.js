const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = []; // array
let todoCount = 0; //added to limit todolist inputs

function saveTodos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
	const li = event.target.parentElement; //save parent to distinguish
	li.remove();
	todos = todos.filter((item) => item.id !== parseInt(li.id));
	saveTodos();
	todoCount--;
}

function paintTodo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = ` ${newTodo.text}`; //for one space

	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);
	
	li.innerText='\n'; //for line change
	li.appendChild(button);
	li.appendChild(span);
	todoList.appendChild(li);
}

function handleTodoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";

	//save in local storage by(like) array
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};

	if (todoCount >= 5) { 
		alert("You can only add up to 5 todo items :<"); //shows alert message
	} else {
		todos.push(newTodoObj); //if smaller than 6, process
		paintTodo(newTodoObj);
		saveTodos();
		todoCount++; //count todo items
	}

}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
	const parsedTodos = JSON.parse(savedTodos); //string->array
	todos = parsedTodos;
	parsedTodos.forEach(paintTodo);
}
