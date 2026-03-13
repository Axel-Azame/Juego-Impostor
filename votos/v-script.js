const items = document.querySelectorAll('.usuario');
const confirmacion = document.getElementById('contenedor-confirmacion');
const btnConfirmar = document.getElementById('confirmar');
const btnCancelar = document.getElementById('cancelar');
var bandera = false;


var datos = null;
let itemSeleccionado = null;

items.forEach(item => {
    item.addEventListener('click', () => {
        itemSeleccionado = item;
        confirmacion.style.display = 'flex';

        // Actualizar el nombre en el modal
        const nombre = item.querySelector('p').textContent;
        document.getElementById('nombre-jugador').textContent = nombre;
    });
});

// Evento Confirmar (se define una sola vez)
btnConfirmar.addEventListener('click', () => {
    if (itemSeleccionado) {
        itemSeleccionado.style.display = 'none';
        confirmacion.style.display = 'none';
        cantjugadores--;
        document.getElementById('contenedor-rol-expulsado').style.display = 'flex';
        document.getElementById('nombre-jugador-expulsado').textContent = itemSeleccionado.querySelector('p').textContent;
        for (let i = 0; i < datos.length; i++) {
            //se comprueba el nombre del jugador expulsado con el nombre del jugador en el array
            if (datos[i].nombre == itemSeleccionado.querySelector('p').textContent) {
                if (datos[i].rol == 'Impostor') {
                    document.getElementById('rol-expulsado-texto').style.color = 'rgba(214, 30, 30, 1)';
                } else {
                    document.getElementById('rol-expulsado-texto').style.color = 'rgba(17, 195, 20, 1)';
                }
                document.getElementById('rol-expulsado-texto').textContent = datos[i].rol;
                break;
            }

        }

        itemSeleccionado = null; // Limpiar selección
    }
    confirmacion.style.display = 'none';
    // se informa rol del expulsado
    () => {

    }
});

document.getElementById('boton-continuar').addEventListener('click', () => {
    document.getElementById('contenedor-rol-expulsado').style.display = 'none';
    if (document.getElementById('rol-expulsado-texto').textContent == 'Impostor') {
        bandera = true;
    }
    itemSeleccionado = null; // Limpiar selección
    finalizar();

});

function finalizar() {
    console.log(cantjugadores);
    document.getElementById('nombre-impostor').querySelector('span').style.color = 'rgba(214, 30, 30, 1)';
    if (cantjugadores == 2) {
        document.getElementById('contenedor-finalizar').style.display = 'flex';
        document.getElementById('ganador').querySelector('span').textContent = 'Impostores';
        document.getElementById('ganador').querySelector('span').style.color = 'rgba(214, 30, 30, 1)';
        for (let i = 0; i < datos.length; i++) {
            if (datos[i].rol == 'Impostor') {
                document.getElementById('nombre-impostor').querySelector('span').textContent = datos[i].nombre;
                break;
            }
        }

    }
    if (bandera) {
        document.getElementById('contenedor-finalizar').style.display = 'flex';
        document.getElementById('ganador').querySelector('span').textContent = 'Tripulantes';
        document.getElementById('ganador').querySelector('span').style.color = 'rgb(17, 195, 20)';
        for (let i = 0; i < datos.length; i++) {
            if (datos[i].rol == 'Impostor') {
                document.getElementById('nombre-impostor').querySelector('span').textContent = datos[i].nombre;
                break;
            }
        }
    }
}

// Evento Cancelar (se define una sola vez)
btnCancelar.addEventListener('click', () => {
    itemSeleccionado = null; // Limpiar selección
    confirmacion.style.display = 'none';
});



function mostrarUsuarios() {
    const datosGuardados = localStorage.getItem('guard2');
    if (datosGuardados) {
        datos = JSON.parse(datosGuardados);
        console.log(datos.length);
    }
    items.forEach((item, index) => {
        if (index < datos.length) {
            item.style.display = 'flex';
            // Actualizar el nombre en el elemento p
            let p = item.querySelector('p');
            if (p) {
                p.textContent = datos[index].nombre;
            }
        }
    });
    cantjugadores = datos.length;
}

mostrarUsuarios();

