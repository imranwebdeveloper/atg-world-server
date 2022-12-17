const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

var UserModel = mongoose.models.User || mongoose.model("User", userModel);

module.exports = UserModel;
