
//creacion de tablas

const { options } = require('./sqlite3/conntectionSQLITE')

const knex = require('knex')(options)
//aqui creamos de forma hardcodeada
// knex.schema.createTable('users', table => {
//     table.increments('id')
//     table.string('name')
//     table.string('email')
//     table.string('password')
//     table.integer('edad')
// })
// .then(()=>console.log('created table'))
// .catch((err)=>console.log(err))
knex.schema.createTable('ecommerce', table => {
    table.increments('id')
    table.string('name')
    table.string('codigo')
    table.integer('precio')
    table.integer('stock')
})
.then(()=>console.log('created table'))
.catch((err)=>console.log(err))



//aqui hacemos el modelo de creacion en una funcion asincronica
// const crearTabla = (nombreTabla) => {
//     try {
//         await knex.schema.createTable(nombreTabla, table => {
//             table.increments('id')
//             table.string('name')
//             table.integer('price')
//         })
//         console.log('tabala creada')
//     } catch (error) {
//         console.log(error)
//     }


// }