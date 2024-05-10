function main() {
  const readline = require("readline-sync");

  var str_array = [];

  const str = readline.question("num of str:");

  for (let index = 0; index < str; index++) {
    const str = readline.question("enter str:");
    str_array.push(str);
  }
  vowelcntmax(str_array);
}

// const str_array = ["namaste", "india", "tour", "away"];

function vowelcntmax(str) {
  const str_array = str.split(",");

  let op = "";

  let string = " ";

  str_array.forEach((element) => {
    if (element.length > string.length) {
      string = element;
    }
  });

  console.log(string);
  var vowels = [];
  var consonants = [];
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
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
      console.error("not alphabet");
      vowels.push(0);
      consonants.push(0);
    }
  }
  op =
    op +
    `\nstring:${string}` +
    "\nvowels: " +
    vowels.toString() +
    "\nconsonants: " +
    consonants.toString();
  return op;
}

module.exports = { vowelcntmax };
