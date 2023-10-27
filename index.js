require("dotenv").config();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

const express = require("express");
const app = express();

const mongoose = require("mongoose");

//importing all the routers
const bookRouter = require("./routes/bookRouter.js");
const authRouter = require("./routes/authRouter.js");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes middlewares
app.use("/books", bookRouter);
app.use("/auth", authRouter);

//Database Connection
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.send("<h1>BOOK DIRECTORY</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} http://localhost:${PORT}`);
});
