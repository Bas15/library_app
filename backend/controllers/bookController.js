const asyncHandler = require("express-async-handler")

const Book = require('../models/bookModel')

// @desc Get books
// @route GET /api/books
// @access public
const getBooks = asyncHandler( async (req, res) => {
    const books = await Book.find()

    res.status(200).json(books)
})


// @desc Set books
// @route POST /api/books
// @access private
const setBook = asyncHandler(async (req, res) => {
    if(!req.body.genre || !req.body.desc || !req.body.cover){
        res.status(400)
        throw new Error('please include missing field')
    }

    const book = await Book.create({
        genre: req.body.genre,
        desc: req.body.desc,
        cover: req.body.cover
    }) 

    res.status(200).json(book)
})


// @desc update books
// @route PUT /api/books/:id
// @access private
const updateBook = asyncHandler(async (req, res) => {

    const book = await Book.findById(req.params.id)

    if (!book) {
        res.status(400)
        throw new Error("book not found")
    }


    
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, })

    res.status(200).json(updatedBook)
})


// @desc delete books
// @route DELETE /api/books/:id
// @access private
const deleteBooks = asyncHandler(async (req, res) => {

    const book = await Book.findById(req.params.id)

    if (!book) {
        res.status(400)
        throw new Error("book not found")
    }

    await book.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getBooks, setBook, updateBook, deleteBooks
}