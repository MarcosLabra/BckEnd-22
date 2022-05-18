let socket = io();

fetch("/api/productos-test")
    .then(response => response.json())
    .then(data => {
        renderTable(data);
    })
    .catch(error => console.log(error));

function renderTable(data) {
    const table = document.getElementById("table");
    data.forEach(element => {
        const tr = document.createElement("tr");
        const tdNombre = document.createElement("td");
        tdNombre.innerHTML = element.name;
        const tdPrecio = document.createElement("td");
        tdPrecio.innerHTML = element.price;
        const tdImagen = document.createElement("td");
        const imagen = document.createElement("img");
        imagen.src = element.image;
        imagen.height = "100";
        tdImagen.appendChild(imagen);
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdImagen);
        table.appendChild(tr);
    });
}

const ingresoMensaje = document.getElementById("ingresoMensaje");
const botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    const mensaje = {
        author: {
            id: ingresoMensaje.children.id.value,
            nombre: ingresoMensaje.children.nombre.value,
            apellido: ingresoMensaje.children.apellido.value,
            edad: ingresoMensaje.children.edad.value,
            alias: ingresoMensaje.children.alias.value,
            avatar: ingresoMensaje.children.avatar.value,
        },
        text: ingresoMensaje.children.text.value
    }
     socket.emit('enviarMensaje', mensaje);
})