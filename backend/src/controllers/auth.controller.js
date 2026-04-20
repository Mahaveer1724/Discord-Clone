const userModel = require("../models/user.model.js")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userRegister = async (req, res) => {
    const {name, username, password, email, dob} = req.body
    const firstName = name?.firstName

    if (!firstName || !username || !password || !email) {
        return res.status(400).json({
            message: "Missing required fields!"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [{username}, {email}]
    })

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "User Already Exists!"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        name,
        username,
        password: hash,
        email,
        dob
    })

    const token = jwt.sign({}, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User created successully",
        user
    })
}



module.exports = {userRegister}