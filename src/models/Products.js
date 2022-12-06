const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductsSchemas = new Schema({
    name:{
        type: String,
        required: true,
        maxlenght: 30
    },
    price:{
        type: Number,
        min: 1,
        required: true
    },
    stock:{
        type: Number,
        min: 0,
        required: true,
    },
    description:{
        type: String,
        maxlenght: 100,
    },
})

module.exports = mongoose.model("Products", ProductsSchemas);