const UserModel = require("../model/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || name) {
    return res.send({
      status: false,
      message:
        "Please enter your name, email address & password like {email:imran@gmail.com name:Imran Password:imran}",
    });
  }

  const isUser = await UserModel.findOne({ email });
  if (isUser) {
    return res.send({ status: false, message: "You have already an account" });
  }
  const userModel = await new UserModel({
    name,
    email,
    password,
  });

  const user = await userModel.save();
  res.status(200).send({ status: true, message: "Success", user });
};
module.exports = registerUser;
