const {
    Router
} = require('express')
const ClassesController = require('../Controllers/ClassesController')
const router = Router()

router.get('/classes', ClassesController.getAll)
router.get('/classes/:id', ClassesController.getById)
router.post('/classes', ClassesController.post)
router.put('/classes/:id', ClassesController.update)
router.delete('/classes/:id', ClassesController.delete)
module.exports = router