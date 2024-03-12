/** @format */

const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    question: {
      title: {
        text: {
          typeof: String,
          required: [true, "Question title is required"],
        },
        description: {
          typeof: String,
        },
        image: {
          typeof: String,
        },
        audio: {
          typeof: String,
        },
      },

      options: [
        {
          text: {
            typeof: String,
            required: [true, "Option text is required"],
          },
          image: {
            typeof: String,
          },
          audio: {
            typeof: String,
          },
          isCorrect: {
            typeof: Boolean,
            default: false,
            required: [true, "Correct option  is required for a question"],
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
