/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Exams from "./components/Exams.jsx";
import ExamChapter from "./components/ExamChapter.jsx";
import ExamInstruction from "./components/ExamInstruction.jsx";
import { useSelector } from "react-redux";
import ExamQuestions from "./components/ExamQuestions.jsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "study",
        element: <p>Hello study</p>,
      },
      {
        path: "dashboard",
        element: <p>Hello study</p>,
      },
      {
        path: "exams",
        element: <Exams />,
      },
      {
        path: "resources",
        element: <p>Hello resources</p>,
      },
      {
        path: "chapter-test",
        element: <ExamChapter />,
      },
    ],
  },
  {
    path: "exam_start/:id",
    element: <ExamQuestions />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
