const express = require('express')
const app = express()
const routes = require('../api/Routes/index')
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
// instanciar o routes passando o app como parametro para a aplicação rodar

routes(app)

app.listen(3000, () => {
    console.log("Api executando")
})

module.exports = app