/** @format */

const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
  logoutController,
  studentResiterController,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../utils/fileUpload");

const router = express.Router();

router.get("/auth/register", registerController);

router.post("/auth/login", loginController);

router.get("/auth/current-user", authMiddleware, currentUserController);

router.get("/auth/logout", logoutController);

// route to register a student
router.post("/auth/student-register", upload.any(), studentResiterController);

module.exports = router;
