const express = require("express");
const router = express.Router();
const { getPosts } = require("../controllers/postControllers");

router.route("/").get(getPosts);

module.exports = router;
