const prompt = require('prompt-sync')();

const salarioMinimo = 1300000;
const cantidadPersonas = parseInt(prompt("Cuantas personas va a registrar?: "));

let contBeneficiarios60_80 = 0;
let contBeneficiariosMayor80 = 0;
let contNoAplica = 0;
let presupuestoTotal = 0;

for (let i = 1; i <= cantidadPersonas; i++) {

    const nombre = prompt(`Nombre completo persona ${i}: `);
    const edad = parseInt(prompt(`Edad de ${nombre}: `));

    let subsidio = 0;
    let porcentaje = 0;

    if (edad >= 60 && edad <= 80) {
        porcentaje = 12;
        subsidio = salarioMinimo * 0.12;
        contBeneficiarios60_80++;
        presupuestoTotal += subsidio;

    } else if (edad > 80) {
        porcentaje = 15;
        subsidio = salarioMinimo * 0.15;
        contBeneficiariosMayor80++;
        presupuestoTotal += subsidio;

    } else {
        contNoAplica++;
    }

    const categoria = edad >= 60 && edad <= 80 ? "Adulto Mayor"
                    : edad > 80                ? "Adulto Mayor Senior"
                    : "No aplica";

    console.log(`\n--- PERSONA ${i}: ${nombre} ---`);
    console.log(`Edad: ${edad} anos`);
    console.log(`Categoria: ${categoria}`);

    if (edad >= 60) {
        console.log(`Subsidio (${porcentaje}%): $${subsidio.toLocaleString('es-CO')}`);
    } else {
        console.log(`No aplica al programa.`);
    }
}

const totalBeneficiarios = contBeneficiarios60_80 + contBeneficiariosMayor80;
const subsidio60_80 = salarioMinimo * 0.12;
const subsidio80mas = salarioMinimo * 0.15;

console.log("\n=== INFORME ALCALDIA DE ARMENIA ===");
console.log(`Total registrados: ${cantidadPersonas}`);
console.log(`Beneficiarios (60-80 anos): ${contBeneficiarios60_80} - Subsidio: $${subsidio60_80.toLocaleString('es-CO')} c/u`);
console.log(`Beneficiarios (>80 anos): ${contBeneficiariosMayor80} - Subsidio: $${subsidio80mas.toLocaleString('es-CO')} c/u`);
console.log(`No aplican: ${contNoAplica}`);
console.log(`Total beneficiarios: ${totalBeneficiarios}`);
console.log(`PRESUPUESTO TOTAL: $${presupuestoTotal.toLocaleString('es-CO')}`);
