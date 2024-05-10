var mysql = require("mysql");
const validation = require("../controller/back.validation");
const dotenv = require("dotenv");
dotenv.config();

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERS,
  password: process.env.PASSWORDS,
  database: process.env.DATABASE,
});

exports.options = (req, res) => {
  const select = req.query.select;
  const type = req.query.type;
  con.query(
    `select * from selects inner join options on selects.id = options.select_id where select_key = '${select}_key';`,
    function (err, result) {
      if (err) throw err;
      res.render("pages/select", {
        select: select,
        result: result,
        type: type,
      });
    }
  );
};

exports.form = (req, res) => {
  let id;
  // con.query(
  //   `SELECT selects.id,select_key, GROUP_CONCAT(DISTINCT option_name SEPARATOR ',') as data FROM selects inner join options on selects.id = options.select_id GROUP BY select_id;`,
  //   function (err, result) {
  //     if (err) throw err;
  //     res.render("pages/form", {
  //       result: result,
  //     });
  //   }
  // );

  res.render("pages/combined", {
    id: id,
  });
};

exports.insertData = (req, res) => {
  const pagebody = req.body;
  const id = pagebody.hiddenid;
  console.log(id);
  res.end();

  const valid = validation.validate(pagebody);

  runQueries();

  async function runQueries() {
    try {
      const id = await employee(pagebody);
      await education(id);
      await work_exp(id);
      await language(id);
      await technology(id);
      await ref_contact(id);
      await preference(id);
      await res.send("Form submitted");
    } catch (error) {
      res.send("Form Not Submitted");
    }
  }

  // employee();
  function employee(pagebody) {
    return new Promise((resolve) => {
      if (!pagebody.hiddenid) {
        con.query("delete from ");
      }
      let values = [];
      for (let i = 0; i < 13; i++) {
        values.push(Object.values(pagebody)[i]);
      }
      // console.log(values);
      const sql =
        "insert into employee (first_name,last_name,emp_designation,address1,address2,email,phone,city,state,zip_code,dob,gender,relationship_status) values (?,?,?,?,?,?,?,?,?,?,?,?,?);";

      con.query(sql, values, function (err, result) {
        if (err) {
          throw err;
        }
        // console.log(result.insertId);
        resolve(result.insertId);
      });
    });
  }
  // education();
  function education(id) {
    return new Promise((resolve) => {
      const len = pagebody.boardname.length;

      for (let i = 0; i < len; i++) {
        let grad;
        if (i == 0) {
          grad = "ssc";
        }
        if (i == 1) {
          grad = "hsc";
        }
        if (i == 2) {
          grad = "bachelor";
        }
        if (i == 3) {
          grad = "master";
        }

        con.query(
          `insert into education (employee_id ,education_type, board_name, passing_year, passing_percentage) values (${id},'${grad}','${pagebody.boardname[i]}','${pagebody.passingyear[i]}',${pagebody.passingpercentage[i]});`
        );
      }
      resolve(id);
    });
  }

  // work_exp();
  function work_exp(id) {
    return new Promise((resolve) => {
      const len = pagebody.company.length;

      for (let i = 0; i < len; i++) {
        con.query(
          `insert into work_exp (employee_id ,company_name, work_designation, work_from, work_to) values (${id},'${pagebody.company[i]}','${pagebody.companydesignation[i]}','${pagebody.companyfrom[i]}','${pagebody.companyto[i]}');`
        );
      }
      resolve(id);
    });
  }

  // language();
  function language(id) {
    return new Promise((resolve) => {
      const langs = ["hindi", "english", "gujarati"];

      langs.forEach((lang) => {
        let temp = `${lang}_efficiency`;
        let efficiency = "pagebody." + temp;
        efficiency = `${eval(efficiency)}`.split(",");
        // console.log(efficiency);
        let eff_str = "";
        efficiency.forEach((eff) => {
          eff_str = eff_str + eff + ",";
        });
        con.query(
          `insert into language (employee_id,language,fluency) values (${id},'${lang}','${eff_str.slice(
            0,
            -1
          )}');`,
          function (err) {
            if (err) {
              res.send("Form Not Submitted");
            }
          }
        );
      });
      resolve(id);
    });
  }

  // technology();
  function technology(id) {
    return new Promise((resolve) => {
      const name = ["php", "MySql", "oracle", "laravel"];

      name.forEach((element) => {
        const tech_name = `${element}[0]`;
        const expertise = `${element}[1]`;

        let newTech = "pagebody." + tech_name;
        newTech = `${eval(newTech)}`.split(",");
        let newExpertise = "pagebody." + expertise;
        newExpertise = `${eval(newExpertise)}`.split(",");
        con.query(
          `insert into technology (  employee_id, tech_name, tech_expertise) values (${id},'${newTech}','${newExpertise}');`,
          function (err) {
            if (err) {
              res.send("Form Not Submitted");
            }
          }
        );
      });
      resolve(id);
    });
  }

  // ref_contact();
  function ref_contact(id) {
    return new Promise((resolve) => {
      const len = pagebody.ref.length;

      for (let i = 0; i < len; i++) {
        con.query(
          `insert into reference_contact (employee_id ,ref_name, ref_contact, ref_relation) values (${id},'${pagebody.ref[i]}','${pagebody.refcontact[i]}','${pagebody.refrelation[i]}');`
        );
      }
      resolve(id);
    });
  }

  // preference();
  function preference(id) {
    return new Promise((resolve) => {
      con.query(
        `insert into preference(employee_id,location,curr_ctc,exp_ctc,department) values (${id},'${pagebody.prefLocation}','${pagebody.currCTC}','${pagebody.expCTC}','${pagebody.department}');`,
        function (err) {
          if (err) {
            res.send("Form Not Submitted");
          }
        }
      );
      resolve(id);
    });
  }
};
