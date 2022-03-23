const mongoose = require('mongoose');

// schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true

    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    claimProduct:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Claim'
        }
    ]
}, {
    timestamps : true 
})

// models
const User =  mongoose.model('User' , userSchema);

module.exports = User;