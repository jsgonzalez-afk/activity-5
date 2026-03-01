const prompt = require('prompt-sync')();

let contMotos = 0;
let contCarros = 0;
let contCamionetas = 0;
let ingresoTotal = 0;
let sumaHoras = 0;
let totalVehiculos = 0;

let opcionMenu = 0;

while (opcionMenu !== 2) {

    console.log("\n=== PARQUIFACIL ===");
    console.log("1. Registrar vehiculo");
    console.log("2. Cerrar jornada");

    opcionMenu = parseInt(prompt("Seleccione opcion: "));

    if (opcionMenu === 1) {

        console.log("\nTipo de vehiculo:");
        console.log("1. Moto     - $2.000/hora");
        console.log("2. Carro    - $4.000/hora");
        console.log("3. Camioneta- $6.000/hora");

        const tipoVehiculo = parseInt(prompt("Tipo de vehiculo: "));
        const horasPermanencia = parseInt(prompt("Horas de permanencia: "));

        let tarifaHora = 0;
        let nombreVehiculo = "";

        if (tipoVehiculo === 1) {
            tarifaHora = 2000;
            nombreVehiculo = "Moto";
            contMotos++;
        } else if (tipoVehiculo === 2) {
            tarifaHora = 4000;
            nombreVehiculo = "Carro";
            contCarros++;
        } else if (tipoVehiculo === 3) {
            tarifaHora = 6000;
            nombreVehiculo = "Camioneta/SUV";
            contCamionetas++;
        } else {
            console.log("Tipo de vehiculo no valido.");
            continue;  // vuelve al inicio del while
        }

        let costoTotal = tarifaHora * horasPermanencia;
        let descuento = 0;
        let totalPagar;

        if (horasPermanencia > 8) {
            descuento = costoTotal * 0.20;
            totalPagar = costoTotal - descuento;
        } else {
            totalPagar = costoTotal;
        }

        const tipoTarifa = horasPermanencia > 8
            ? "TARIFA DIA COMPLETO (20% desc.)"
            : "TARIFA POR HORAS";

        totalVehiculos++;
        ingresoTotal += totalPagar;
        sumaHoras += horasPermanencia;

        console.log(`\n--- VEHICULO REGISTRADO ---`);
        console.log(`Tipo: ${nombreVehiculo}`);
        console.log(`Horas: ${horasPermanencia}`);
        console.log(`Subtotal: $${costoTotal.toLocaleString('es-CO')}`);
        console.log(`Descuento: $${descuento.toLocaleString('es-CO')}`);
        console.log(`Tipo de tarifa: ${tipoTarifa}`);
        console.log(`Total a pagar: $${totalPagar.toLocaleString('es-CO')}`);

    } else if (opcionMenu === 2) {
        console.log("\nCerrando jornada...");

    } else {
        console.log("Opcion no valida.");
    }
}

const promedioHoras = totalVehiculos > 0 ? (sumaHoras / totalVehiculos).toFixed(1) : 0;

console.log("\n=== REPORTE DE CIERRE ===");
console.log(`Total vehiculos: ${totalVehiculos}`);
console.log(`Motos: ${contMotos}`);
console.log(`Carros: ${contCarros}`);
console.log(`Camionetas/SUV: ${contCamionetas}`);
console.log(`Ingreso total: $${ingresoTotal.toLocaleString('es-CO')}`);
console.log(`Promedio horas: ${promedioHoras} horas`);