const database = require('../models/')

class PeopleController {
    // sem funcao construtura
    // metodo com req e res
    // static: chamar o método sem ter que criar uma nova instância de pessoaController
    static async getAll(req, res) {
        try {
            const getAllResult = await database.People.findAll()
            return res.status(200).json(getAllResult).end()
        } catch (error) {
            // retorna a mensagem de erro
            res.status(500).send(error.message).end()
        }
    }
    static async getById(req, res) {
        try {
            const id = req.params.id
            const getIdResult = await database.People.findAll({
                where: {
                    id: id
                }
            })
            if (getIdResult.length <= 0) {
                return res.status(404).send("Id nao existente")
            } else {
                return res.status(200).send(getIdResult).end()
            }
        } catch (error) {
            res.status(500).send(error.message).end()
        }
    }

    static async post(req, res) {
        try {
            const data = {
                names: req.body.names,
                active: req.body.active,
                email: req.body.email,
                roles: req.body.roles
            }
            const postResult = await database.People.create(data)
            res.status(201).send(postResult).end()
        } catch (error) {
            res.status(500).send(error.message).end()
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id
            const data = {
                names: req.body.names,
                active: req.body.active,
                email: req.body.email,
                roles: req.body.roles
            }
            const updateRes = await database.People.update(data, {
                where: {
                    id: id
                }
            })
            return res.status(204).end()
        } catch (error) {
            res.status(500).send(error.message).end()
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id
            const deleteResult = await database.People.destroy({
                where: {
                    id: id
                }
            })
            if (deleteResult === 0) {
                return res.status(404).end()
            }
            return res.status(204).end()

        } catch (error) {
            res.status(500).end()
        }
    }
}


module.exports = PeopleController