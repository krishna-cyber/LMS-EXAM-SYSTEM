/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: {
    reading: [],
    listening: [],
  },
  //current question number to show
  currentQuestion: null,

  //solved questions array
  solvedQuestions: [],

  //correct answers
  correctAnswers: [],
  //incorrect answers
  incorrectAnswers: [],
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setSolvedQuestions: (state, action) => {
      state.solvedQuestions = action.payload;
    },
    setCorrectAnswers: (state, action) => {
      state.correctAnswers = action.payload;
    },
    setIncorrectAnswers: (state, action) => {
      state.incorrectAnswers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setQuestions,
  setCurrentQuestion,
  setSolvedQuestions,
  setCorrectAnswers,
  setIncorrectAnswers,
} = questionSlice.actions;

export default questionSlice.reducer;
