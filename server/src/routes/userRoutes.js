const express = require("express");
const router = express.Router();
const {
  getUser,
  addUser,
  editUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/").post(addUser);
router.route("/:userId").get(getUser).put(editUser).delete(deleteUser);

module.exports = router;
