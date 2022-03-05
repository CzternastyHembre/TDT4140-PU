const asyncHandler = require("express-async-handler");

const PostsDB = require("../dbmodels/postsModel");
const { checkForValidObjectId } = require("../dbconfig/db");

// @desc get posts
// @route GET /api/posts
// @access private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await PostsDB.find();

  res.status(200).json(posts);
});

// @desc get posts
// @route GET /api/posts/:postId
// @access private
const getPostsById = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.postId, res);

  const post = await PostsDB.findById(req.params.postId);

  if (!post) {
    res.status(404);
    throw new Error("Could not find post");
  }

  res.status(200).json(post);
});

// @desc get posts
// @route POST /api/posts
// @access private
const newPost = asyncHandler(async (req, res) => {
  if (!req.body.post) {
    req.status(400);
    throw new Error("No post in body");
  }

  const post = await PostsDB.create(req.body.post);

  res.status(200).json({ message: "Post created!", post });
});

// @desc get posts
// @route PUT /api/posts/:postId
// @access private
const editPost = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.postId);

  const post = await PostsDB.findById(req.params.postId);

  if (!post) {
    req.status(404);
    throw new Error("Post to edit not found");
  }

  const updatedPost = await PostsDB.findByIdAndUpdate(
    req.params.postId,
    req.body.post,
    { new: false }
  );

  res.status(200).json({ message: "Post updated!", updatedPost });
});

// @desc get posts
// @route DELETE /api/posts/:postId
// @access private
const deletePost = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.postId, res);

  const post = await PostsDB.findById(req.params.postId);

  if (req.params.postId) {
    res.status(404);
    throw new Error("Could not find user");
  }

  await PostsDB.findByIdAndDelete(req.params.postId);

  res.status(200).json({ message: "Post deleted!", post });
});

// @desc get posts
// @route GET /api/posts/userPosts/:userId
// @access private
const getPostsFromUser = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.userId);

  const posts = await PostsDB.find({ userId: req.params.userId });

  //check session
  if (!posts) {
    res.status(400);
    throw new Error("No posts found");
  }
  res.status(200).json(posts);
});

// @desc mark post as sold
// @route PUT /api/posts/sold/:postId
// @access private
const markPostAsSold = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.postId);

  const post = await PostsDB.findById(req.params.postId);

  if (!post) {
    req.status(404);
    throw new Error("Post to mark as sold not found");
  }

  const updatedPost = await PostsDB.findByIdAndUpdate(
    req.params.postId,
    { isSold: true },
    { new: false }
  );

  res.status(200).json({ message: "Post marked as sold!", updatedPost });
});

module.exports = {
  getPosts,
  getPostsById,
  newPost,
  editPost,
  deletePost,
  getPostsFromUser,
  markPostAsSold,
};
