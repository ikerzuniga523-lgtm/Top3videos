// Dos mensajes de bienvenida
let mensaje = document.getElementById("mensaje");

setTimeout(function() {
    mensaje.textContent = "¡Gracias por visitar mi página!";
}, 3000);


// Cambiar entre modo oscuro y claro
function cambiarModo() {
    document.body.classList.toggle("oscuro");

    let boton = document.getElementById("botonModo");

    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "☀️ Modo claro";
    } else {
        boton.textContent = "🌙 Modo oscuro";
    }
}