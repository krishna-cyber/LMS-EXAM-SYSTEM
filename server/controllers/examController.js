/** @format */

const Exam = require("../models/examModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// create a new exam paper
const createExam = async (req, res) => {
  try {
    const exam = new Exam(req.body);
    await exam.save();
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
