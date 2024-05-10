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
  let count = Number(req.query.count) ? req.query.count : 1;
  const orderby = req.query.orderby ? req.query.orderby : "asc";
  // console.log(orderby);
  const field = req.query.field ? req.query.field : "std_master.std_id";

  const records = 20;

  //   console.log(count, id);
  con.query(
    `select * from exam_master inner join std_master on std_master.std_id = exam_master.std_id order by ${field} ${orderby} limit ${
      count * records - records
    },${records};`,

    function (err, result) {
      if (err) throw err;

      con.query("select count(*) from exam_master", function (err, totalCount) {
        if (err) throw err;
        const total = Object.values(totalCount[0])[0];
        if (count == null || count < 1) {
          count = 1;
        }

        if (count > Math.ceil(total / records)) {
          count = Math.ceil(total / records);
        }

        res.render("pages/results", {
          result: result,
          count: count,
          orderby: orderby,
          total: total,
          records: records,
          field: field,
        });
      });
    }
  );
});

module.exports = router;
