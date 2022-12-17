const mongoose = require("mongoose");

const commentsModel = new mongoose.Schema({
  userId: String,
  postId: String,
  comment: String,
});

const CommentsModal =
  mongoose.models.Comments || mongoose.model("Comments", commentsModel);
module.exports = CommentsModal;
