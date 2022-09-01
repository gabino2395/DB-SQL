const { options } = require('./sqlite3/connectionSQLITE')

const knex = require('knex')(options)

// knex.schema.createTable
//     ('users', table => {
//         table.string('email')
//         table.string('message')



//     })
//     .then(() => console.log('created table'))
//     .catch((err) => console.log(err))

    const crearTabla = async (nombreTabla) => {
    try {
        await knex.schema.createTable(nombreTabla, table => {
            table.string('email')
            table.string('message')
    
        })
        console.log('tabala creada')
    } catch (error) {
        console.log(error)
    }
    }
    crearTabla('users')