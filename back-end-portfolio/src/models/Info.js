
const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    linkGit: {
        type: String,
        required: true
    },
    biografia: {
        type: String,
        required: true
    },
    profissao: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Info", InfoSchema);