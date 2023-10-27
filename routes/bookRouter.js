const express = require("express");
const bookRouter = express.Router();
const { verifyToken } = require("../middlewares/auth");
const {
  handleSendAllBooks,
  handleCreateBook,
  handleSendBookById,
  handleUpdateBook,
  handleDeleteBook,
} = require("../controllers/bookController.js");

// route to get all books
bookRouter.get("/", handleSendAllBooks);

// route to create a new book
bookRouter.post("/", verifyToken, handleCreateBook);

// route to get a book by id
bookRouter.get("/:id", handleSendBookById);

//route to update a book by id
bookRouter.put("/:id", verifyToken, handleUpdateBook);

//route to delete a book by id
bookRouter.delete("/:id", verifyToken, handleDeleteBook);

module.exports = bookRouter;
