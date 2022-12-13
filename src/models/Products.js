const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
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
    category:{
        type: String,
        required: true,
        enum: ['computers', 'phones', 'accesories'],
    },
    isDeleted: {
        type: Boolean,
        default: false,
      },
})

module.exports = mongoose.model("Products", ProductsSchema);