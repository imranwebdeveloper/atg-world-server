const LikesModal = require("../model/LikesModel");
const PostModel = require("../model/postModal");

const likes = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.headers;
    const isLike = await LikesModal.findOne({ userId: user, postId: id });

    if (isLike) {
      return res.status(200).send({
        status: false,
        message: "Sorry! You have already liked this post",
      });
    }
    const postModel = await PostModel.findOneAndUpdate(
      { _id: id },
      { $inc: { likes: 1 } }
    );

    if (!postModel) {
      return res.status(400).send({
        status: false,
        message: "Sorry! Post has been deleted",
      });
    }

    const like = await new LikesModal({ userId: user, postId: id });

    const saveLike = await like.save();
    res.send({
      status: true,
      message: "Thanks for your likes",
      postInfo: postModel,
      likesInfo: saveLike,
    });
  } catch (error) {
    res.send({ status: false, message: "Sorry, Something Wrong" });
  }
};

module.exports = likes;
