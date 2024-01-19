
const workoutModel = require('../models/user-model');
const mongoose = ('mongoose');

//login function
const login = async (req, res)=>{
    res.json({mssg:'Login User'});
}

//signup function
const signup = async (req, res)=>{
    res.json({mssg:'Signup User'});
}

module.exports = {
    login,
    signup
}