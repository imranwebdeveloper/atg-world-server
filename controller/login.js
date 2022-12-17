const UserModel = require("../model/userModel");

const logInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ status: false, message: "Please enter your email & password" });
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide valid email" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .send({ status: false, message: "Invalid Credential" });
    }

    if (user.password.toString() != password.toString()) {
      return res
        .status(401)
        .send({ status: false, message: "Invalid Credential" });
    }
    res
      .status(200)
      .send({ status: true, message: "You are login successfully", user });
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};
module.exports = logInController;
