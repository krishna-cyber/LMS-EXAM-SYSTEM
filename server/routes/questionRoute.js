/** @format */

const express = require("express");
const upload = require("../utils/fileUpload");
const questionArrange = require("../middleware/questionArrange");

const router = express.Router();

router.get("/get-question:id", (req, res) => {
  res.send("Hello World");
});

// create a new question
router.post(
  "/question/create-question",
  upload.any(),
  questionArrange,
  (req, res) => {
    console.log(req.files);
    res.send("Hello World");
  }
);
module.exports = router;
