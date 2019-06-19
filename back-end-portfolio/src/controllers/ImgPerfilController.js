


const mongoose = require("mongoose");
const ImgPerfil = require("../models/ImgPerfil");

class ImgPerfilController {
    async index(req, res) {
      const imgs = await ImgPerfil.find();
      return res.json(imgs);
    }
    async store(req, res) {
      const img = req.body;
      const savedImg = await ImgPerfil.create(img);
      return res.json(savedImg);
    }
    async show(req, res) {
      const id = req.params.id;
      const img = await ImgPerfil.findById(id);
      return res.json(img);
    }
    async update(req, res) {
      const img = req.body;
      const id = req.params.id;
      const updatedImgPerfil = await ImgPerfil.findByIdAndUpdate(id, img, {
        new: true
      });
      return res.json(updatedImgPerfil);
    }
    async delete(req, res) {
      const id = req.params.id;
      await ImgPerfil.findByIdAndDelete(id);
      return res.json({ deleted: true });
    }
  }
  
  module.exports = new ImgPerfilController();