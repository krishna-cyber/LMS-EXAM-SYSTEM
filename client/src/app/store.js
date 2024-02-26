/** @format */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import examAuthReducer from "../features/ExamStart/examAuth";
import routeReducer from "../features/route/routeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    examAuth: examAuthReducer,
    route: routeReducer,
  },
});
