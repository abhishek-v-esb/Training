const fs = require("fs");

const readData = fs.readFileSync("intro.txt", "utf8");
console.log(readData);
