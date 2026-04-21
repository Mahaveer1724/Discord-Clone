const jwt = require('jsonwebtoken')

const isLoggedIn = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({message: "Unauthorized"})
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET)
    if (!payload) {
        return res.status(401).json({message: "Unauthorized"})
    }

    req.user = payload
    next()
}


module.exports = isLoggedIn