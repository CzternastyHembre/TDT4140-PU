const express = require("express");
const router = express.Router();
const { getPosts, getPostsById, newPost, editPost, deletePost, getPostsFromUser } = require("../controllers/postControllers");

// @route /api/posts
router.route("/").get(getPosts).post(newPost);
router.route("/:postId").get(getPostsById).put(editPost).delete(deletePost);
router.route("/userPosts/:userId").get(getPostsFromUser);

module.exports = router;
