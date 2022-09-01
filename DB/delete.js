const { options } = require('./mysqlDB/connectionDB')
const knex = require('knex')(options)


// knex.from('ecommerce').del()
// .then(resp=>console.log(resp))
// .catch(err => console.log(err))
// .finally(()=>knex.destroy)