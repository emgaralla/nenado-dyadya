const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    author: String,
    text: String,
    novostsId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Novost'
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment