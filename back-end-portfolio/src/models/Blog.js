
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fonte: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Blog", BlogSchema);