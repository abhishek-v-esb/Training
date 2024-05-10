const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const insert = require("./database/insert");
const update = require("./database/update");

const port = process.env.PORT;

app.use(express.static("public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/input", insert.options);

app.get("/", insert.form);

app.post("/", insert.insertData);

app.get("/update", update.existingData);

app.post("/update", update.updateData);

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
