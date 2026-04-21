const isLoggedIn = require('../middlewares/isLoggedIn.middleware.js')
const conversationModel = require('../models/conversation.model.js')
const participantModel = require('../models/participants.model.js')
const userModel = require('../models/user.model.js')
const createDMKey = require('../services/dmKey.service.js')


const dmConversation = async (req, res) => {
    const userId = req.user.id
    const { partnerId } = req.body

    if (!partnerId) {
        return res.status(400).json({ message: "Partner ID Required" })
    }

    const dmKey = createDMKey(userId, partnerId)

    let conversation = await conversationModel.findOne({ dmKey })

    if (conversation) {
        return res.status(200).json({ message: "DM Already Exists", conversation })
    }

    conversation = await conversationModel.create({
        convType: 'dm',
        dmKey,
    })

    const participant = await participantModel.insertMany([
        {
            userId: userId,
            conversationId: conversation._id
        },
        {
            userId: partnerId,
            conversationId: conversation._id
        }
    ])

    const members = await participantModel
        .find({ conversationId: conversation._id })
        .select('userId')
        .populate('userId', '_id username')
        
    return res.status(201).json({
        message: "DM created successfully",
        conversation, members
    })
}

module.exports = { dmConversation }