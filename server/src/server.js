/* eslint-disable no-unused-vars */

const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleWare/errorMiddleware");
const { connectDB } = require("./dbconfig/db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

/* eslint-enable no-unused-vars */

connectDB();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(` Server started on port ${PORT} `.bgBrightGreen.black);
});
