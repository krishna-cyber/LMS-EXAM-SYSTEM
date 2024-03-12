/** @format */

const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  {
    examTitle: {
      type: String,
      required: [true, "ExamName is required"],
    },
    examType: {
      type: String,
      enum: ["all", "chapterWise"],
      default: "all",
    },
    questions: {
      reading: [
        {
          type: mongoose.Schema.Types.ObjectId,
        },
      ],
      listening: [
        {
          type: mongoose.Schema.Types.ObjectId,
        },
      ],
    },
  },
  { timestamps: true }
);

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
