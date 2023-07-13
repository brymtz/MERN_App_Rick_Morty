const mongoose = require('mongoose')

const personajeSchema = mongoose.Schema({
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    image: String,
    url: String
})

const Personaje = mongoose.model('personaje', personajeSchema)

module.exports = Personaje