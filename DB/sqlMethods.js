const { options } = require('./mysqlDB/connectionDB')
const knex = require('knex')(options)

class DataMethod {
    constructor(ruta) {
        this.ruta = ruta
    }



    crearTabla = async (nombreTabla) => {
        try {
            await knex.schema.createTable(nombreTabla, table => {
                table.increments('id')
                table.string('name')
                table.integer('price')
                table.string('thumbnail')

            })
            console.log('tabla creada')
        } catch (error) {
            console.log(error)
        }

    }



        getAll(){

            try {
                console.log('--> Leemos los autos actualizados')
                rows = await knex().from('products').select('*')
                for (row of rows) console.log(`${row.name} - ${row.price}`)


            } catch (error) {
                console.log(error)
            }

        }




}