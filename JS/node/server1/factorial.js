function main() {
  const readline = require("readline-sync");

  const number = readline.question("enter number:");

  let result = factorial(number);
  console.log("The factorial of given number is :" + result);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

module.exports = { factorial };
