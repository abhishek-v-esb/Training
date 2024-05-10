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
  const id = req.query.id;
  con.query(
    `select exam_master.sub_id,std_fname,std_lname,sub_name,sum(case when exam_master.type_id = 1 then exam_master.p_omarks else 0 end) as pre_pr,sum(case when exam_master.type_id = 1 then exam_master.t_omarks else 0 end) as pre_th,sum(case when exam_master.type_id = 2 then exam_master.p_omarks else 0 end) as ter_pr,sum(case when exam_master.type_id = 2 then exam_master.t_omarks else 0 end) as ter_th,sum(case when exam_master.type_id = 3 then exam_master.p_omarks else 0 end) as fin_pr,sum(case when exam_master.type_id = 3 then exam_master.t_omarks else 0 end) as fin_th from (exam_master inner join subject on exam_master.sub_id=subject.sub_id) inner join std_master on std_master.std_id=exam_master.std_id where exam_master.std_id =${id} group by sub_id;`,
    function (err, result) {
      const name = result[0].std_fname + " " + result[0].std_lname;

      if (err) throw err;
      res.render("pages/details", {
        result: result,
        name: name,
        id: id,
      });
    }
  );
});

module.exports = router;
