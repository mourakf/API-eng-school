// importar a rota para ser gerenciada no index
const people = require('./peopleRoutes')


module.exports = app => {
    // utilizar o people e enviar para o index da api
    app.use(people)

}