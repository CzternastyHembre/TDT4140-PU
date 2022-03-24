const asyncHandler = require("express-async-handler");

const UsersDB = require("../dbmodels/userModel");
const { checkForValidObjectId } = require("../dbconfig/db");

// @desc get user
// @route GET /api/users/:userId
// @access private
const getUser = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.userId, res);

  const user = await UsersDB.findById(req.params.userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

// @desc add user
// @route POST /api/users
// @access private
const addUser = asyncHandler(async (req, res) => {
  if (!req.body.user) {
    res.status(403);
    throw new Error("Please add user field to body");
  }

  const createdUser = await UsersDB.create(req.body.user);

  res.status(200).json({ message: "User created!", createdUser });
});

// @desc edit user
// @route PUT /api/users/:userId
// @access private
const editUser = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.userId, res);

  const user = await UsersDB.findById(req.params.userId);

  if (!user) {
    res.status(403);
    throw new Error("User not found");
  }

  const updatedUser = await UsersDB.findByIdAndUpdate(
    req.params.userId,
    req.body.user,
    { new: true }
  );

  res.status(200).json({ message: "User updated!", updatedUser });
});

// @desc delete a user
// @route DELETE /api/users/:userId
// @access private
const deleteUser = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.userId, res);

  const user = await UsersDB.findById(req.params.userId);

  if (!user) {
    res.status(403);
    throw new Error("User not found");
  }

  await user.remove();

  res.status(200).json({ message: "User removed!", user });
});

const getUserByUnamePassw = asyncHandler(async (req, res) => {
  const user = await UsersDB.findOne({
    userName: req.body.userName,
  });

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  if (user.password !== req.body.password) {
    res.status(403);
    throw new Error("Wrong password for user");
  }

  res.status(200).json(user);
});

// @desc get conversation
// @route GET /api/users/rating/:otherUserId
// @access private
const newRatingOfId = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.otherUserId, res);

  const otherUser = await UsersDB.findById({
    _id: req.params.otherUserId,
  });
  if (!otherUser) {
    res.status(404);
    throw new Error("Could not find otherUser");
  }

  let index = -1;
  for (let i = 0; i < otherUser.userRatings.length; i++) {
    if (otherUser.userRatings[i].userId == req.body.userId) {
      index = i;
    }
  }
  if (index == -1) {
    otherUser.userRatings.push({
      userId: req.body.userId,
      rating: req.body.rating,
    });
  } else {
    otherUser.userRatings[index] = req.body;
  }

  await UsersDB.findByIdAndUpdate(req.params.otherUserId, otherUser);

  res.status(200).json({ message: "Userrating created!", user: otherUser });
});

module.exports = {
  getUser,
  addUser,
  editUser,
  deleteUser,
  getUserByUnamePassw,
  newRatingOfId,
};
