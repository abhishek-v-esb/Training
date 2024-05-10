const express = require("express");
const app = express();

const pagedresultRoute = require("./routes/results");

app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 8000;

app.use("/results", pagedresultRoute);

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
