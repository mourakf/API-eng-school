// importar a rota para ser gerenciada no index
const people = require('./peopleRoutes')
const classes = require('./classesRoute')
const levels = require('./levelsRoute')
module.exports = app => {
    // utilizar o people e enviar para o index da api
    app.use(people, classes, levels)


}