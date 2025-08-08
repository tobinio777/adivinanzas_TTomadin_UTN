import { input } from './utils.mjs';

async function juegoAdivinanza() {
    const letrasPermitidas = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ";
    const letraSecreta = letrasPermitidas.charAt(Math.floor(Math.random() * letrasPermitidas.length));

    let intentosMaximos = 15;
    let intento = 0;
    let adivino = false;

    console.log(" ADIVINA ");
    console.log("Tenes 15 intentos para adivinar la letra.");
  

    while (intento < intentosMaximos && !adivino) {
        let letraUsuario = await input(`Intento ${intento + 1}: Ingresa una letra `);

        if (letraUsuario.length !== 1 || !letrasPermitidas.includes(letraUsuario)) {
            console.log(" Entrada inválida. Ingresa solo una letra permitida.");
            continue;
        }

        intento++;

        if (letraUsuario === letraSecreta) {
            adivino = true;
            break;
        } else {
            console.log(" No es la letra flaco.");
        }
    }

    let puntaje = adivino ? Math.round(((intentosMaximos - intento + 1) / intentosMaximos) * 100) : 0;

    console.log("\n Resultado:");
    if (adivino) {
        console.log(` BIEN AHIII La letra era '${letraSecreta}'.`);
        console.log(` Puntaje: ${puntaje}`);

        if (puntaje >= 80) console.log(" Adivinador Nato");
        else if (puntaje >= 60) console.log(" Adivinador Experto");
        else if (puntaje >= 40) console.log(" Adivinador Novato");
        else if (puntaje >= 1) console.log(" Adivinador Amateur");
    } else {
        console.log(` mal ay no adivinaste. La letra era '${letraSecreta}'.`);
        console.log(" Puntaje: 0");
    }
}

juegoAdivinanza();
