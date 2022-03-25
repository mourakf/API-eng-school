const database = require('../models/')

class ClassesControler {
    static async getAll(req, res) {
        try {
            const getAllResult = await database.Classes.findAll()
            return res.status(200).json(getAllResult).end()
        } catch (error) {
            // retorna a mensagem de erro
            res.status(500).send(error.message).end()
        }
    }

    static async getById(req, res) {
        try {
            const id = req.params.id
            const result = await database.Classes.findAll({
                where: {
                    id: id
                }
            })
            if (result.length <= 0) {
                return res.status(404).send("Id nao existente")
            } else {
                return res.status(200).send(result).end()
            }
        } catch (error) {
            res.status(500).send(error.message).end()
        }
    }
    static async post(req, res) {
        try {
            const data = {
                start_date: req.body.start_date
            }
            const postResult = await database.Classes.create(data)
            res.status(201).send(postResult).end()
        } catch (error) {
            res.status(500).send(error.message).end()
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id
            const data = {
                start_date: req.body.start_date
            }
            const updateRes = await database.Classes.update(data, {
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
            const deleteResult = await database.Classes.destroy({
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

module.exports = ClassesControler