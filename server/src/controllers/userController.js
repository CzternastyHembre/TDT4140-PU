const asyncHandler = require("express-async-handler");

// @desc get user
// @route GET /api/users/:userId
// @access private
const getUser = asyncHandler(async (req, res) => {
  if (req.params.user) {
    res.status(404);
    throw new Error("No user specified");
  }

  res.status(200).json({ message: "Hallo user" });
});

// @desc add user
// @route POST /api/users/
// @access private
const addUser = asyncHandler(async (req, res) => {
  if (!req.body.user) {
    res.status(403);
    throw new Error("Please add user field to body");
  }

  res.status(200).json({ message: req.body.user });
});

// @desc edit user
// @route PUT /api/users/:userId
// @access private
const editUser = asyncHandler(async (req, res) => {
  if (!req.body.user) {
    res.status(403);
    throw new Error("Please add user field to body");
  }

  res.status(200).json({ message: req.body.user });
});

// @desc delete a user
// @route DELETE /api/users/:userId
// @access private
const deleteUser = asyncHandler(async (req, res) => {
  if (!req.params.userId) {
    res.status(403);
    throw new Error("Please add user field to body");
  }

  res.status(200).json({ message: req.body.user });
});

module.exports = {
  getUser,
  addUser,
  editUser,
  deleteUser,
};
