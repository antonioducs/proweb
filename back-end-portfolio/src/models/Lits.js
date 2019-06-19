
const mongoose = require("mongoose");

const LitsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: [],
        required: true
    }
})

module.exports = mongoose.model("Lists", LitsSchema);