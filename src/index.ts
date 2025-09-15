function calculateSalary(hoursTaught: number) {
  return hoursTaught * 50000;
}

console.log(`월급 : ${calculateSalary(20 * 8).toLocaleString()}`);

const myDoc: Document = document;
console.log(document.URL);
const button = document.getElementById('btn');
console.log(button);

let modified = "hello".replaceAll("l", "L");
console.log(modified);