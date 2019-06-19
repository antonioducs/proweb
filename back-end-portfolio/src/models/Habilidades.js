
const moongose = require("mongoose");

const HabilidadeSchema = new moongose.Schema({
    Habilidades: {
        type: String,
        require: true
    }
})

module.exports = moongose.model("Habilidade", HabilidadeSchema);