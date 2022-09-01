const { options } = require('./DB/mysqlDB/connectionDB')
const knex = require('knex')(options)


class Contenedor {
    constructor() {
        this.tableName = 'products'
    }

    async getAll() {
        try {
            return await knex.from(this.tableName)
        } catch (error) {
            console.log('no se encontro el archivo', error)
            return []
        }

    }
    async deleteAll() {
        try {
            await knex.from(this.tableName).del()
            console.log('archivo eleminado')
        } catch (error) {
            console.log('no se encontro el archivo', error)
        }
    }

    async save(obj) {
        try {
            return await knex.from(this.tableName).insert(obj)
        } catch (error) {
            console.log('no se encontro el archivo', error)
            return undefined
        }
    }

}

module.exports = Contenedor