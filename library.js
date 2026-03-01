const prompt = require('prompt-sync')();

const multaDiaria = 1500;
const multaAdicional = 10000;
const diasEstandar = 7;

const cantidadUsuarios = parseInt(prompt("Cuantos usuarios van a realizar devoluciones hoy?: "));

let totalMultas = 0;
let totalLibros = 0;
let librosConRetraso = 0;
let librosPuntuales = 0;

for (let i = 1; i <= cantidadUsuarios; i++) {

    const nombreUsuario = prompt(`\nNombre del usuario ${i}: `);

    // Validacion con while: no puede devolver mas de 3 libros
    let cantidadLibros = 0;
    while (cantidadLibros < 1 || cantidadLibros > 3) {
        cantidadLibros = parseInt(prompt(`Cantidad de libros a devolver (1-3): `));
        if (cantidadLibros < 1 || cantidadLibros > 3) {
            console.log("Error: solo puede devolver entre 1 y 3 libros.");
        }
    }

    let multaUsuario = 0;

    // For anidado: un ciclo por cada libro
    for (let j = 1; j <= cantidadLibros; j++) {

        const diasPrestamo = parseInt(prompt(`Libro ${j} - Dias que lo tuvo: `));
        const diasRetraso = diasPrestamo > diasEstandar ? diasPrestamo - diasEstandar : 0;

        let multaLibro = 0;

        if (diasRetraso === 0) {
            multaLibro = 0;
            librosPuntuales++;
        } else if (diasRetraso <= 15) {
            multaLibro = diasRetraso * multaDiaria;
            librosConRetraso++;
        } else {
            multaLibro = (diasRetraso * multaDiaria) + multaAdicional;
            librosConRetraso++;
        }

        multaUsuario += multaLibro;
        totalLibros++;

        console.log(`\n  -- Libro ${j} --`);
        console.log(`  Dias de prestamo: ${diasPrestamo}`);
        console.log(`  Dias de retraso: ${diasRetraso}`);
        console.log(`  Multa: $${multaLibro.toLocaleString('es-CO')}`);
    }

    // Operador ternario para clasificar usuario
    const estadoUsuario = multaUsuario === 0 ? "PUNTUAL" : "CON RETRASO";

    totalMultas += multaUsuario;

    console.log(`\n--- RESUMEN USUARIO: ${nombreUsuario} ---`);
    console.log(`Libros devueltos: ${cantidadLibros}`);
    console.log(`Estado: ${estadoUsuario}`);
    console.log(`Multa total: $${multaUsuario.toLocaleString('es-CO')}`);
}

console.log("\n=== RESUMEN DEL DIA - BIBLIOTECH ===");
console.log(`Total usuarios: ${cantidadUsuarios}`);
console.log(`Total libros devueltos: ${totalLibros}`);
console.log(`Libros puntuales: ${librosPuntuales}`);
console.log(`Libros con retraso: ${librosConRetraso}`);
console.log(`Multas recaudadas: $${totalMultas.toLocaleString('es-CO')}`);