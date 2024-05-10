const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.render("pages/index");
});
router.post("/", function (req, res) {
  const body = req.body;
  const id = 2;
  body.id = id;
  console.log(body);

  let usersjson = JSON.parse(fs.readFileSync("data.json"));
  usersjson.push(req.body);

  fs.writeFile("data.json", JSON.stringify(usersjson), function (err, result) {
    if (err) console.log("error", err);
  });

  res.redirect("/data");
});

module.exports = router;
