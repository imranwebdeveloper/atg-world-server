const mongoose = require("mongoose");

const postModel = new mongoose.Schema({
  userId: String,
  userEmaiL: String,
  post: {
    type: String,
    required: true,
  },
  likes: Number,
  comments: Number,
});

var PostModel = mongoose.models.Post || mongoose.model("Post", postModel);

module.exports = PostModel;
