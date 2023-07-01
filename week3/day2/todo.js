const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';

function paintToDo(text) {
    console.log(text);
    const ul = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value="";
}

function loadToDos () {
    const todos = localStorage.getItem(TODOS_LS);
    if(todos !== null) {

    }
}

function init() {
    loadToDos() ;
    todoForm.addEventListener("submit", handleSubmit)
}