const Novost = require("../models/Novost.model");

module.exports.novostsController = {

  createNovost: async (req, res) => {
    try {
      const novost = await Novost.create({
        title: req.body.title,
        text: req.body.text,
        categorieId: req.body.categorieId,
      });
      res.json(novost);
    } catch (err) {
      res.json(err);
    }
  },

  deleteNovost: async (req, res) => {
    try {
      await Novost.findByIdAndRemove(req.params.id);
      res.json(`deleted ${req.params.id}`);
    } catch (err) {
      res.json(err.message);
    }
  },

  updateNovost: async (req, res) => {
    try {
      await Novost.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        text: req.body.text,
      });
      res.json(`Updated novost ${req.params.id}`);
    } catch (err) {
      res.json(err.message);
    }
  },

  getNovostById: async (req, res) => {
    try {
      const novostById = await Novost.findById(req.params.id)
      res.json(novostById)
    } catch (err) {
      res.json(err.message)
    }
  },

  getAllNovosts: async (req, res) => {
    try {
      const allNovosts = await Novost.find();
      res.json(allNovosts);
    } catch (err) {
      res.json(err.message);
    }
  },

  getNovostByCategorie: async (req, res) => {
    try {
      const novosts = await Novost.find({ categorieId: req.params.id })//.populate('categorieId')
      res.json(novosts);
    } catch (err) {
      res.json(err.message);
    }
  },
};
