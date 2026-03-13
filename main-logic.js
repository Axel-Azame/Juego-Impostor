const cantJug = document.getElementById('cant-jug');
const mensajeValidacion = document.getElementById('mensaje-texto');
const contenedorValidacion = document.querySelector('.contenedor-validacion');

function actualizarCantJug() {
    console.log("Se activó la función actualizarCantJug");

    //se convierte el valor del select en un numero entero y se comprueba que sea un numero
    const cantidad = parseInt(cantJug.value);
    console.log("Cantidad de jugadores seleccionada: " + cantidad);

    //selecciona todos los campos de jugador
    const camposDeJugador = document.querySelectorAll('.nombre-jugador');

    camposDeJugador.forEach((campo, index) => {

        if (index < cantidad) {
            campo.style.display = 'block';
            campo.querySelector('input').required = true;
        } else {
            campo.style.display = 'none';
            campo.querySelector('input').required = false;
        }
    });
}

function mostrarMensaje(mensaje, tipo) {
    console.log("Se activó la función mostrarMensaje");
    contenedorValidacion.style.display = 'block';
    mensajeValidacion.textContent = mensaje;
    if (tipo === 'error') {
        mensajeValidacion.style.color = 'rgb(120, 1, 1)';
        contenedorValidacion.style.backgroundColor = 'rgb(255, 186, 186)';
    } else {
        mensajeValidacion.style.color = 'rgb(0, 128, 0)';
        contenedorValidacion.style.backgroundColor = 'rgb(186, 255, 186)';
        contenedorValidacion.style.border = '1px solid rgb(186, 255, 186)';
    }
    setTimeout(() => {
        contenedorValidacion.style.display = 'none';
    }, 5000);
}

function guardarConfig() {
    console.log("Se activó la función guardarConfig");
    const cantJug = document.getElementById('cant-jug').value;
    const rolUndercover = document.getElementById('rol-undercover').checked;

    //SE OBTIENEN LAS CATEGORIAS SELECCIONADAS
    const listaCategoriaSeleccionadas = [...document.querySelectorAll('#listaCategoria input:checked')].map(input => input.value);
    console.log("Categorias seleccionadas: " + listaCategoriaSeleccionadas);

    //SE VALIDA QUE SE HAYA SELECCIONADO ALMENOS UNA CATEGORIA
    if (listaCategoriaSeleccionadas.length === 0) {
        mostrarMensaje('Debe seleccionar al menos una categoria', 'error');
        return;
    }
    // OBTENER NOMBRE DE LOS JUGADORES
    const contenedorNombreJugadores = [];
    let error = false;
    for (let i = 0; i < cantJug; i++) {
        if (document.getElementById('nombre-jugador-' + (i + 1)).value === '') {
            document.getElementById('nombre-jugador-' + (i + 1)).style.borderColor = 'red';
            error = true;
        } else {
            document.getElementById('nombre-jugador-' + (i + 1)).style.borderColor = '#4b5563';
        }
        contenedorNombreJugadores[i] = document.getElementById('nombre-jugador-' + (i + 1)).value;
    }

    //SE VALIDA QUE SE HAYA INGRESADO UN NOMBRE PARA CADA JUGADOR
    if (error) {
        mostrarMensaje('Debe ingresar un nombre para cada jugador', 'error');
        return;
    }
    mostrarMensaje('Configuración guardada correctamente', 'exito');

    const datosJuego = {
        cantidadJugadores: cantJug,
        rolUndercover: rolUndercover,
        categorias: listaCategoriaSeleccionadas,
        nombresJugadores: contenedorNombreJugadores
    };
    localStorage.setItem('guard', JSON.stringify(datosJuego));
    setTimeout(() => {
        window.location.href = '../Inicio-juego/inicioJuego.html';
    }, 2000);

}

document.addEventListener('DOMContentLoaded', function () {
    actualizarCantJug();
    const datos = localStorage.getItem('guard');
    if (datos) {
        const objDatos = JSON.parse(datos);
        cantJug.value = objDatos.cantidadJugadores;
        document.getElementById('rol-undercover').checked = objDatos.rolUndercover;

        document.querySelectorAll('#listaCategoria input').forEach((input) => {
            input.checked = objDatos.categorias.includes(input.value);
        });

        for (let i = 0; i < objDatos.cantidadJugadores; i++) {
            document.getElementById('nombre-jugador-' + (i + 1)).value = objDatos.nombresJugadores[i];
        };
        actualizarCantJug();
    }
});
cantJug.addEventListener("change", actualizarCantJug);
document.getElementById('boton-iniciar').addEventListener('click', guardarConfig);

// v.script.js
