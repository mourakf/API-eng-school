const db = require('../models')

class LevelsController {
    static async getAll(req, res) {
        try {
            const result = await db.Levels.findAll()
            res.status(200).send(result).end()

        } catch (error) {
            res.status(500).send(error).end()
        }
    }

    static async getById(req, res) {
        try {
            const id = req.params.id
            const getIdResult = await db.Levels.findAll({
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
    static async update(req, res) {
        try {
            const id = req.params.id
            const data = {
                desc_level: req.body.desc_level
            }
            await db.Levels.update(data, {
                where: {
                    id: id
                }
            })
            return res.status(204).send('Registro atualizao').end()
        } catch (error) {
            res.status(500).send(error.message).end()
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id
            const deleteResult = await db.Levels.destroy({
                where: {
                    id: id
                }
            })
            if (deleteResult === 0) {
                return res.status(404).send({
                    msg: "Registro não existente"
                }).end()
            }
            return res.status(204).end()

        } catch (error) {
            res.status(500).end()
        }
    }
}

module.exports = LevelsController