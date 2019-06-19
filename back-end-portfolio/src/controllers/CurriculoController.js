
const mongoose = require("mongoose");
const Curriculo = require("../models/Curriculo");

class CurriculoController {
    async index(req, res) {
      const curriculos = await Curriculo.find();
      return res.json(curriculos);
    }
    async store(req, res) {
      const curriculo = req.body;
      const savedCurriculo = await Curriculo.create(curriculo);
      return res.json(savedCurriculo);
    }
    async show(req, res) {
      const id = req.params.id;
      const curriculo = await Curriculo.findById(id);
      return res.json(curriculo);
    }
    async update(req, res) {
      const curriculo = req.body;
      const id = req.params.id;
      const updatedCurriculo = await Curriculo.findByIdAndUpdate(id, curriculo, {
        new: true
      });
      return res.json(updatedCurriculo);
    }
    async delete(req, res) {
      const id = req.params.id;
      await Curriculo.findByIdAndDelete(id);
      return res.json({ deleted: true });
    }
  }
  
  module.exports = new CurriculoController();