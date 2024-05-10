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
  const records = 20;

  let count = Number(req.query.id) ? req.query.count : 1;
  const id = req.query.id ? req.query.id : 1;

  if (count == null || count < 1) {
    count = 1;
  }
  if (count > 10) {
    count = 10;
  }
  //   console.log(count, id);
  con.query(
    `select std_master.std_id,std_fname,std_lname,sum(case when exam_master.type_id = 1 then exam_master.p_omarks else 0 end) as pre_pr,sum(case when exam_master.type_id = 1 then exam_master.t_omarks else 0 end) as pre_th,sum(case when exam_master.type_id = 2 then exam_master.p_omarks else 0 end) as ter_pr,sum(case when exam_master.type_id = 2 then exam_master.t_omarks else 0 end) as ter_th,sum(case when exam_master.type_id = 3 then exam_master.p_omarks else 0 end) as fin_pr,sum(case when exam_master.type_id = 3 then exam_master.t_omarks else 0 end) as fin_th from std_master inner join exam_master on std_master.std_id=exam_master.std_id group by std_id  limit ${
      count * records - records
    },${records};`,
    function (err, result) {
      //   console.log(result);
      con.query("select count(*) from std_master", function (err, total) {
        if (err) throw err;
        if (count == null || count < 1) {
          count = 1;
        }
        if (count > total / records) {
          count = total / records;
        }
        const std_id = result[0].std_id;
        // console.log(result);
        if (err) throw err;

        res.render("pages/results", {
          result: result,
          count: count,
          std_id: std_id,
          id: id,
          total: Object.values(total[0])[0],
          records: records,
        });
      });
    }
  );
});

module.exports = router;
