
const mongoose = require("mongoose");

const ProjetoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model("Projeto", ProjetoSchema);