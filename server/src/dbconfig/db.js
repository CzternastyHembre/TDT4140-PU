const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Connected to MongoDB: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const checkForValidObjectId = (id, res) => {
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(404);
    throw new Error("Not a valid Id");
  }
};

module.exports = { connectDB, checkForValidObjectId };
