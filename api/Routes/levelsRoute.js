const Router = require('express')
const router = Router()
const LevelsController = require('../Controllers/LevelsController')

router.get('/levels', LevelsController.getAll)
router.get('/levels/:id', LevelsController.getById)
router.put('/levels/:id', LevelsController.update)
router.delete('/levels/:id', LevelsController.delete)
module.exports = router