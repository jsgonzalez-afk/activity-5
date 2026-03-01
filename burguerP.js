const prompt = require('prompt-sync')();

let totalCuenta = 0;
let totalCombos = 0;
let contadorCombo1 = 0;
let contadorCombo2 = 0;
let contadorCombo3 = 0;
let opcion;

do {
    console.log("\n=== BURGER PALACE ===");
    console.log("1. Clasica      - $15.000");
    console.log("2. Doble Poder  - $22.000");
    console.log("3. Mega Fest    - $35.000");
    console.log("4. Finalizar pedido");

    opcion = parseInt(prompt("Seleccione combo: "));

    if (opcion === 1) {
        const precioCombo = 15000;
        const cantidadCombo = parseInt(prompt("Cantidad: "));
        const subtotal = precioCombo * cantidadCombo;
        totalCuenta += subtotal;
        totalCombos += cantidadCombo;
        contadorCombo1 += cantidadCombo;
        console.log(`Combo: Clasica`);
        console.log(`Cantidad: ${cantidadCombo}`);
        console.log(`Subtotal: $${subtotal.toLocaleString('es-CO')}`);
        console.log(`Total acumulado: $${totalCuenta.toLocaleString('es-CO')}`);

    } else if (opcion === 2) {
        const precioCombo = 22000;
        const cantidadCombo = parseInt(prompt("Cantidad: "));
        const subtotal = precioCombo * cantidadCombo;
        totalCuenta += subtotal;
        totalCombos += cantidadCombo;
        contadorCombo2 += cantidadCombo;
        console.log(`Combo: Doble Poder`);
        console.log(`Cantidad: ${cantidadCombo}`);
        console.log(`Subtotal: $${subtotal.toLocaleString('es-CO')}`);
        console.log(`Total acumulado: $${totalCuenta.toLocaleString('es-CO')}`);

    } else if (opcion === 3) {
        const precioCombo = 35000;
        const cantidadCombo = parseInt(prompt("Cantidad: "));
        const subtotal = precioCombo * cantidadCombo;
        totalCuenta += subtotal;
        totalCombos += cantidadCombo;
        contadorCombo3 += cantidadCombo;
        console.log(`Combo: Mega Fest`);
        console.log(`Cantidad: ${cantidadCombo}`);
        console.log(`Subtotal: $${subtotal.toLocaleString('es-CO')}`);
        console.log(`Total acumulado: $${totalCuenta.toLocaleString('es-CO')}`);

    } else if (opcion === 4) {
        console.log("\nFinalizando pedido...");

    } else {
        console.log("Opción no válida. Por favor, seleccione una opción del menú.");
    }

} while (opcion !== 4);

console.log("\n=== CUENTA FINAL ===");
console.log(`Combos Clasica: ${contadorCombo1}`);
console.log(`Combos Doble Poder: ${contadorCombo2}`);
console.log(`Combos Mega Fest: ${contadorCombo3}`);
console.log(`Total combos: ${totalCombos}`);
console.log(`Total a pagar: $${totalCuenta.toLocaleString('es-CO')}`);