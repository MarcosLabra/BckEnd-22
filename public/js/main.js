
let products = [
];

fetch("/api/productos-test")
    .then(response => response.json())
    .then(data => {
        products = data;

        renderTable(data);
    })

const table = document.getElementById("table");

function renderTable(data) {
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


