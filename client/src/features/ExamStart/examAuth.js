/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const examAuthSlice = createSlice({
  name: "examAuth",
  initialState,
  reducers: {
    start: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    end: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { start, end } = examAuthSlice.actions;

export default examAuthSlice.reducer;
