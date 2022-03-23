const mongoose = require('mongoose');
const { claimProduct } = require('../controllers/productController');

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

const User =  mongoose.model('User' , userSchema);

module.exports = User;