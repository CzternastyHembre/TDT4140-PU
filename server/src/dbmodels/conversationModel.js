const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
  participants: {
    type: Array,
    required: [true, "No participants set"],
  },
  messages: [
    {
      senderId: {
        type: Number,
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
