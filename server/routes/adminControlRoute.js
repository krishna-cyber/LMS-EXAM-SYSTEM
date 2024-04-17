/** @format */

const express = require("express");
// file upload middleware
const upload = require("../utils/fileUpload");

// importing middlewares for auth and admin check
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// importing controller from adminControlController
const {
  registerStudent,
  getAllStudents,
} = require("../controllers/adminControlController");

const router = express.Router();

// student registration through admin

router.post(
  "/admin/add-student",
  authMiddleware,
  adminMiddleware,
  upload.single("studentPic"),
  registerStudent
);

// get student lists
router.get(
  "/admin/student-list",
  authMiddleware,
  adminMiddleware,
  getAllStudents
);

module.exports = router;
