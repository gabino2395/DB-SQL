const { options } = require('./DataBase/connectionDB')
const knex = require('knex')(options)

//actualizando productos de una base de datos

// knex.from('cars').where('price',10000).update({
//     price: 50000
// })
// .then(resp=>console.log(resp))
// .catch(err => console.log(err))
// .finally(()=>knex.destroy)

knex.from('ecommerce').where('id',2).update({
    stock: 0
})
.then(resp=>console.log(resp))
.catch(err => console.log(err))
.finally(()=>knex.destroy)