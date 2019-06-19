
const mongoose = require("mongoose");
const Lits = require("../models/Lits");

class ListsController {
    async index(req, res) {
      const list = await Lits.find();
      return res.json(list);
    }
    async store(req, res) {
      const list = req.body;
      const savedLists = await Lits.create(list);
      return res.json(savedLists);
    }
    async show(req, res) {
      const id = req.params.id;
      const list = await Lits.findById(id);
      return res.json(list);
    }
    async update(req, res) {
      const list = req.body;
      const id = req.params.id;
      const updatedLists = await Lits.findByIdAndUpdate(id, list, {
        new: true
      });
      return res.json(updatedLists);
    }
    async delete(req, res) {
      const id = req.params.id;
      await Lits.findByIdAndDelete(id);
      return res.json({ deleted: true });
    }
  }
  
  module.exports = new ListsController();