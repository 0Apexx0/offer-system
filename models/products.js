const mongoose = require('mongoose');

// schema
const productSchema = new mongoose.Schema({
    id: Number ,
    title: String,
    price: Number,
    description: String,
    image: String,
})


// model
const Product = mongoose.model('Product' , productSchema);

module.exports = Product ;