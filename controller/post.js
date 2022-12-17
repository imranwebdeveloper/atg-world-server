const PostModel = require("../model/postModal");
// get all posts
const getAllPost = async (req, res) => {
  const posts = await PostModel.find({});

  res.send({
    status: true,
    message: "Post saved successfully",
    data: posts,
  });
};

// new post Create controller
const createNewPost = async (req, res) => {
  const { post } = req.body;

  if (!post) {
    return res.send({
      status: false,
      message: "Please write a post & userEmail",
    });
  }

  const postModel = await new PostModel({
    post,
    userId: user._id,
    userEmaiL: user.email,
    likes: 0,
    comments: 0,
  });

  const savePost = await postModel.save();

  res.send({
    status: true,
    message: "Post saved successfully",
    data: savePost,
  });
};

// Post update controller

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { post } = req.body;
  if (!post) {
    return res.send({
      status: false,
      message: "Please write a post",
    });
  }

  const posts = await PostModel.updateOne(
    { _id: id },
    { post },
    { runValidators: true }
  );

  res.send({
    status: true,
    message: "Post updated successfully",
    data: posts,
  });
};

// delete a post controller
const deletePost = async (req, res) => {
  const { id } = req.params;

  const deleted = await PostModel.findByIdAndDelete({ _id: id });
  if (!deleted) {
    return res.send({ status: false, message: "Post not found" });
  }
  res.send({
    status: true,
    message: "Post deleted successfully",
    data: deleted,
  });
};
module.exports = { deletePost, updatePost, createNewPost, getAllPost };
