const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ data: "Here is customer data" });
});

router.post("/", (req, res) => {
  res.send({ data: "Customer created" });
});

router.put("/", (req, res) => {
  res.send({ data: "Customer updated" });
});

router.delete("/", (req, res) => {
  res.send({ data: "Customer deleted" });
});

module.exports = router;
