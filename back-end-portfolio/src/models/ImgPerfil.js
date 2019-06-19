
const mongoose = require("mongoose");

const ImgPerfilSchema = new mongoose.Schema({
    imgPerfil: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("ImgPerfil", ImgPerfilSchema);