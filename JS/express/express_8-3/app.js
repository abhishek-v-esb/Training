const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/post", (req, res) => {
  res.render("pages/index");
});

app.get("/postdetails", (req, res) => {
  res.render("pages/details");
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
