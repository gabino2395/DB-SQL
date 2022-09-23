const { options } = require('./DataBase/connectionDB')
const knex = require('knex')(options)
//seleccionando  productos a la tabla

// knex.from('cars').select('*')
//     .then(resp => {
//         for (obj of resp) {
//             console.log(obj.price)
//         }
//     })
    // .catch(err => console.log(err))
    knex.from('ecommerce').select('*')
    .then(resp => {
        for (obj of resp) {
            console.log(obj.precio)
        }
    })
    .catch(err => console.log(err))