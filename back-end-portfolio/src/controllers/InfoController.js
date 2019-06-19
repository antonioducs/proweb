


const mongoose = require("mongoose");
const Info = require("../models/Info");

class InfoController {
    async index(req, res) {
      const infos = await Info.find();
      return res.json(infos);
    }
    async store(req, res) {
      const info = req.body;
      const savedInfo = await Info.create(info);
      return res.json(savedInfo);
    }
    async show(req, res) {
      const id = req.params.id;
      const info = await Info.findById(id);
      return res.json(info);
    }
    async update(req, res) {
      const info = req.body;
      const id = req.params.id;
      const updatedInfo = await Info.findByIdAndUpdate(id, info, {
        new: true
      });
      return res.json(updatedInfo);
    }
    async delete(req, res) {
      const id = req.params.id;
      await Info.findByIdAndDelete(id);
      return res.json({ deleted: true });
    }
  }
  
  module.exports = new InfoController();