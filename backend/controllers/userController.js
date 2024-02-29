const jwt = require('jsonwebtoken')
const bycrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    //Check if user exists
    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error("This user already exist")
    }

    //Hash password
    const salt = await bycrypt.genSalt(10)
    const hashedPassword = await bycrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password : hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('invalid User')
    }
})

// @desc Authentic new user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler( async (req, res) => {
     const { email, password } = req.body

     // Check to find user email
     const user = await User.findOne({email})

     if(user && (await bycrypt.compare( password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
     } else {
        res.status(400)
        throw new Error('Invalid credentials')
     }
})


// @desc Get user data
// @route POST /api/users/me
// @access private
const getUserData = asyncHandler(async (req, res) => {
    res.json({message: 'User Data retrieved'})
})

module.exports = {
    registerUser, loginUser, getUserData
}