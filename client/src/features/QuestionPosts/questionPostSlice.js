/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: {
    reading: [
      {
        id: 1,
        text: "",
        image: null,
        audio: null,
      },
    ],
    listening: [
      {
        id: 21,
        text: "",
        image: null,
        audio: null,
      },
    ],
  },
};

export const questionPostSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {
  setQuestions,
  setCurrentQuestion,
  setSolvedQuestions,
  setCorrectAnswers,
  setIncorrectAnswers,
} = questionPostSlice.actions;

export default questionPostSlice.reducer;
