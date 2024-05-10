const express = require("express");
const bodyparser = require("body-parser");
const formsRoute = require("./routes/forms");
const dataRoute = require("./routes/data");
const detailsRoute = require("./routes/details");

const app = express();

// var path = require("path");

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "app_views"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const port = 8000;
const file = [];

app.use("/forms", formsRoute);
app.use("/data", dataRoute);
app.use("/details", detailsRoute);

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
