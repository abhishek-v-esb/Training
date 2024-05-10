const express = require("express");
const app = express();
const port = 8006;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/time", (req, res) => {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
