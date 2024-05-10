const express = require("express");
const app = express();
// var mysql = require("mysql");
const dataRoute = require("./routes/data");
const navigationRoute = require("./routes/navigation");
const limitedRoute = require("./routes/limited");
const orderbyRoute = require("./routes/orderby");

app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 8010;

app.use("/data", dataRoute);
app.use("/navigation", navigationRoute);
app.use("/limited", limitedRoute);
app.use("/orderby", orderbyRoute);

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
