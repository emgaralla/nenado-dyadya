const Categorie = require("../models/Categorie.model");

module.exports.categoriesController = {

  createCategorie: async (req, res) => {
    try {
      const categorie = await Categorie.create({
        name: req.body.name,
      });
      res.json(categorie);
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteCategorie: async (req, res) => {
    try {
      await Categorie.findByIdAndRemove(req.params.id);
      res.json(`Deleted ${req.params.id}`);
    } catch (err) {
      res.json(err.message);
    }
  },
  
  getCategorie: async (req, res) => {
    try {
      const result = await Categorie.find({});
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },
};
