const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json("rota")
})

app.listen(3000, () => {
    console.log("Api executando")
})

module.exports = app