const form = document.querySelector("form")!;
const todolist = document.getElementById("todolist")!;
const todoinput = document.getElementById("todoinput");
const input = document.querySelector("#todoinput")! as HTMLInputElement;

interface Todo {
  content: string;
  isDone: boolean;
}

const todos: Todo[] = getTodosFromLocalStorage();

todos.forEach(display);

function getTodosFromLocalStorage(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) {
    return [];
  } else {
    return JSON.parse(todosJSON) as Todo[];
  }
}

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
  checkbox.addEventListener("change", () => {
    todo.isDone = checkbox.checked;
  });
  newLi.append(checkbox);

  todolist.append(newLi);
}

form.addEventListener("submit", submitForm);
