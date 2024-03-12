/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    default: "user",
    required: [true, "Role is required"],
    enum: ["user", "admin"],
  },
  userDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserDetails",
  },
});

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
