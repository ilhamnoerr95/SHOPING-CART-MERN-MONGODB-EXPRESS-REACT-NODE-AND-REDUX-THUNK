const mongoose = require('mongoose');

// SKEMA
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

// OBJEK MODEL
const productModel = mongoose.model('product', productSchema);

module.exports = productModel;