const asyncHandler = require("express-async-handler");

// @desc get posts
// @route GET /api/posts
// @access private
const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Hallo posts" });
});

module.exports = {
  getPosts,
};
