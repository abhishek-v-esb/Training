const express = require("express");
const app = express();
// const dataRoute = require("./routes/alldata");
const pagedRoute = require("./routes/attendence");
// const resultRoute = require("./routes/result");
const detailsRoute = require("./routes/details");
const pagedresultRoute = require("./routes/results");
// var mysql = require("mysql");

app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 8030;

// app.use("/data", dataRoute);
app.use("/attendence", pagedRoute);
// app.use("/result", resultRoute);
app.use("/details", detailsRoute);
app.use("/results", pagedresultRoute);

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
