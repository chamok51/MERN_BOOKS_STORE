const {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require('../controller/bookController')

const router = require('express').Router()

router.post('/create', createBook)

router.get('/books', getAllBooks)

router.get('/book/:id', getSingleBook)

router.put('/update/:id', updateBook)

router.delete('/delete/:id', deleteBook)

module.exports = router
