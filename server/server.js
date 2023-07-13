const express = require('express')
const app = express()
const authRouter = require('./routes/auth.routes')
const bodyParser = require('body-parser')


//Auth
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/auth', authRouter)

//DB Connection
const mongoose = require('mongoose')
mongoose .connect('mongodb://localhost/mern-stack-app')
         .then(() => console.log('Conectado a la BD'))

// Model
const Personaje = require('./models/personaje.model')

// CORS
const cors = require('cors')
app.use(cors())

//Routing
app.get('/api/personajes',  (req, res) => {
    Personaje
        .find()
    .then(allPersonajes => res.json(allPersonajes))
})

app.get('/api/details/:personaje_id', (req, res) => {
    const {personaje_id} = req.params

    Personaje
        .findById(personaje_id)
        .then(personaje => res.json(personaje))
})


app.listen(5005, () => console.log('Servidor Levantado'))