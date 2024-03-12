/** @format */

const Question = require("../models/questionModel");

// create a new exam paper
const createQuestion = async (req, res) => {
  try {
    const { question, options } = req.body;
    console.log(question, options);
    return res.status(201).send({
      success: true,
      message: "Exam Created Successfully",
      exam,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In createExam API",
      error,
    });
  }
};

module.exports = {
  createExam,
};
