document.getElementById("btnAgregar").addEventListener("click", function () {
    const input = document.getElementById("entradaTexto");
    const texto = input.value.trim();

    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        document.getElementById("contenedorLista").appendChild(li);
        input.value = "";
    } else {
        alert("Por favor, escribe algo.");
    }
});
