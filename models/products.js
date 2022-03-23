const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number ,
    title: String,
    price: Number,
    description: String,
    image: String,
})

const Product = mongoose.model('Product' , productSchema);

module.exports = Product ;