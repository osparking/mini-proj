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
  const newTodo = input.value;
  const newLi = document.createElement("li");
  newLi.append(newTodo);

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox";
  newLi.append(checkbox);

  todolist.append(newLi);
  input.value = '';
}

form.addEventListener("submit", submitForm);
