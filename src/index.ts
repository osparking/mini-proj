function calculateSalary(hoursTaught: number) {
  return hoursTaught * 50000;
}

console.log(`월급 : ${calculateSalary(20 * 8).toLocaleString()}`);

const myDoc: Document = document;
console.log(document.URL);

let content: unknown = "나는 보통비누를 5 개 구매하였다.";
const contentLength: number = (content as string).length;

const button = document.getElementById("btn")!;
button.addEventListener("click", () => {
  alert(todoInput.value);
  todoInput.value = "";
});

let todoInput: HTMLInputElement = document.getElementById(
  "todoinput"
)! as HTMLInputElement;
