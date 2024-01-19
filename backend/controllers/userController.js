
const userModel = require('../models/user-model');
const jwt = require('jsonwebtoken');

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});
}


//login function
const login = async (req, res)=>{
    const { email, password } = req.body;
    try {
        const user = await userModel.login(email, password);
        //create token
        const token = createToken(user._id);
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json({ERROR: error.message});
    }

}

//signup function
const signup = async (req, res)=>{

    const { email, password } = req.body;
    try {
        const user = await userModel.signup(email, password);
        //create token
        const token = createToken(user._id);
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json({ERROR: error.message});
    }

}

module.exports = {
    login,
    signup
}