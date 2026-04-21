const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    convType: {
        type: String,
        enum: ['dm', 'group'],
        required: true
    },
    dmKey: {
        type: String,
        index: true,
        sparse: true,
        unique: true
    },
    lastMessage: {
        type: String
    },
    lastMessageAt: {
        type: Date,
        index: true
    }
}, {
    timestamps: true
})

const conversationModel = mongoose.model('conversation', conversationSchema)
module.exports = conversationModel