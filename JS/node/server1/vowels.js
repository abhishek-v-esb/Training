function main() {
  const readline = require("readline-sync");
  const ip_string = readline.question("enter the string:");

  console.log("string: " + ip_string);
  operation(ip_string);
}

function operation(ip_string) {
  var vowels = [];
  var consonants = [];

  for (let i = 0; i < ip_string.length; i++) {
    let char = ip_string.charAt(i);
    //   console.log(char.charCodeAt(0));
    if (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) |
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    ) {
      if (
        (char === "a") |
        (char === "i") |
        (char === "o") |
        (char === "e") |
        (char === "u")
      ) {
        vowels.push(char);
      } else {
        consonants.push(char);
      }
    } else {
      console.error(`${char} is not an alphabet`);
    }
  }

  const op =
    "vowels:" + vowels.toString() + "\n consonants: " + consonants.toString();
  return op.toString();
}

module.exports = { operation };
