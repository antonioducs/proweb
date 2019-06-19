
const mongoose = require("mongoose");
const Blog = require("../models/Blog");

class BlogController {
    async index(req, res) {
      const blogs = await Blog.find();
      return res.json(blogs);
    }
    async store(req, res) {
      const blog = req.body;
      const savedBlog = await Blog.create(blog);
      return res.json(savedBlog);
    }
    async show(req, res) {
      const id = req.params.id;
      const blog = await Blog.findById(id);
      return res.json(blog);
    }
    async update(req, res) {
      const blog = req.body;
      const id = req.params.id;
      const updatedBlog = await Blog.findByIdAndUpdate(id, blog, {
        new: true
      });
      return res.json(updatedBlog);
    }
    async delete(req, res) {
      const id = req.params.id;
      await Blog.findByIdAndDelete(id);
      return res.json({ deleted: true });
    }
  }
  
  module.exports = new BlogController();