const UserModel = require("../model/userModel");

const logInController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(403)
      .send({ status: false, message: "Please enter your email & password" });
  }

  try {
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
    res.send({ status: false, message: "Sorry!, Something Wrong" });
  }
};
module.exports = logInController;
