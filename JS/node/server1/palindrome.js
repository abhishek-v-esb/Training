function main() {
  const readline = require("readline-sync");

  const string = readline.question("enter the string:");
  checkpalindrome(string);
}

function checkpalindrome(str) {
  var checker = true;

  for (let i = 0; i < str.length / 2; i++) {
    if (!(str.charAt(i) === str.charAt(str.length - i - 1))) {
      checker = false;
    }
  }

  if (checker === true) {
    return "string is palindrome";
  } else {
    return "string is not palindrome";
  }
}

module.exports = { checkpalindrome };
