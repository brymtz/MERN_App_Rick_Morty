const {expressjwt} = require('express-jwt')

const secret = 'ultra-secret-password'

const verifyToken = expressjwt({
    //Setup
    secret,
    algorithms: ['HS256'],
    requestProperty: 'payload',
    getToken(req) {
        if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer"){
            const token = req.headers.authorization.split(" ")[1]
            return token
        }
        return null
    }
})

module.exports = verifyToken

