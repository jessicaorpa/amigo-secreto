// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    let amigos = [];

    // Función para agregar un amigo
    window.agregarAmigo = function () {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    };

    // Función para sortear un amigo
    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agregue al menos un nombre.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.textContent = `🎉 El amigo secreto es: ${amigos[indiceAleatorio]} 🎉`;
    };

    // Función para actualizar la lista de amigos en pantalla
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((amigo) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }
});
