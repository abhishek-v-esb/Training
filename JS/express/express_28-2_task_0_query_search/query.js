var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "student_27_2",
});

exports.runQuery = (req, res) => {
  let count = req.query.id ? req.query.id : 1;

  const records = 10;

  var queryStr = "";
  if (req.body.query) {
    queryStr = req.body.query;
  } else {
    queryStr = req.query.sql;
  }

  let field = req.query.field ? req.query.field : "std_master.std_id";
  // let orderby = req.query.orderby ? req.query.orderby : "asc";
  let orderby;

  if (req.query.orderby == "asc") {
    orderby = "desc";
  } else if (req.query.orderby == "desc" || req.query.orderby == null) {
    orderby = "asc";
  }

  if (queryStr) {
    con.query(
      queryStr +
        ` order by ${field} ${orderby} limit ${
          count * records - records
        },${records};`,
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
              field: field,
              orderby: orderby,
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
