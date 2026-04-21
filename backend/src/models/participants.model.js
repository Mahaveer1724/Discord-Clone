const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        index: true
    },
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversation',
        required: true,
        index: true
    },
    lastReadAt: {
        type: Date
    },
    joinedAt: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
})


const participantModel = mongoose.model('participant', participantSchema)
module.exports = participantModel
