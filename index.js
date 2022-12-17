const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectBD } = require("./config/connectBD");
const verifyHeader = require("./middleware/verifyHeader");
const verifyUser = require("./middleware/verifyUser");
const logInController = require("./controller/login");
const resetController = require("./controller/Reset");
const likes = require("./controller/likes");
const {
  deletePost,
  updatePost,
  createNewPost,
  getAllPost,
} = require("./controller/post");
const registerUser = require("./controller/register");
const { getPostComments, comment } = require("./controller/comment");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).send({ status: true, message: "Success" })
);

app.post("/user/register", registerUser);
app.post("/user/login", logInController);
app.put("/user/reset", resetController);
app.get("/posts", getAllPost);
app.post("/user/post", verifyHeader, verifyUser, createNewPost);
app.put("/user/post/:id", verifyHeader, verifyUser, updatePost);
app.delete("/user/post/:id", verifyHeader, verifyUser, deletePost);
app.post("/user/post/like/:id", verifyHeader, verifyUser, likes);
app.post("/user/post/comment/:id", verifyHeader, verifyUser, comment);
app.get("/user/post/comment/:id", verifyHeader, verifyUser, getPostComments);

app.listen(process.env.PORT || 5001, () => {
  connectBD();
  console.log("listening on port");
});
