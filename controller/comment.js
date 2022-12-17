const CommentsModal = require("../model/CommentsModel");
const PostModel = require("../model/postModal");

const getPostComments = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await CommentsModal.find({ postId: id });
    const allComment = comments.map((comment) => comment.comment);

    res.status(200).send({
      status: true,
      message: "Post saved successfully",
      data: allComment,
    });
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};

const comment = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.headers;
    const { comment } = req.body;
    if (!comment) {
      return res.status(200).send({
        status: false,
        message: "Please enter a comment",
      });
    }
    const postModel = await PostModel.findOneAndUpdate(
      { _id: id },
      { $inc: { comments: 1 } }
    );

    if (!postModel) {
      return res.status(400).send({
        status: false,
        message: "Sorry! Post has been deleted",
      });
    }

    const commentModal = await new CommentsModal({
      userId: user,
      postId: id,
      comment,
    });

    const saveLike = await commentModal.save();

    res.status(201).send({
      status: true,
      message: "Thanks for your opinion",
      postInfo: postModel,
      commentsInfo: saveLike,
    });
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};

module.exports = { comment, getPostComments };
