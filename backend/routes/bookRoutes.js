const express = require('express')
const router = express.Router()
const { getBooks, setBook, updateBook, deleteBooks } = require('../controllers/bookController')

router.route('/').get(getBooks).post(setBook)
router.route('/:id').delete(deleteBooks).put(updateBook)

module.exports = router