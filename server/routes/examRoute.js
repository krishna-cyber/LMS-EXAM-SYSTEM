/** @format */

const express = require("express");
const { createExam } = require("../controllers/examController");

const router = express.Router();

router.get("/exam/get-exam", (req, res) => {
  res.send("Hello World");
});

// create new exam paper
router.post("/exam/create-exam", createExam);
module.exports = router;
