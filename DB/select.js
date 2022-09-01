const { options } = require('./mysqlDB/connectionDB')
const knex = require('knex')(options)

// const getAll = async () => {

//     try {
//         console.log('--> Leemos los autos actualizados')
//         rows = await knex.from('products').select('*')
//         for (row of rows) console.log(`${row.name} - ${row.price}`)


//     } catch (error) {
//         console.log(error)
//     }

// }
// getAll()
const productos = [
    { name: "skate", thumbnail: "a101", price: 200 },


]
// knex('products').insert(productos)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => knex.destroy())
// knex.from('products').select('*')
//     .then(resp => {
//         for (obj of resp) {
//             console.log(obj)
//         }
//     })
//     .catch(err => console.log(err))