/** @format */

const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "UserName is required"],
    },
    instituteName: {
      type: String,
      required: [true, "InstituteName is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    dob: {
      type: Date,
      required: [true, "DOB is required"],
    },
    photo: {
      type: String,
      required: [true, "Photo is required"],
    },
  },
  {
    timestamps: true,
  }
);

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

module.exports = UserDetails;
