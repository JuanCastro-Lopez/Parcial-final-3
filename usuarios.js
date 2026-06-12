const tabla = document.getElementById("tablaUsuarios")

let usuarios = JSON.parse(localStorage.getItem("usuarios"))

if (usuarios === null) {
    usuarios = [];
}

usuarios.forEach((usuario, index) => {

    tabla.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.telefono}</td>
        </tr>
    `;

});