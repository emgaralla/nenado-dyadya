const { Router } = require('express')
const { novostsController } = require('../controllers/novosts.controller')

const router = Router()

router.get('/novosts', novostsController.getAllNovosts)
router.get('/novosts/:id', novostsController.getNovostById)
router.get('/novosts/categories/:id', novostsController.getNovostByCategorie)
router.post('/novosts', novostsController.createNovost)
router.patch('/novosts/:id', novostsController.updateNovost)
router.delete('/novosts/:id', novostsController.deleteNovost)

module.exports = router