const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/verifyToken')

const cors = require('cors')
router.use(cors())

router.post('/login', (req, res) =>{
    //Setup
    const { username, password } = req.body

    const payload = { id: '63887dfc2a999a808f67a8ea', username, role: 'user' }
    const secret = 'ultra-secret-password'
    const options = { algorithm: "HS256", expiresIn: "2h"}

    const authToken = jwt.sign(payload, secret, options)   
    
    if(username === 'admin' && password === 'root'){
        res.json({ authToken })
        console.log(authToken);
        //res.sendStatus(200).json({ authToken })
    } else{
        res.sendStatus(403)
    }

})

router.get('/verify', verifyToken, (req, res) => {
    //Setup
    res.json(req.payload)
})

module.exports = router