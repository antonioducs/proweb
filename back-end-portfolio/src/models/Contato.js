
const mongoose = require("mongoose");

const ContatoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    face: {
        type: String,
        required: true
    },
    insta: {
        type: String,
        required: true
    },
    imgFace: {
        type: String,
        required: true
    },
    imgInsta: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Contato", ContatoSchema);