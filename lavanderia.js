const prompt = require('prompt-sync')();

const cantidadClientes = parseInt(prompt("Cuantos clientes vas a registrar hoy?:"));
const costoPorHora = 5000;
let acumuladores = 0;
let contadorDescuentos = 0;

for (let i = 1; i <= cantidadClientes; i++) {

    const nombreCliente = prompt(`Nombre del Cliente ${i}:`);
    const horasAlquiladas = parseInt(prompt(`Horas a alquilar para ${nombreCliente}:`));

    const costoTotal = horasAlquiladas * costoPorHora;
    let descuento = 0;
    let totalPagar;

    if (horasAlquiladas > 12) {
        descuento = costoTotal * 0.30;
        totalPagar = costoTotal - descuento;
        contadorDescuentos++;            
    } else {
        descuento = 0;
        totalPagar = costoTotal;
    }

   
    const mensajeDescuento = horasAlquiladas > 12 ? "CON DESCUENTO" : "SIN DESCUENTO";

    console.log(`\n--- CLIENTE ${i}: ${nombreCliente} ---`);
    console.log(`Horas alquiladas: ${horasAlquiladas}`);
    console.log(`Subtotal: $${costoTotal.toLocaleString('es-CO')}`);
    console.log(`Descuento (30%): $${descuento.toLocaleString('es-CO')} — ${mensajeDescuento}`);
    console.log(`Total a pagar: $${totalPagar.toLocaleString('es-CO')}`);

    acumuladores += totalPagar;          // ✅ += no +-
}

console.log("\n=== RESUMEN DEL DÍA ===");
console.log(`Clientes atendidos: ${cantidadClientes}`);
console.log(`Ingreso total del día: $${acumuladores.toLocaleString('es-CO')}`);
console.log(`Clientes con descuento: ${contadorDescuentos}`);