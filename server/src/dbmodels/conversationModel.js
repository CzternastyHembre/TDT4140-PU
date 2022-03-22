const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
  p1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "No participants set"],
  },
  p2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "No participants set"],
  },
  messages: [
    {
      senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: [true, "No senderId set"],
      },
      content: {
        type: String,
        required: [true, "No message is set"],
      },
      messageDate: {
        type: Date,
        required: [true, "No date is set"],
      },
    },
  ],
});

module.exports = mongoose.model("Conversations", conversationSchema);
