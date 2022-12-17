const LikesModal = require("../model/LikesModel");
const PostModel = require("../model/postModal");

const likes = async (req, res) => {
  const { id } = req.params;
  const { user } = req.headers;
  try {
    const isLike = await LikesModal.findOne({ userId: user, postId: id });

    if (isLike) {
      return res.send({
        status: false,
        message: "Sorry! You have already liked this post",
      });
    }
    const postModel = await PostModel.findOneAndUpdate(
      { _id: id },
      { $inc: { likes: 1 } }
    );
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
