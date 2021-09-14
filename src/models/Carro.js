const mongoose = require('mongoose');

const carroSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    marca:{
        type: String,
        require: true
    },
    imagem:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Carro", carroSchema)