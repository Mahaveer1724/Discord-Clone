const dotenv = require('dotenv')
const express = require('express')
const cookieParser = require('cookie-parser')
const connectDB = require('./db/db.js')
const authRoutes = require('./routes/auth.route.js')

const app = express()
dotenv.config()

connectDB()
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)

module.exports = app