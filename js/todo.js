const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = []; // array

function saveTodos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
	const li = event.target.parentElement; //save parent to distinguish
	li.remove();
	todos = todos.filter((item) => item.id !== parseInt(li.id));
	saveTodos();
}

function paintTodo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;

	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);

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
	todos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
	const parsedTodos = JSON.parse(savedTodos); //string->array
	todos = parsedTodos;
	parsedTodos.forEach(paintTodo);
}
