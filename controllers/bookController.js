const mongoose = require("mongoose");
const Book = require("../models/bookModel.js");

//function to send books (pagination also applied)
async function handleSendAllBooks(req, res) {
  try {
    // page number required
    const page = Number(req.query.page) || 1;

    //number of books nedded per page
    booksPerPage = Number(req.query.limit) || 5;

    //number of books in the collection
    const totalBooks = await Book.find().countDocuments();

    //get all the books for the required page
    const allBooks = await Book.find()
      .skip((page - 1) * booksPerPage)
      .limit(booksPerPage);

    if (allBooks.length > 0)
      //sending the books
      res.status(200).json({ allBooks, totalBooks });
    else res.status(404).json({ message: "No books to display" });
    //error handling
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.message });
  }
}

//function to create a new book
async function handleCreateBook(req, res) {
  try {
    //getting the book fron the body and saving it in database
    const newBook = new Book(req.body);
    await newBook.save();

    //send the created response and also send the new created book
    res.status(201).json(newBook);

    //error handling
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.message });
  }
}

//function to get a book by it's id
async function handleSendBookById(req, res) {
  try {
    // getting the id sent as parameter
    const id = req.params.id;

    // find the book using the ID
    const book = await Book.find({ _id: id });

    // sending the found book
    res.status(200).json(book);

    //catch any error
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.message });
  }
}

//function to update book on the basis of id
async function handleUpdateBook(req, res) {
  try {
    // get the id
    const id = req.params.id;

    // get the new details of the book
    const updatedBookDetails = req.body;

    // update the book and get the updated book
    const updatedBook = await Book.findOneAndUpdate(
      { _id: id },
      updatedBookDetails,
      { new: true }
    );

    // send the updated book in the response
    res.status(200).json(updatedBook);

    //error handling
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something went wrong!", error: error.message });
  }
}

//function to delete the book by id
async function handleDeleteBook(req, res) {
  try {
    //taking the id from the params
    const id = req.params.id;

    // deleting the book using the id
    await Book.findOneAndDelete({ _id: id }, { new: true });

    // send the sucsess message
    res.status(204).json({ message: "Book deleted successfully!" });
    // catch any erorr
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.message });
  }
}

module.exports = {
  handleSendAllBooks,
  handleCreateBook,
  handleSendBookById,
  handleUpdateBook,
  handleDeleteBook,
};
