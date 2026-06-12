const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function (e) {

    e.preventDefault()

    const nombre = document.getElementById("nombre").value
    const correo = document.getElementById("correo").value
    const password = document.getElementById("password").value
    const telefono = document.getElementById("telefono").value

    if (!validarNombre(nombre)) {
        alert("Nombre inválido");
        return;
    }

    function validarNombre(nombre) {
        const regex = /^[a-zA-Z\s]+$/
        return regex.test(nombre)
    }


    if (!validarCorreo(correo)) {
        alert("Correo inválido")
        return;
    }

    function validarCorreo(correo) {
        const regex = /^\S+@\S+\.\S+$/
        return regex.test(correo)
    }

    if (password.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres");
        return;
    }

    if (telefono.length < 10 || telefono.length > 10) {
        alert("Teléfono inválido");
        return;
    }

    const usuario = {
        nombre,
        correo,
        telefono
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    window.location.href = "usuarios.html";

}
);