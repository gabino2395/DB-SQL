const { options } = require('./DataBase/connectionDB')
const knex = require('knex')(options)

//eliminando productos de una tabla

// knex.from('cars').where('price','>',30000).del()
// .then(resp=>console.log(resp))
// .catch(err => console.log(err))
// .finally(()=>knex.destroy)
knex.from('ecommerce').where('id','=',3).del()
.then(resp=>console.log(resp))
.catch(err => console.log(err))
.finally(()=>knex.destroy)