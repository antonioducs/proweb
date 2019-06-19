const mongoose = require("mongoose");

const CurriculoSchema = new mongoose.Schema({
    curriculo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Curriculo", CurriculoSchema);