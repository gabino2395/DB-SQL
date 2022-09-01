const express = require('express')
const app = express()
const { Server: ServerHttp } = require('http')
const { Server: ServerIo } = require('socket.io')

const Contenedor = require('./Contenedor')
const products = new Contenedor('products')
const users = new Contenedor('users')

const httpServer = new ServerHttp(app)
const io = new ServerIo(httpServer)



app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})


io.on('connection', async (socket) => {
    const productos = await products.getAll()
    const usuarios = await users.getAll()

    socket.emit('mensaje-productos', { productos })
    socket.emit('mensaje-usuario', { usuarios })


    socket.on('producto-nuevo', (producto, cb) => {
        productos.push(producto)
        products.save(producto)
        const mensaje = {
            mensaje: 'productos insertado',
            productos
        }
        const id = new Date().getTime()
        io.sockets.emit('mensaje-productos', mensaje)
        cb(id)
    })





    socket.on('user-nuevo', (usuario) => {

        usuarios.push(usuario)
        users.save(usuario)
        const mensaje = {
            mensaje: 'usuario archivado',
            usuarios
        }
        const id = new Date().getTime()

        io.sockets.emit('mensaje-usuario', mensaje)

    })







})
const port = 3600
httpServer.listen(port, () => console.log(`Example app listening on port ${port}!`))