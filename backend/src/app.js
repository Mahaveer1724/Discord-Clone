const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const cookieParser = require('cookie-parser')
const connectDB = require('./db/db.js')
const authRoutes = require('./routes/auth.route.js')
const conversationRoutes = require('./routes/conversation.route.js')

const app = express()
dotenv.config()

connectDB()
app.use(cors({origin: 'http://localhost:5173',credentials: true}))
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/conversation', conversationRoutes)

module.exports = app