const express = require("express");
const router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "student_27_2",
});

router.get("/", function (req, res) {
  const year = req.query.year ? req.query.year : 23;
  const month = req.query.month ? req.query.month : 12;
  const days = req.query.days ? req.query.days : 31;
  let count = Number(req.query.id) ? req.query.id : 1;
  const records = 20;

  if (count == null || count < 1) {
    count = 1;
  }
  if (count > 10) {
    count = 10;
  }

  // console.log(count);
  con.query(
    `SELECT  std_master.std_id,std_fname,std_lname,count(att_date) as count  FROM attendence inner join std_master on std_master.std_id=attendence.std_id where attendence=1 and att_date between "20${year}-${month}-01" and "20${year}-${month}-${days}"  group by attendence.std_id order by attendence.std_id limit ${
      count * records - records
    },${records};  `,
    function (err, result) {
      if (err) throw err;

      res.render("pages/paged", {
        result: result,
        count: count,
        year: year,
        month: month,
        days: days,
      });
    }
  );
});

module.exports = router;
