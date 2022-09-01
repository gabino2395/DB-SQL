const fs = require('fs')
// const ProductMethod = require('./ProductMethod1.JS')


class ProductMethod {
    constructor(ruta) {
        this.ruta = ruta
    }

    async save(obj) {
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            if (dataArchivoParse.length) {
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArchivoParse, { ...obj, id: dataArchivoParse.length + 1 }], null, 2))

            } else {

                await fs.promises.writeFile(this.ruta, JSON.stringify([{ ...obj, id: dataArchivoParse.length + 1 }], null, 2))
            }
            return dataArchivoParse.length + 1
            // console.log(`el archivo tiene el id:${dataArchivoParse.length + 1}`)

        } catch (err) {
            console.log(err)
        }
    }
    // traer producto por id
    async getByiD(id) {
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            let producto = dataArchivoParse.find(prodcuto => prodcuto.id === id)
            if (producto) {
                return producto
                console.log(producto)
            } else {
                console.log('no se encontro el producto')
            }

        } catch (err) {
            console.log(err)
        }
    }

    async getAll() {
        try {


            // let dataArchivo = await fs.promises.writeFile(this.ruta, 'utf-8')
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')

            let dataArchivoParse = JSON.parse(dataArchivo)
            // let dataArchivoParse = JSON.parse(JSON.stringify(dataArchivo))
            return dataArchivoParse.length
                ? dataArchivoParse
                :
                console.log('no hay producto')


        } catch (err) {
            console.log(err)
        }
    }
    async #readFileFunction(ruta) {
        let archivo = await fs.promises.readFile(ruta, 'utf-8')
        let archivoParseado = await JSON.parse(archivo)
        return archivoParseado
    }


    async updateById(obj) {

        try {
            let dataArchivo = await this.#readFileFunction(this.ruta, 'utf-8')
            console.log(obj)
            const objIndex = dataArchivo.findIndex(prod => prod.id === obj.id)
            if (objIndex !== -1) {//existe {
                dataArchivo[objIndex] = obj
                await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchivo, null, 2))
                return { msg: 'actualizado el producto' }
            } else {
                // no existe
                return { error: 'no existe el producto' }
            }
            return dataArchivoParse.length + 1


        } catch (error) {
            console.log(error)
        }

    }


    async deleteById(id) {
        console.log(id)
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            let producto = dataArchivoParse.find(producto => producto.id === id)
            if (producto) {
                let dataArchivoParseFiltered = dataArchivoParse.filter(producto => producto.id !== producto.id)
                await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchivoParseFiltered, null, 2), 'utf-8')

                console.log('producto eliminado')
            } else {
                console.log('no se encontro el producto')
            }
        } catch (err) {
            console.log(err)
        }

    }

    async deleteAll() {
        await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2), 'utf-8')
    }

}


module.exports = ProductMethod