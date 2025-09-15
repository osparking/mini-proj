const form = document.querySelector("form")!;

function submitForm (e : SubmitEvent){
  e.preventDefault();
  console.log("제출됨");
}

form.addEventListener("submit", submitForm);
