const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema({
    name: String
})

const Categorie = mongoose.model('Categories', categoriesSchema)

module.exports = Categorie