var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "student_27_2",
});

exports.home = (req, res) => {
  con.query("show tables", function (err, tables) {
    const queryStr = "";
    const heading = "Tables in this database";

    res.render("pages/table", {
      queryStr: queryStr,
      tables: tables,
      heading: heading,
    });
  });
};
