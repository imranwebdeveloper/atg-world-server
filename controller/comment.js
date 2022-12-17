const CommentsModal = require("../model/CommentsModel");
const PostModel = require("../model/postModal");

const comment = async (req, res) => {
  const { id } = req.params;
  const { user } = req.headers;
  const { comment } = req.body;

  try {
    const postModel = await PostModel.findOneAndUpdate(
      { _id: id },
      { $inc: { comments: 1 } }
    );
    const like = await new CommentsModal({
      userId: user,
      postId: id,
      comment,
    });

    const saveLike = await like.save();

    res.send({
      status: true,
      message: "Thanks for your likes",
      postInfo: postModel,
      commentsInfo: saveLike,
    });
  } catch (error) {
    res.send({ status: false, message: "Sorry, Something Wrong" });
  }
};

module.exports = comment;
