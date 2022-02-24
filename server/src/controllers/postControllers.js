const asyncHandler = require("express-async-handler");

// @desc get posts
// @route GET /api/posts
// @access private
const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Hallo posts1" });
});

// @desc get posts
// @route GET /api/posts/:postId
// @access private
const getPostsById = asyncHandler(async (req, res) => {
  if(!req.params.postId) {
    res.status(404);
    throw new Error("PostId not specified");
  }
  res.status(200).json({ message: "Hallo posts2" });
});

// @desc get posts
// @route POST /api/posts
// @access private
const newPost = asyncHandler(async (req, res) => {
  if(!req.body.post) {
    req.status(403);
    throw new Error("No post in body");
  }
  res.status(400).json({ message: "Hallo posts3" });
});

// @desc get posts
// @route PUT /api/posts/:postId
// @access private
const editPost = asyncHandler(async (req, res) => {
  if(!req.params.postId) {
    req.status(404);
    throw new Error("Post to edit not found")
  } 
  res.status(200).json({ message: "Hallo posts4" });
});

// @desc get posts
// @route DELETE /api/posts/:postId
// @access private
const deletePost = asyncHandler(async (req, res) => {
  //check session
  if (req.params.postId) {
    res.status(404);
    throw new Error("Could not find user");
  }
  res.status(200).json({ message: "Hallo posts5" });
});

// @desc get posts
// @route GET /api/posts/userPosts/:userId
// @access private
const getPostsFromUser = asyncHandler(async (req, res) => {
  //check session
  if (req.params.user) {
    res.status(404);
    throw new Error("Could not find user");
  }
  res.status(200).json({ message: "Hallo posts6" });
});

module.exports = {
  getPosts,
  getPostsById,
  newPost,
  editPost,
  deletePost,
  getPostsFromUser
};
