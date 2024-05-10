const fs = require("fs");

const data = " this is written using fs.";

fs.writeFile("abhi.txt", data, (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully\n");
  }
});
