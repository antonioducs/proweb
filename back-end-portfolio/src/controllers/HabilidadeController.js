
const mongoose = require("mongoose");
const Habilidade = require("../models/Habilidades");

class HabilidadeController {
    async index(req, res) {
      const habilidades = await Habilidade.find();
      return res.json(habilidades);
    }
    async store(req, res) {
      const habilidade = req.body;
      const savedHabilidade = await Habilidade.create(habilidade);
      return res.json(savedHabilidade);
    }
    async show(req, res) {
      const id = req.params.id;
      const habilidade = await Habilidade.findById(id);
      return res.json(habilidade);
    }
    async update(req, res) {
      const habilidade = req.body;
      const id = req.params.id;
      const updatedHabilidade = await Habilidade.findByIdAndUpdate(id, habilidade, {
        new: true
      });
      return res.json(updatedHabilidade);
    }
    async delete(req, res) {
      const id = req.params.id;
      await Habilidade.findByIdAndDelete(id);
      return res.json({ deleted: true });
    }
  }
  
  module.exports = new HabilidadeController();