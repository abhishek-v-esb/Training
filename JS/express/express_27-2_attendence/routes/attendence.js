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
  const orderby = req.query.orderby ? req.query.orderby : "asc";
  const field = req.query.field ? req.query.field : "attendence.std_id";
  const records = 20;

  con.query(
    `SELECT  std_master.std_id,std_fname,std_lname,count(att_date) as count  FROM attendence inner join std_master on std_master.std_id=attendence.std_id where attendence=1 and att_date between "20${year}-${month}-01" and "20${year}-${month}-${days}"  group by attendence.std_id order by ${field} ${orderby} limit ${
      count * records - records
    },${records};  `,
    function (err, result) {
      con.query("select count(*) from std_master", function (err, total) {
        if (err) throw err;
        if (count == null || count < 1) {
          count = 1;
        }
        if (count > total / records) {
          count = total / records;
        }
        res.render("pages/attendence", {
          result: result,
          count: count,
          year: year,
          month: month,
          total: Object.values(total[0])[0],
          days: days,
          records: records,
          orderby: orderby,
          field: field,
        });
      });
    }
  );
});

module.exports = router;
