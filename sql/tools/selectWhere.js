const { options } = require('./DataBase/connectionDB')
const knex = require('knex')(options)

//seleccionando productos con filtros
//priemro hacemos el filtro con la condicion y luego como lo queremos ordeando con "orderBy"
knex.from('cars').select("*").where('price','>',100000).orderBy('id', 'desc')
.then(resp=>console.log(resp))
.catch(err => console.log(err))
.finally(()=>knex.destroy)
