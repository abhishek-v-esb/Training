function main() {
  const readline = require("readline-sync");

  var strings = [];

  const str = readline.question("num of str:");

  for (let index = 0; index < str; index++) {
    const str = readline.question("enter str:");
    // strings.push(str);
    countvowel(str);
  }
}

// const strings = ["hello", "world", "@", "here"];

function countvowel(str) {
  const arr = str.split(",");
  var op = "";
  console.log(arr);
  arr.forEach((element) => {
    var vowels = [];
    var consonants = [];
    for (let i = 0; i < element.length; i++) {
      let char = element.charAt(i);
      // console.log(char.charCodeAt(0));
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
      `\nstring:${element}` +
      "\nvowels: " +
      vowels.toString() +
      "\nconsonants: " +
      consonants.toString();

    // console.log;
    // console.log("vowels: " + vowels);
    // console.log("consonants: " + consonants);
  });
  return op.toString();
}

module.exports = { countvowel };
