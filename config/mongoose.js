
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/offer_Db';

mongoose.connect(dbUrl);

const db = mongoose.connection ;

db.on('error' , console.error.bind(console , 'error on creating database') );

db.once('open' , ()=>{
    console.log('connected to  the database successfully');
})