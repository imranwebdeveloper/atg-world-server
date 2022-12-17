const UserModel = require("../model/userModel");

const resetController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.Status(400).send({
        status: false,
        message: "Please provide email and newPassword",
      });
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
    const putNewPassword = await UserModel.updateOne(
      { email },
      { password: newPassword },
      { runValidators: true }
    );
    res.status(201).send({
      status: true,
      message: "Your password has been updated",
      putNewPassword,
    });
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};

module.exports = resetController;
