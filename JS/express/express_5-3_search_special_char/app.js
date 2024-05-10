const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const query = require("./query");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
const port = 8017;

app.get("/", query.runQuery);
app.post("/", query.runQuery);

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
