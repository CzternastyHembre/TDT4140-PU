//@Route /api/conversations

const express = require("express");
const router = express.Router();

const {
  getConversationById,
  getConversationMessagesById,
  newConversation,
  deleteConversation,
  getConversations,
} = require("../controllers/conversationControllers.js");

// @route /api/posts
router.route("/").get(getConversations).post(newConversation);
router
  .route("/:conversationId")
  .get(getConversationById)
  .delete(deleteConversation);

router.route("/:conversationId/messages").get(getConversationMessagesById);
//router.route("/:conversationId/").put(getConversationMessagesById);

module.exports = router;
