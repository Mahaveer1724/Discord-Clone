const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        firstName: {
            required: true,
            type: String,
            minlength: 2
        },
        lastName: {
            type: String
        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date
    },
    dateJoined:{
        type: Date,
        default: Date.now()
    }
})


const userModel = mongoose.model('user', userSchema)
module.exports = userModel