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
  const records = 500;
  let count = Number(req.query.id);
  if (count == null || count < 1) {
    count = 1;
  }

  if (count > 100) {
    count = 100;
  }

  con.query(
    "SELECT * FROM std_master limit " +
      (count * records - 500) +
      "," +
      records +
      ";",
    function (err, result) {
      if (err) throw err;

      res.render("pages/navigation_data", {
        result: result,
        count: count,
      });
    }
  );
});

module.exports = router;
