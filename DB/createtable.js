const { options } = require('./mysqlDB/connectionDB')
const knex = require('knex')(options)


// const crearTabla =  async (nombreTabla) => {
//     try {
//         await knex.schema.createTable(nombreTabla, table => {
//             table.increments('id')
//             table.string('name')
//             table.integer('price')
//             table.string('thumbnail')

//         })
//         console.log('tabla creada')
//     } catch (error) {
//         console.log(error)
//     }


// }
// crearTabla('products')