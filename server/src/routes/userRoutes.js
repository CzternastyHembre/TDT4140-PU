const express = require("express");
const router = express.Router();
const { getUser, addUser } = require("../controllers/userController");

router.route("/:email").get(getUser);
router.route("/addUser").post(addUser);

module.exports = router;
