const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    convId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversation',
        required: true,
        index: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    contentType: {
        type: String,
        enum: ['text', 'file', 'image'],
        default: 'text'
    }
}, {
    timestamps: true
})


const messageModel = mongoose.model('message', messageSchema)
module.exports = messageModel