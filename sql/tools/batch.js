const { options } = require('../DataBase/connectionDB')
const knex = require('knex')(options)


const batch = async () => {

    try {
        console.log('--> Borrando todos los autos')
        await knex('cars').del()

        console.log('--> Insertamos autos')
        await knex('cars').insert([

            { name: 'BMW', price: 20000 },
            { name: 'Toyota', price: 23000 },
            { name: 'AUDI', price: 20500 },
            { name: 'Ferrari', price: 50000 },
            { name: 'Porsche', price: 30000 }

        ])

        console.log('--> leemos todos los autos')
        let rows = await knex().from('cars').select('*')
        for (row of rows) console.log(row)

        console.log('--> Insertamos un auto mas')
        await knex('cars').insert({ name: 'Nissan', price: 20000 })

        console.log('--> Leemos los autos actualizados')
        rows = await knex().from('cars').select('*')
        for (row of rows) console.log(`${row.name} - ${row.price}`)





    } catch (error) {
        console.log(error)
    }
    finally {
        knex.destroy()
    }

}
batch()