/** @format */

import { configureStore } from "@reduxjs/toolkit";
import examAuthReducer from "../features/ExamStart/examAuth";
import routeReducer from "../features/route/routeSlice";
import questionReducer from "../features/Questions/questionsSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    examAuth: examAuthReducer,
    route: routeReducer,
    questions: questionReducer,
  },
});
