const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "No username set"],
      unique: [true, "User with this username already exists"],
    },
    password: {
      type: String,
      required: [true, "No password set"],
    },
    email: {
      type: String,
      required: [true, "No email set"],
    },
    phoneNr: {
      type: Number,
      required: false,
    },
    firstName: {
      type: String,
      required: [true, "No firstName set"],
    },
    lastName: {
      type: String,
      required: [true, "No lastName set"],
    },
    description: {
      type: String,
      required: false,
    },
    profilePicture: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
