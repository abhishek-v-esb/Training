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
  let field = req.query.field;
  console.log(field);
  if (count == null || count < 1) {
    count = 1;
  }
  if (count == 1) {
    con.query(
      "SELECT * FROM std_master order by " +
        field +
        " limit " +
        500 +
        " offset " +
        0,
      function (err, result) {
        if (err) throw err;

        res.render("pages/navigation_data", {
          result: result,
          count: count,
          field: field,
        });
      }
    );
  }
  if (count > 100) {
    count = 100;
  }

  con.query(
    "SELECT * FROM std_master order by " +
      field +
      " limit " +
      (count * records - 500) +
      "," +
      records +
      ";",
    function (err, result) {
      if (err) throw err;

      res.render("pages/navigation_data", {
        result: result,
        count: count,
        field: field,
      });
    }
  );
});

module.exports = router;
