const UserModel = require("../model/userModel");

const verifyUser = async (req, res, next) => {
  try {
    const { user } = req.headers;
    const IsUser = await UserModel.find({ _id: user });
    if (IsUser) {
      next();
    }
  } catch (error) {
    res.status(401).send({ status: false, message: "Invalid Credential" });
  }
};
module.exports = verifyUser;
