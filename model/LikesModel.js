const mongoose = require("mongoose");

const likesModel = new mongoose.Schema({
  userId: String,
  postId: String,
});

const LikesModal = mongoose.models.Likes || mongoose.model("Likes", likesModel);
module.exports = LikesModal;
