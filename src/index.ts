function calculateSalary(hoursTaught: number) {
  return hoursTaught * 50000;
}

console.log(`월급 : ${calculateSalary(20 * 8).toLocaleString()}`);