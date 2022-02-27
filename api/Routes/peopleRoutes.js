const {
    Router
} = require('express')

const PeopleController = require('../Controllers/PeopleController')

// iniciar o conjunto de métodos router do express
const router = Router()

router.get('/people', PeopleController.getAll)

router.get('/people/:id', PeopleController.getById)

router.post('/people', PeopleController.post)

router.put('/people/:id', PeopleController.update)

router.delete('/people/:id', PeopleController.delete)

module.exports = router