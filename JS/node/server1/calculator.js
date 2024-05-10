function main() {
  const readline = require("readline-sync");

  var number = [];
  input();

  function input() {
    for (let index = 0; index < 3; index++) {
      if (index > 1) {
        const operator = readline.question("enter operator(add,sun,mul,div):");
        number.push(operator);
      } else {
        const ip_number = readline.question(`enter number ${index + 1}:`);
        // if(isNaN(ip_number)==="true"){
        //   console.error("enter valid nume")
        // }
        number.push(ip_number);
      }
    }
    operation(number);
  }
}

function operation(ip_string) {
  const number = ip_string.split(",");
  switch (number[2]) {
    case "add":
      const add = parseInt(number[0]) + parseInt(number[1]);
      return `Addition of ${number[0]} and ${number[1]} is ${add}`;
    // break;
    case "sub":
      const sub = parseInt(number[0]) - parseInt(number[1]);
      return `Substraction of ${number[1]} from ${number[0]} is ${sub}`;
    // break;
    case "mul":
      const mul = parseInt(number[0]) * parseInt(number[1]);
      return `Multiplication of ${number[0]} and ${number[1]} is ${mul}`;
    // break;
    case "div":
      const div = parseInt(number[0]) / parseInt(number[1]);
      return `Division of ${number[1]} and ${number[0]} is ${div}`;
    // break;
  }
}

module.exports = { operation };
