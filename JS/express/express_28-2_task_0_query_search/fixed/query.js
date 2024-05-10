var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "student_27_2",
});

exports.runQuery = (req, res) => {
  //   console.log(req.body.query);
  //   console.log(req.query.sql);
  let count = req.query.id ? req.query.id : 1;

  const records = 10;

  var queryStr = "";
  if (req.body.query) {
    queryStr = req.body.query;
  } else {
    queryStr = req.query.sql;
  }
  // console.log(sql);
  // console.log(queryStr);
  //   console.log(queryStr);
  if (queryStr) {
    con.query(
      queryStr + ` limit ${count * records - records},${records};`,
      function (err, result, fields) {
        // console.log(fields);
        let sql = queryStr.split(" ");

        con.query(`select count(*) from ${sql[3]}`, function (err, total) {
          if (err) throw err;
          if (count == null || count < 1) {
            count = 1;
          }
          if (count >= total / records) {
            count = total / records;
          }
          // console.log();
          if (result) {
            let cols = [];
            fields.forEach((element) => {
              cols.push(element.name);
            });

            res.render("pages/table", {
              count: count,
              cols: cols,
              result: result,
              total: Object.values(total[0])[0],
              queryStr: queryStr,
              records: records,
            });
          } else {
            res.send("enter correct query");
          }
        });
      }
    );
  } else {
    res.send("query empty");
  }
};
