const asyncHandler = require('express-async-handler')
const Book = require('../models/BooksModel')
//create book
const createBook = asyncHandler(async (req, res) => {
  const { title, author, publishyear } = req.body

  if (!title || !author || !publishyear) {
    res.status(400)
    throw new Error('All fields are required')
  }

  //exist book
  const existBook = await Book.findOne({ title })
  if (existBook) {
    res.status(409)
    throw new Error('Book alredy exist')
  }

  const newBook = await Book.create({ title, author, publishyear })
  res.status(201).json({
    message: 'Book created successfully',
    newBook,
  })
})

//get all books
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find()

  if (!books) {
    res.status(500)
    throw new Error('something went wrong')
  }

  res.status(200).json(books)
})

//get single book
const getSingleBook = asyncHandler(async (req, res) => {
  const { id } = req.params

  const book = await Book.findById(id)

  res.status(200).json(book)
})

//update book
const updateBook = asyncHandler(async (req, res) => {
  const { title, author, publishyear } = req.body
  if (!title || !author || !publishyear) {
    res.status(400)
    throw new Error('All fields are required')
  }

  const { id } = req.params

  const updateBook = await Book.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    { new: true }
  )

  res.status(200).json(updateBook)
})

//delete book
const deleteBook = asyncHandler(async (req, res) => {
  const delbook = await Book.findByIdAndDelete(req.params.id)

  if (!delbook) {
    res.status(404)
    throw new Error('Book not found')
  }

  res.status(200).json('deleted successfully')
})

module.exports = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
}
