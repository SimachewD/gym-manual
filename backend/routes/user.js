const express = require('express');

const router = express.Router();

//user controller functions
const {login, signup} = require('../controllers/userController');

//login route
router.post('/login', login);

//signup route
router.post('/signup', signup);

module.exports = router;