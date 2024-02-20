

// @desc Register new user
// @route POST /api/users
// @access public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

// @desc Authentic new user
// @route POST /api/users/login
// @access public
const loginUser = (req, res) => {
    res.json({message: 'login User'})
}


// @desc Get user data
// @route POST /api/users/me
// @access private
const getUserData = (req, res) => {
    res.json({message: 'User Data retrieved'})
}

module.exports = {
    registerUser, loginUser, getUserData
}