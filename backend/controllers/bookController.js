// @desc Get books
// @route GET /api/books
// @access public
const getBooks = async (req, res) => {
    res.status(200).json({ message : "get working"})
}


// @desc Set books
// @route POST /api/books
// @access private
const setBook = async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please include text')
    }

    res.status(200).json({ message : "set working"})
}


// @desc update books
// @route PUT /api/books/:id
// @access private
const updateBook = async (req, res) => {
    res.status(200).json({message : `put updated ${req.params.id}`})
}


// @desc delete books
// @route DELETE /api/books/:id
// @access private
const deleteBooks = async (req, res) => {
    res.status(200).json({ message : `deleted ${req.params.id}`})
}

module.exports = {
    getBooks, setBook, updateBook, deleteBooks
}