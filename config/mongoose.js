// mongoose connection
const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://aditya:anshu@cluster0.xisze.mongodb.net/offer_db';

mongoose.connect(dbUrl);

// establishing connection
const db = mongoose.connection ;

// checking error
db.on('error' , console.error.bind(console , 'error on creating database') );

// if no error
db.once('open' , ()=>{
    console.log('connected to  the database successfully');
})