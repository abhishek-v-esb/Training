const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const query = require("./query");
const home = require("./home");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
const port = 8009;

app.get("/", home.home);

app.get("/input", query.runQuery);
app.post("/input", query.runQuery);

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
