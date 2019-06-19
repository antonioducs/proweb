

const mongoose = require("mongoose");
const Contato = require("../models/Contato");

class ContatoController {
    async index(req, res) {
      const contatos = await Contato.find();
      return res.json(contatos);
    }
    async store(req, res) {
      const contato = req.body;
      const savedContato = await Contato.create(contato);
      return res.json(savedContato);
    }
    async show(req, res) {
      const id = req.params.id;
      const contato = await Contato.findById(id);
      return res.json(contato);
    }
    async update(req, res) {
      const contato = req.body;
      const id = req.params.id;
      const updatedContato = await Contato.findByIdAndUpdate(id, contato, {
        new: true
      });
      return res.json(updatedContato);
    }
    async delete(req, res) {
      const id = req.params.id;
      await Contato.findByIdAndDelete(id);
      return res.json({ deleted: true });
    }
  }
  
  module.exports = new ContatoController();