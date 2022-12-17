const verifyHeader = async (req, res, next) => {
  try {
    const { user } = req.headers;
    if (!user) {
      return res.status(400).send({
        status: false,
        message:
          "Please set user ID  in the headers Like {user: 639c3c8610107b17f3bbe780} or to get new user id register first",
      });
    }
    next();
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};
module.exports = verifyHeader;
