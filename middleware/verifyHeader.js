const verifyHeader = (req, res, next) => {
  const { user } = req.headers;
  if (!user) {
    return res.send({
      status: false,
      message:
        "Please set user ID  in the headers Like {user: 639c3c8610107b17f3bbe780} or to get new user id register first",
    });
  }
  next();
};
module.exports = verifyHeader;
