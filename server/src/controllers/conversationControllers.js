const asyncHandler = require("express-async-handler");

const ConversationsDB = require("../dbmodels/conversationModel");
const { checkForValidObjectId } = require("../dbconfig/db");

// @desc get conversation
// @route GET /api/conversations/
// @access private
const getConversations = asyncHandler(async (req, res) => {
  const conversation = await ConversationsDB.find();
  res.status(200).json(conversation);
});

// @desc get conversationById
// @route GET /api/conversations/:conversationId
// @access private
const getConversationById = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.conversationId, res);

  const conversation = await ConversationsDB.findById(req.params.conversationId)
    .populate("p1")
    .populate("p2")
    .populate("messages.senderId");
  if (!conversation) {
    res.status(404);
    throw new Error("Could not find conversation");
  }

  res.status(200).json(conversation);
});

// @desc get conversationByUserId
// @route GET /api/conversations/users/:userId
// @access private
const getConversationByUserId = asyncHandler(async (req, res) => {
  const conversations = (await ConversationsDB.find()).filter((conv) =>
    conv.participants.includes(req.params.userId)
  );
  if (!conversations) {
    res.status(404);
    throw new Error("Could not find any conversations");
  }
  res.status(200).json(conversations);
});

// @desc get conversation
// @route GET /api/conversations/:conversationId/messages
// @access private
const getConversationMessagesById = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.conversationId, res);

  const conversation = await ConversationsDB.findById(
    req.params.conversationId
  );

  if (!conversation) {
    res.status(404);
    throw new Error("Could not find conversation");
  }

  res.status(200).json(conversation.messages);
});

// @desc get conversation
// @route GET /api/conversations/:conversationId/messages
// @access private
const newConversationMessageById = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.conversationId, res);

  const conversation = await ConversationsDB.findById(
    req.params.conversationId
  );

  conversation.messages.push(req.body);
  await ConversationsDB.findByIdAndUpdate(
    req.params.conversationId,
    conversation
  );

  if (!conversation) {
    res.status(404);
    throw new Error("Could not find conversation");
  }

  res.status(200).json({ message: "Message created!", conversation });
});

// @desc get conversations
// @route POST /api/conversations
// @access private
const newConversation = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400);
    throw new Error("No conversation in body");
  }

  const conversation = await ConversationsDB.create(req.body);
  res.status(200).json({ message: "Conversation created!", conversation });
});

// @desc get conversation
// @route DELETE /api/conversation/:conversationId
// @access private
const deleteConversation = asyncHandler(async (req, res) => {
  checkForValidObjectId(req.params.conversationId, res);

  const conversation = await ConversationsDB.findById(
    req.params.conversationId
  );

  if (!conversation) {
    res.status(404);
    throw new Error("Could not find user");
  }

  await ConversationsDB.findByIdAndDelete(req.params.conversationId);

  res.status(200).json({ message: "Conversattion deleted!", conversation });
});

// @desc get conversationByUserId
// @route GET /api/conversations/users/:userId
// @access private
const getAllConversationByUserId = asyncHandler(async (req, res) => {
  const conversations = await ConversationsDB.find()
    .or([
      {
        p1: req.params.userId,
      },
      {
        p2: req.params.userId,
      },
    ])
    .populate("p1")
    .populate("p2")
    .populate("messages.senderId");
  console.log(conversations);
  if (!conversations) {
    res.status(404);
    throw new Error("Could not find any conversations");
  }
  res.status(200).json(conversations);
});

module.exports = {
  getConversationById,
  getConversationMessagesById,
  newConversation,
  deleteConversation,
  getConversations,
  newConversationMessageById,
  getConversationByUserId,
  getAllConversationByUserId,
};
