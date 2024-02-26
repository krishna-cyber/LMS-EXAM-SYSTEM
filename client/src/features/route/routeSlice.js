/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: "",
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.route = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRoute } = routeSlice.actions;

export default routeSlice.reducer;
