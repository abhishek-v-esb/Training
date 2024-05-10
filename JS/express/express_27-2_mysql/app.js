var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "student_27_2",
});
// console.log(con);
let arr = [];
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

for (let i = 1; i <= 29; i++) {
  for (let j = 1; j <= 200; j++) {
    arr.push(`(${j},` + `"2024-02-${i}",` + getRandomInt(0, 2) + ")");
  }
}

con.query(
  `INSERT INTO attendence(std_id,att_date,attendence) VALUES  ${arr.toString()} ;`
);
