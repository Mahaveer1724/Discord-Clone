const userModel = require("../models/user.model.js")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userRegister = async (req, res) => {
    const { name, username, password, email, dob } = req.body
    const firstName = name?.firstName

    if (!firstName || !username || !password || !email) {
        return res.status(400).json({
            message: "Missing required fields!"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [{ username }, { email }]
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

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User created successully",
        user
    })
}

const userLogin = async (req, res) => {
    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [{ username }, { email }]
    })

    if (!user) {
        return res.status(409).json({
            message: "User does not exists!"
        })
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        return res.status(409).json({
            message: "Invalid Credentials!"
        })
    }

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET)

    res.cookie("token", token);
    res.status(200).json({
        message: "Login successfull",
        user,
    });
}

const userLogout = async (req, res) => {
  res.clearCookie("token")
  res.status(200).json({message: "User logged out successfully"})
}

module.exports = { userRegister, userLogin, userLogout }