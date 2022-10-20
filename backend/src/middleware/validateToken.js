const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    //const token = req.header('auth-token')
    const token = req.session.token
    if (!token) {
        console.log('Acceso denegado')
        return res.redirect('/login')
        //return res.status(401).json({ error: 'Acceso denegado' })
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        console.log('....Token Valido----Next')
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;