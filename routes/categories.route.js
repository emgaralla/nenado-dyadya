const { Router } = require('express')
const { categoriesController } = require('../controllers/categories.controller')

const router = Router()

router.post('/categories', categoriesController.createCategorie)
router.get('/categories', categoriesController.getCategorie)
router.delete('/categories/:id', categoriesController.deleteCategorie)

module.exports = router