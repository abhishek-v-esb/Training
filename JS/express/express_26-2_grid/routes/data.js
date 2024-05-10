const express = require("express");
const router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "student_db_1",
});

router.get("/", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM std_master", function (err, result) {
      if (err) throw err;

      res.render("pages/data", {
        result: result,
      });
    });
  });
});
module.exports = router;
