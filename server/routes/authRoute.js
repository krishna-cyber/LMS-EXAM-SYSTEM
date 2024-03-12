/** @format */

const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/auth/register", registerController);

router.post("/auth/login", loginController);

router.get("/auth/current-user", authMiddleware, currentUserController);

module.exports = router;
