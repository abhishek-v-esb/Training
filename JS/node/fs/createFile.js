var fs = require("fs");

fs.appendFile("intro.txt", "Hello, I am Abhishek!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
