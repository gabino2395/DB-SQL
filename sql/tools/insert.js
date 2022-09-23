const { options } = require('./DataBase/connectionDB')
//insertando productos a la tabla
const knex = require('knex')(options)
// const arrayCars = [
//     {
//         name: 'BMW',
//         price: 20000

//     },
//     {
//         name: 'Toyota',
//         price: 23000

//     },
//     {
//         name: 'AUDI',
//         price: 20500

//     },
//     {
//         name: 'Ferrari',
//         price: 50000

//     },
//     {
//         name: 'Porsche',
//         price: 30000

//     }

// ]
// knex('cars').insert(arrayCars)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => knex.destroy())

//definimos la tabla y luego el array de productos
//como es una promesa le agregamos el .then .catch
const productos = [
    { name: "skate", codigo: "a101", precio: 200, stock: 20 },
    { name: "remera", codigo: "a102", precio: 300, stock: 50 },
    { name: "platos", codigo: "a103", precio: 400, stock: 50 },
    { name: "lavarropas", codigo: "a104", precio: 500, stock: 40 }

]
knex('ecommerce').insert(productos)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => knex.destroy())