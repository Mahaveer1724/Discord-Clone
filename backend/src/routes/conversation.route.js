const express = require('express')
const conversationController = require('../controllers/conversation.controller.js')
const isLoggedIn = require('../middlewares/isLoggedIn.middleware.js')

const router = express.Router()

router.post('/dm', isLoggedIn ,conversationController.dmConversation)


module.exports = router