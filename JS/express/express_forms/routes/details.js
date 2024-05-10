const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:id", (req, res) => {
  const id = 3;
  let usersjson = JSON.parse(fs.readFileSync("data.json"));
  usersjson.forEach((element) => {
    if (element.id === id) {
      // Object.keys(element).filter(function (v) {
      //   if (element[v] == "on") {
      //     console.log();
      //   }
      // });
      const keys = getObjectKey(element, "on");

      function getObjectKey(obj, value) {
        return Object.keys(obj).filter((key) => obj[key] === value);
      }
      var hobbies = keys.toString();
      // console.log(hobbies);
      // console.log(hobbies);
      res.render("pages/details", {
        element,
        hobbies,
      });
    }
  });
});

module.exports = router;
