//@Route /api/conversations

const express = require("express");
const router = express.Router();

const {
  getConversationById,
  getConversationMessagesById,
  newConversation,
  deleteConversation,
  getConversations,
  newConversationMessageById,
} = require("../controllers/conversationControllers.js");

// @route /api/conversations
router.route("/").get(getConversations).post(newConversation);

//@route /api/conversations/:id
router
  .route("/:conversationId")
  .get(getConversationById)
  .delete(deleteConversation)
  .put(newConversationMessageById);

//@route api/conversation/:id/messages;
router
  .route("/:conversationId/messages")
  .get(getConversationMessagesById)
  .put(newConversationMessageById);

module.exports = router;
