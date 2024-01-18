document.addEventListener("DOMContentLoaded", function () {
    // Array con las cosas que amas de TIPE
    const cosasQueAmo = [
        { numero: 1, texto: "Tu sonrisa pe", imagen: "imagen1.jpg" },
        { numero: 2, texto: "Tus ojopes", imagen: "imagen2.jpg" },
        { numero: 3, texto: "Cuando te expresaspe", imagen: "imagen3.jpg" },
        { numero: 4, texto: "Cuando te estresaspe", imagen: "imagen4.jpg" },
        { numero: 5, texto: "La forma en la que eres", imagen: "imagen5.jpg" },
        { numero: 6, texto: "Que me escuchaspe", imagen: "imagen6.jpg" },
        { numero: 7, texto: "Que me entiendes pe", imagen: "imagen7.jpg" },
        { numero: 8, texto: "Los momentos esquizofrénicos", imagen: "imagen8.jpg" },
        { numero: 9, texto: "Cuando me cuidaspe y te preocupas por mi pe", imagen: "imagen9.jpg" },
        { numero: 10, texto: "Cuando dices ush", imagen: "imagen10.jpg" },
        { numero: 11, texto: "Cuando dices pe oyeeee", imagen: "imagen11.jpg" },
        { numero: 12, texto: "Tus besopes es mi Cosape favorita", imagen: "imagen12.jpg" },
        { numero: 13, texto: "Tu humor pe", imagen: "imagen13.jpg" },
        { numero: 14, texto: "Cuando cantaspe aunque no te des cuenta", imagen: "imagen14.jpg" },
        { numero: 15, texto: "Cuando me muerdes pe", imagen: "imagen15.jpg" },
        { numero: 16, texto: "Cuando me dejas cargarte pe", imagen: "imagen16.jpg" },
        { numero: 17, texto: "Tus abrazopes", imagen: "imagen17.jpg" },
        { numero: 18, texto: "Los post que me mandas de gatopes", imagen: "imagen18.jpg" },
        { numero: 19, texto: "Que a pesar que te pregunto mil vecespes si me amas pe y que me jures siempre lo haces", imagen: "imagen19.jpg" },
        { numero: 20, texto: "Que te gustanpe las hamburguesas 🤑", imagen: "imagen20.jpg" },
        { numero: 21, texto: "Tu primer besope en las mañanas", imagen: "imagen21.jpg" },
        { numero: 22, texto: "Que cuides a bella 🤑", imagen: "imagen22.jpg" },
        { numero: 23, texto: "Tus combinaciones con Tajín 🤑", imagen: "imagen23.jpg" },
        { numero: 24, texto: "Que me digas pe que me extrañas", imagen: "imagen24.jpg" },
        { numero: 25, texto: "Cuando te estresaspe estudiando", imagen: "imagen25.jpg" },
        { numero: 26, texto: "Cuando dices pe obvio obvio", imagen: "imagen26.jpg" },
        { numero: 27, texto: "Cuando te sale una guayaca de adentro pe", imagen: "imagen27.jpg" },
        { numero: 28, texto: "La forma en la que me tratas", imagen: "imagen28.jpg" },
        { numero: 29, texto: "Tú amorpe, es único en esta vidape y es lo que quiero para siempre", imagen: "imagen29.jpg" }
    ];

    // Función para agregar dinámicamente la lista y las imágenes
    function agregarLista() {
        const lista = document.getElementById("lista");

        cosasQueAmo.forEach((cosa) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${cosa.numero}. ${cosa.texto}<br><img src="${cosa.imagen}" alt="${cosa.texto}">`;
            lista.appendChild(listItem);
        });
    }

    // Llama a la función para agregar la lista cuando se carga la página
    agregarLista();
});
