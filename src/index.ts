const form = document.querySelector("form")!;
const todolist = document.getElementById("todolist")!;
const todoinput = document.getElementById("todoinput");
const input = document.querySelector("#todoinput")! as HTMLInputElement;

interface Todo {
  content: string;
  isDone: boolean;
}

const todos: Todo[] = [];

function submitForm (e : SubmitEvent){
  e.preventDefault();
  const newTodo : Todo = {
    content: input.value,
    isDone: false
  }
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  display (newTodo);
  input.value = '';
}

function display(todo: Todo) : void {
  const newLi = document.createElement("li");
  newLi.append(todo.content);

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox";
  newLi.append(checkbox);

  todolist.append(newLi);
}

form.addEventListener("submit", submitForm);
