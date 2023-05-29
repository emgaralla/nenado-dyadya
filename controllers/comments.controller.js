const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  createComment: async (req, res) => {
    try {
      const resComment = await Comment.create({
        author: req.body.author,
        text: req.body.text,
        novostsId: req.body.novostsId,
      });
      res.json(resComment);
    } catch (err) {
      res.json(err.message);
    }
  },

  deletedComment: async (req, res) => {
    try {
      await Comment.findByIdAndRemove(req.params.comId);
      res.json(`Deleted`);
    } catch (err) {
      res.json(err.message);
    }
  },

  getAllCommentsByNovosts: async (req, res) => {
    try {
        const allCommentByNovosts = await Comment.find()
        res.json(allCommentByNovosts)
    } catch (err) {
        res.json(err.message)
    }
  }
};
