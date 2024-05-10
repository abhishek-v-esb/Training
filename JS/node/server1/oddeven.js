function main() {
  const readline = require("readline-sync");

  var num = [];

  const arr_length = readline.question("length of array:");

  for (let index = 0; index < arr_length; index++) {
    const number = readline.question("enter number:");
    num.push(number);
  }
  oddeven(num);
}

function oddeven(string) {
  const num = string.split(",");

  var even = [];
  var odd = [];
  num.forEach((element) => {
    if (parseInt(element) % 2 == 0) {
      even.push(element);
    } else {
      odd.push(element);
    }
  });
  const op = "even: " + even.toString() + "\nodd: " + odd.toString();
  return op;
}

module.exports = { oddeven };
