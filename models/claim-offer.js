const mongoose = require('mongoose');

// schema
const claimSchema = new mongoose.Schema({
    id: Number ,
    title: String,
    description: String,
    image: String,
    claimBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    claimedProduct : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }
})

// model
const Claim = mongoose.model('Claim' , claimSchema);

module.exports = Claim ;