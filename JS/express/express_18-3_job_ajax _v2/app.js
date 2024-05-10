const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const insert = require("./database/insert");
const update = require("./database/update");
var mysql = require("mysql");
const display = require("./database/display");

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERS,
  password: process.env.PASSWORDS,
  database: process.env.DATABASE,
});

const port = process.env.PORT;

app.use(express.static("public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/states", (req, res) => {
  con.query("select * from states", (err, result) => {
    res.send(result);
  });
});

app.get("/cities", (req, res) => {
  const stateId = req.query.state;
  con.query(
    `select * from cities where state_id=${stateId}`,
    function (err, result) {
      res.send(result);
    }
  );
});

app.get("/insert", (req, res) => {
  let id;
  res.render("pages/index", {
    id: id,
  });
});

app.get("/updateform", (req, res) => {
  let id = req.query.id;
  // console.log(id);
  res.render("pages/index", {
    id: id,
  });
});

app.post("/insert", insert.insertData);

app.get("/update", update.existingData);

app.post("/update", update.updateData);

app.get("/display", display.diplayData);

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
