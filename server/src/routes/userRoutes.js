const express = require("express");
const router = express.Router();
const {
  getUser,
  addUser,
  editUser,
  deleteUser,
  getUserByUnamePassw,
  newRatingOfId,
} = require("../controllers/userController");

router.route("/").post(addUser);
router.route("/:userId").get(getUser).put(editUser).delete(deleteUser);
router.route("/login").post(getUserByUnamePassw);
router.route("/rating/:otherUserId").put(newRatingOfId);

module.exports = router;
