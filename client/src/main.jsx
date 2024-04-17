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
import QuestionForm from "./components/QuestionForm.jsx";
import ExamChapter from "./components/ExamChapter.jsx";
import ExamQuestions from "./components/ExamQuestions.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import StudentRegisterForm from "./components/StudentRegisterForm.jsx";
import AddExam from "./components/AddExam.jsx";
import StudentList from "./components/StudentList.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/dashboard",
        element: <p>Hello study</p>,
      },
      {
        path: "/admin/add-student",
        element: <StudentRegisterForm />,
      },
      {
        path: "/admin/student-list",
        element: <StudentList />,
      },
      {
        path: "/admin/student-results",
        element: <p>Student Results</p>,
      },
      {
        path: "/admin/add-exam",
        element: <AddExam />,
      },
    ],
  },
  {
    path: "/form",
    element: <QuestionForm />,
    errorElement: <ErrorPage />,
  },

  {
    path: "exam_start/:id",
    element: <ExamQuestions />,
  },
  {
    path: "exam/:id",
    element: <ExamQuestions />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
