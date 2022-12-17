const PostModel = require("../model/postModal");
// get all posts
const getAllPost = async (req, res) => {
  try {
    const posts = await PostModel.find({});

    res.status(200).send({
      status: true,
      message: "Post saved successfully",
      data: posts,
    });
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};

// new post Create controller
const createNewPost = async (req, res) => {
  try {
    const { post } = req.body;
    const { user } = req.headers;

    if (!post) {
      return res.status(404).send({
        status: false,
        message: "Please write something",
      });
    }

    const postModel = await new PostModel({
      post,
      userId: user,
      likes: 0,
      comments: 0,
    });
    const savePost = await postModel.save();

    res.status(201).send({
      status: true,
      message: "Post saved successfully",
      data: savePost,
    });
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};

// Post update controller

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { post } = req.body;
    if (!post) {
      return res.status(404).send({
        status: false,
        message: "Please write a post",
      });
    }
    const posts = await PostModel.updateOne(
      { _id: id },
      { post },
      { runValidators: true }
    );

    res.status(200).send({
      status: true,
      message: "Post updated successfully",
      data: posts,
    });
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};

// delete a post controller
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await PostModel.findByIdAndDelete({ _id: id });
    if (!deleted) {
      return res.status(404).send({ status: false, message: "Post not found" });
    }
    res.send({
      status: true,
      message: "Post deleted successfully",
      data: deleted._id,
    });
  } catch (error) {
    return res
      .status(404)
      .send({ status: false, message: "Sorry! something wrong" });
  }
};
module.exports = { deletePost, updatePost, createNewPost, getAllPost };
