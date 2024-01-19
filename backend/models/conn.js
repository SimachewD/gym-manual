
const mongoose = require('mongoose');

// connect to database and start the server
const connectDB = (app)=>{
    mongoose.connect(process.env.MONGO_URI).then((conn)=>{
    console.log(`Connected to Database:${conn.connection.host}`);

    //listening to request
    app.listen(process.env.PORT, '0.0.0.0', ()=>{
    console.log('Running on port', process.env.PORT);
    });
    })
    .catch((error)=>{ 
    console.log('Cannot connect to a database:', error);
});
}

module.exports = connectDB;
