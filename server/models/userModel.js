/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
      fullName: {
        type: String,
        required: [true, "Full Name is required"],
      },
      dob: {
        type: Date,
        required: [true, "Date of Birth is required"],
      },
      address: {
        type: String,
        required: [true, "Address is required"],
      },
      mobile: {
        type: String,
        required: [true, "Mobile is required"],
      },
      profilePic: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
