const lugares = [
    "Casa", "Oficina", "Escuela", "Hospital", "Parque",
    "Playa", "Montaña", "Bosque", "Río", "Lago",
    "Supermercado", "Centro comercial", "Restaurante", "Cafetería", "Bar",
    "Biblioteca", "Museo", "Cine", "Teatro", "Estadio",
    "Aeropuerto", "Estación de tren", "Estación de autobús", "Puerto", "Garaje",
    "Jardín", "Balcón", "Terraza", "Patio", "Cocina",
    "Sala", "Comedor", "Dormitorio", "Baño", "Sótano",
    "Ático", "Pasillo", "Vestíbulo", "Ascensor", "Escalera",
    "Farmacia", "Banco", "Correos", "Panadería", "Carnicería",
    "Fruteria", "Verdulería", "Peluquería", "Gimnasio", "Piscina",
    "Iglesia", "Plaza", "Calle", "Avenida", "Carretera", "Autopista",
    "Puente", "Túnel", "Rotonda", "Semáforo", "Parada de bus",
    "Parque infantil", "Cancha de fútbol", "Pista de atletismo", "Pista de tenis", "Campo de golf",
    "Granja", "Huerto", "Invernadero", "Establo", "Gallinero",
    "Fábrica", "Taller", "Almacén", "Oficina postal", "Comisaría",
    "Bomberos", "Guardería", "Colegio", "Universidad", "Academia",
    "Hotel", "Hostal", "Camping", "Cabaña", "Apartamento",
    "Edificio", "Rascacielos", "Chalet", "Piso", "Duplex",
    "Trópico", "Desierto", "Polo Norte", "Polo Sur", "Sabana",
    "Volcán", "Cueva", "Cascada", "Isla", "Peninsula"
];
const objetos = [
    "Mesa", "Silla", "Cama", "Armario", "Sofá",
    "Televisor", "Teléfono", "Computadora", "Tablet", "Reloj",
    "Lámpara", "Ventilador", "Espejo", "Cuadro", "Alfombra",
    "Cortina", "Cojín", "Manta", "Almohada", "Sábana",
    "Toalla", "Jabón", "Champú", "Cepillo", "Peine",
    "Cuchara", "Tenedor", "Cuchillo", "Plato", "Vaso",
    "Taza", "Olla", "Sartén", "Cacerola", "Tetera",
    "Refrigerador", "Horno", "Microondas", "Lavadora", "Secadora",
    "Aspiradora", "Escoba", "Trapeador", "Cubeta", "Detergente",
    "Libro", "Cuaderno", "Lápiz", "Bolígrafo", "Sacapuntas",
    "Goma", "Regla", "Tijeras", "Pegamento", "Grapadora",
    "Maleta", "Mochila", "Bolso", "Cartera", "Paraguas",
    "Par de zapatos", "Zapatilla", "Chaqueta", "Abrigo", "Suéter",
    "Camisa", "Pantalón", "Vestido", "Falda", "Calcetines",
    "Gafas", "Sombrero", "Guantes", "Bufanda", "Cinturón",
    "Llaves", "Monedero", "Documentos", "Pasaporte", "Carnet",
    "Cámara", "Radio", "Altavoz", "Auriculares", "Cargador",
    "Batería", "Enchufe", "Cable", "Bombilla", "Interruptor",
    "Bicicleta", "Automóvil", "Motocicleta", "Patín", "Patines",
    "Balón", "Raqueta", "Pelota", "Dardo", "Tablero de juego"
];
const animales = [
    "Perro", "Gato", "Pájaro", "Pez", "Hamster",
    "Conejo", "Tortuga", "Cobaya", "Huron", "Ratón",
    "Vaca", "Cerdo", "Oveja", "Cabra", "Caballo",
    "Burro", "Mula", "Gallo", "Gallina", "Pato",
    "Pavo", "Ganso", "Paloma", "Golondrina", "Gorrión",
    "Águila", "Búho", "Cuervo", "Loro", "Canario",
    "Elefante", "León", "Tigre", "Leopardo", "Jaguar",
    "Oso", "Lobo", "Zorro", "Coyote", "Hiena",
    "Jirafa", "Cebra", "Rinoceronte", "Hipopótamo", "Búfalo",
    "Mono", "Chimpancé", "Gorila", "Orangután", "Lemur",
    "Canguro", "Koala", "Wombat", "Diablo de Tasmania", "Ornitorrinco",
    "Delfín", "Ballena", "Tiburón", "Foca", "Pingüino",
    "Cocodrilo", "Caimán", "Serpiente", "Lagarto", "Camaleón",
    "Iguana", "Salamandra", "Rana", "Sapo", "Ajolote",
    "Mariposa", "Abeja", "Hormiga", "Mosquito", "Araña",
    "Escorpión", "Ciempiés", "Mariquita", "Saltamontes", "Grillo",
    "Cangrejo", "Langosta", "Camarón", "Pulpo", "Calamar",
    "Estrella de mar", "Erizo de mar", "Medusa", "Anémona", "Coral",
    "Caracol", "Babosa", "Lombriz", "Gusano", "Oruga",
    "Murciélago", "Topo", "Erizo", "Armadillo", "Perezoso",
    "Mapache", "Zorrillo", "Tejón", "Nutria", "Castor"
];
const comida = [
    "Pan", "Arroz", "Pasta", "Pizza", "Hamburguesa",
    "Hot dog", "Sándwich", "Ensalada", "Sopa", "Guiso",
    "Pollo", "Carne", "Pescado", "Cerdo", "Cordero",
    "Huevo", "Leche", "Queso", "Yogur", "Mantequilla",
    "Manzana", "Plátano", "Naranja", "Fresa", "Uva",
    "Sandía", "Melón", "Piña", "Mango", "Pera",
    "Durazno", "Cereza", "Kiwi", "Limón", "Aguacate",
    "Tomate", "Pepino", "Zanahoria", "Lechuga", "Cebolla",
    "Papa", "Ajo", "Espinaca", "Brócoli", "Coliflor",
    "Calabacín", "Berenjena", "Pimiento", "Champiñón", "Maíz",
    "Frijoles", "Lentejas", "Garbanzos", "Arvejas", "Soya",
    "Aceite", "Vinagre", "Sal", "Pimienta", "Azúcar",
    "Miel", "Mermelada", "Mantequilla de maní", "Nueces", "Almendras",
    "Galleta", "Pastel", "Helado", "Chocolate", "Caramelo",
    "Café", "Té", "Jugo", "Refresco", "Agua",
    "Cerveza", "Vino", "Licor", "Whisky", "Ron",
    "Taco", "Burrito", "Tamal", "Arepa", "Empanada",
    "Sushi", "Ramen", "Curry", "Paella", "Lasagna",
    "Alitas", "Nuggets", "Papas fritas", "Palomitas", "Nachos",
    "Cereal", "Avena", "Tostada", "Tortilla", "Crepa",
    "Flan", "Gelatina", "Pudín", "Bizcocho", "Donut"
];


const datosJuego = localStorage.getItem('guard');
const objDatos = JSON.parse(datosJuego);
const cantJug = objDatos.cantidadJugadores; //CANTIDAD DE JUGADORES
const rolUndercover = objDatos.rolUndercover; //ROL UNDERCOVER
const listaCategoriaSeleccionadas = objDatos.categorias; //LISTA DE CATEGORIAS SELECCIONADAS

let nombresJugadores = [];
const participantes = [];
function objectArray() {
    let nombres = objDatos.nombresJugadores;
    for (let i = 0; i < cantJug; i++) {
        nombresJugadores.push(nombres[i]);
    }
}

function mostrarCartas() {
    for (let i = 1; i <= cantJug; i++) {
        document.getElementById('carta-' + i).style.display = 'block';
    }
}

function mezclarRoles(roles) {
    for (let i = roles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [roles[i], roles[j]] = [roles[j], roles[i]];
    }
    return roles;
}
function palabraClave() {
    let categoria = listaCategoriaSeleccionadas[Math.floor(Math.random() * listaCategoriaSeleccionadas.length)];
    let palabra = [];
    switch (categoria) {
        case 'lugares':
            palabra.push(lugares[Math.floor(Math.random() * lugares.length)]);
            palabra.push('Lugares');
            break;
        case 'objetos':
            palabra.push(objetos[Math.floor(Math.random() * objetos.length)]);
            palabra.push('Objetos');
            break;
        case 'animales':
            palabra.push(animales[Math.floor(Math.random() * animales.length)]);
            palabra.push('Animales');
            break;
        case 'comida':
            palabra.push(comida[Math.floor(Math.random() * comida.length)]);
            palabra.push('Comida');
            break;

        default:
            break;
    }
    return palabra;
}
function asignarRoles() {
    let roles = [];
    const [palabraClavescrt, categoria] = palabraClave();
    roles.push("Impostor");
    for (let i = 0; i < cantJug - 1; i++) {
        roles.push("Tripulante");
    }
    roles = mezclarRoles(roles);
    nombresJugadores = mezclarRoles(nombresJugadores);

    nombresJugadores.forEach((nombre, index) => {
        participantes.push({
            nombre: nombre,
            rol: roles[index],
            palabra: palabraClavescrt,
            categoria: categoria
        })
        if (participantes[index].rol === "Impostor") {
            participantes[index].palabra = "-----";
        }
    })
    console.log(participantes);
    localStorage.setItem('guard2', JSON.stringify(participantes));
}
mostrarCartas();
objectArray();
asignarRoles();
toggleCarta();

let jugadorActual = 0;
document.getElementById('jugador-actual').textContent = " " + participantes[jugadorActual].nombre;

document.getElementById('boton-siguiente-jugador').addEventListener('click', () => {
    jugadorActual++;
    document.getElementById('cont-Informacion-jugador').style.display = 'none';
    document.getElementById('jugador-actual').textContent = " " + participantes[jugadorActual].nombre;
})

function toggleCarta() {
    const cartas = document.querySelectorAll('.cartas')
    let informacionJugador = document.getElementById('cont-Informacion-jugador')
    let contador = 0;
    cartas.forEach(carta => {
        carta.addEventListener('click', () => {
            carta.classList.toggle('rotar')
            informacionJugador.style.display = 'flex'
            if (contador === cantJug - 1) {
                document.getElementById('contenedor-seleccion').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('boton-votar').style.display = 'block';
                }, 1000);
            }

            if (participantes[contador].rol === "Impostor") {
                document.getElementById('rol').textContent = "Impostor";
                document.getElementById('rol').style.color = "var(--color-impostor)";
                document.getElementById('categoria').textContent = participantes[contador].categoria;
                document.getElementById('palabra').textContent = "-----";
                document.getElementById('palabra').style.color = "var(--color-impostor)";
            } else {
                document.getElementById('rol').style.color = "var(--color-tripulante)";
                document.getElementById('rol').textContent = participantes[contador].rol;
                document.getElementById('categoria').textContent = participantes[contador].categoria;
                document.getElementById('categoria').style.color = "#2fff78";
                document.getElementById('palabra').style.color = "#2fff78";
                document.getElementById('palabra').textContent = participantes[contador].palabra;
            }
            contador++;
            setTimeout(() => {
                carta.style.display = 'none';
            }, 1000);
        })
    })
}