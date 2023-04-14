const { MongoGridFSChunkError } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Product = mongoose.model(
    'Product',
    new Schema({
        name: { type: String, requried: true },
        price: { type: Number, requried: true },
        description: { type: String, requried: true },
        image: { type: String, required: true }
    })
);

module.exports = Product;