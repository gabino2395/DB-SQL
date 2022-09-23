

const server = io().connect()



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
    const name = document.querySelector("#nombre").value;
	const apellido = document.querySelector("#apellido").value;
	const edad = document.querySelector("#edad").value;
	const alias = document.querySelector("#alias").value;
	const avatar = document.querySelector("#avatar").value;

    const usuario = { mail, message, name , apellido, edad, alias, avatar}
    server.emit('user-nuevo', usuario)
    return false
}



server.on('mensaje-usuario', mensaje => {
    renderMensajes(mensaje.usuarios)
})