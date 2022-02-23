const asyncHandler = require("express-async-handler");
const mockUsers = require("../mockData/mockUsers");

// @desc getUsers
// @route GET /api/users/:email
// @access private
const getUser = asyncHandler(async (req, res) => {
  const user = mockUsers.find((u) => u.email == req.params.email);

  if (!user) {
    res.status(404);
    throw new Error("No user with this email exists");
  }

  res.status(200).json({ message: "Hallo user", user: user });
});

// @desc add user
// @route POST /api/users/addUser
// @access private
const addUser = asyncHandler(async (req, res) => {
  if (!req.body.user) {
    res.status(400);
    throw new Error("Please add user field to body");
  }

  res.status(200).json({ message: req.body.user });
});

module.exports = {
  getUser,
  addUser,
};
