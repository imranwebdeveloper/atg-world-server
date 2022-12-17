const UserModel = require("../model/userModel");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      return res.status(400).send({
        status: false,
        message:
          "Please enter your name, email address & password like {email:imran@gmail.com name:Imran Password:imran}",
      });
    }
    if (!email.includes("@") || !email.endsWith(".com")) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide valid email" });
    }
    const isUser = await UserModel.findOne({ email });
    if (isUser) {
      return res.status(200).send({
        status: false,
        message: "You have already an account",
      });
    }
    const userModel = await new UserModel({
      name,
      email,
      password,
    });

    const user = await userModel.save();
    res
      .status(201)
      .send({ status: true, message: " Registrations success", user });
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};
module.exports = registerUser;
