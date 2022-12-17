const UserModel = require("../model/userModel");

const resetController = async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.send({
      status: false,
      message: "Please provide email and newPassword",
    });
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
  res.send({
    status: true,
    message: "Your password has been updated",
    putNewPassword,
  });
};

module.exports = resetController;
