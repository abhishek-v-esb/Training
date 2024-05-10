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
  let count = Number(req.query.id) ? req.query.id : 1;
  if (count == null || count < 1) {
    count = 1;
  }
  if (count > 100) {
    count = 100;
  }
  res.render("pages/navigation", {
    count: count,
  });
});

module.exports = router;
