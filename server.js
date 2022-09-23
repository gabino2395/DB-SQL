const express = require('express')
const app = express()
const { Server: ServerHttp } = require('http')
const { Server: ServerIo } = require('socket.io')

const { generadorProductos } = require("./utils/generadorProducto");
const Contenedor = require('./utils/Contenedor')


const productosRandoms = generadorProductos();

const products = new Contenedor('products')
const users = new Contenedor('users')

const httpServer = new ServerHttp(app)
const io = new ServerIo(httpServer)

app.get("/api/productos-test", async (req, res) => {
	const producto = await productosRandoms;
	res.render("productos", {
		list: producto,
		listExist: true,
		producto: true
	});
});

app.get("/", async (req, res) => {
	const producto = await productosRandoms;
    res.sendFile('index.html', { root: __dirname })
	res.render("index", {
		titulo: "Productos de Crud",
		list: producto,
		listExist: true,
		producto: true
	});
});

app.use(express.static('public'))



io.on('connection', async (socket) => {
    // const productos = await products.getAll()
    const usuarios = await users.getAll()
	console.log("Se contectó un usuario");

    socket.emit('mensaje-productos', { productos })
    socket.emit('mensaje-usuario', { usuarios })


    // socket.on('producto-nuevo', (producto, cb) => {
    //     productos.push(producto)
    //     products.save(producto)
    //     const mensaje = {
    //         mensaje: 'productos insertado',
    //         productos
    //     }
    //     const id = new Date().getTime()
    //     io.sockets.emit('mensaje-productos', mensaje)
    //     cb(id)
    // })





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


// -------------------------------- INICIO Mensajes cambios por json.
app.get("/api/mensajes/:id", async (req, res) => {
	const { id } = req.params;
	const productoById = await comentarios.getById(id);
	productoById
		? res.json(productoById)
		: res.json({ error: "Producto no encontrado" });
});

app.put("/api/mensajes/:id", async (req, res) => {
	const { id } = req.params;
	const respuesta = await comentarios.updateById(id, req.body);
	res.json(respuesta);
	texts = await comentarios.getAll();
});

app.delete("/api/mensajes/:id", async (req, res) => {
	const { id } = req.params;
	res.json(await comentarios.deleteById(id));
	texts = await comentarios.getAll();
});

app.delete("/api/texts", async (req, res) => {
	res.json(await comentarios.deleteAll());
	texts = await comentarios.getAll();
});
// -------------------------------- FIN Mensajes cambios por json.




})
const port = 3600
httpServer.listen(port, () => console.log(`Example app listening on port ${port}!`))