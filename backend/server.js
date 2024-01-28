
const express = require('express');
const connectDB = require('./models/conn');

const dotenv = require('dotenv');
dotenv.config();

//express app 
const app = express();

connectDB(app);

//middleware to parse the request body 
app.use(express.json());

//routes
app.use('/api/workouts', require('./routes/workouts'));
app.use('/api/user', require('./routes/user'));
