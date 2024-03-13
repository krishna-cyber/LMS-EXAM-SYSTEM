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
  upload.fields([
    {
      name: "questionImage",
      maxCount: 1,
    },
    {
      name: "questionAudio",
      maxCount: 1,
    },
    {
      name: "option1Image",
      maxCount: 1,
    },
    {
      name: "option2Image",
      maxCount: 1,
    },
    {
      name: "option3Image",
      maxCount: 1,
    },
    {
      name: "option4Image",
      maxCount: 1,
    },
  ]),
  questionArrange,
  (req, res) => {
    console.log(req.files);
    res.send("Hello World");
  }
);
module.exports = router;
