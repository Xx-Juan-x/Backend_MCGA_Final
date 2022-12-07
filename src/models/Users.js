const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('User', userSchema);