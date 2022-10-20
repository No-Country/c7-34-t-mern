const jwt = require('jsonwebtoken')

const verifyNoToken = (req, res, next) => {
    const token = req.session.token
    //const token = req.header('auth-token')
    if (!token) {
        console.log(".............No Token-----> Next")
        return next()
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        return res.redirect("/login")

    } catch (error) {
        res.status(400).json({error: 'Error de Token'})
    }
}

module.exports = verifyNoToken