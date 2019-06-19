
const mongoose = require("mongoose");
const Projetos = require("../models/Projeto");

class ProjetoController {
    async index(req, res) {
      const projeto = await Projetos.find();
      return res.json(projeto);
    }
    async store(req, res) {
      const projeto = req.body;
      const savedProjeto= await Projetos.create(projeto);
      return res.json(savedProjeto);
    }
    async show(req, res) {
      const id = req.params.id;
      const  projeto = await Projetos.findById(id);
      return res.json(projeto);
    }
    async update(req, res) {
      const projeto = req.body;
      const id = req.params.id;
      const updatedProjeto = await Projetos.findByIdAndUpdate(id, projeto, {
        new: true
      });
      return res.json(updatedProjeto);
    }
    async delete(req, res) {
      const id = req.params.id;
      await Projetos.findByIdAndDelete(id);
      return res.json({ deleted: true });
    }
  }
  
  module.exports = new ProjetoController();