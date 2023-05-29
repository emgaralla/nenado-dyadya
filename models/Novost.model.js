const mongoose = require('mongoose')

const novostSchema = mongoose.Schema({
    title: String,
    text: String,
    categorieId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Categorie'
    }
})

const Novost = mongoose.model('Novost', novostSchema)

module.exports = Novost