const form = document.querySelector("form")!;
const todolist = document.getElementById("todolist")!;
const todoinput = document.getElementById("todoinput");
const input = document.querySelector("#todoinput")! as HTMLInputElement;

function submitForm (e : SubmitEvent){
  e.preventDefault();
  const newTodo = input.value;
  const newLi = document.createElement("li");
  newLi.append(newTodo);
  todolist.append(newLi);
  input.value = '';
}

form.addEventListener("submit", submitForm);
