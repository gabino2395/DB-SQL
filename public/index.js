

const server = io().connect()
const render = (productos) => {

    let listado = document.querySelector('#listado')
    let html = productos.map(prod => {
        return `<li>
            <strong>Nombre: ${prod.name}</strong>
            <em>Precio: ${prod.price}</em>
            <img  class ="product-image"src=" ${prod.thumbnail}" alt="">

        </li>`
    })
    listado.innerHTML = html.join(' ')
}

const addProduct = (e) => {
    const name= document.querySelector('#name').value
    const price = document.querySelector('#price').value
    const thumbnail = document.querySelector('#thumbnail').value


    const producto = { name, price, thumbnail }
    server.emit('producto-nuevo', producto, (id) => {
    })
    return false
}

const renderMensajes = (usuarios) => {
    let fyh = new Date().toLocaleString()
    let mensajes = document.querySelector('#mensajes')
    let html = usuarios.map(user => {
        return `<li> Nombre:  ${user.mail} <em>Mensaje: ${user.message}</em> ${fyh}
<br>   </li>`
    })
    mensajes.innerHTML = html.join(' ')
}

const addUser = (e) => {
    const mail = document.querySelector('#mail').value
    const message = document.querySelector('#message').value

    const usuario = { mail, message }
    server.emit('user-nuevo', usuario)
    return false
}

server.on('mensaje-productos', mensaje => {
    render(mensaje.productos)
})


server.on('mensaje-usuario', mensaje => {
    renderMensajes(mensaje.usuarios)
})