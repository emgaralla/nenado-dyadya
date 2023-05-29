const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller')

const router = Router()

router.post('/novosts/:id/comments', commentsController.createComment)
router.delete('/novosts/:id/comments/:comId', commentsController.deletedComment)
router.get('/comments', commentsController.getAllCommentsByNovosts)

module.exports = router