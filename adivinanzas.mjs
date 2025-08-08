import { input } from './utils.mjs';

async function juegoAdivinanza() {
    const letrasPermitidas = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ";
    const letraSecreta = letrasPermitidas.charAt(Math.floor(Math.random() * letrasPermitidas.length));

    let intentosMaximos = 15;
    let intento = 0;
    let adivino = false;

    console.log(" Bienvenido al juego de adivinanzas de letras ");
    console.log("Tienes 15 intentos para adivinar la letra.");
    console.log("Se distingue entre mayúsculas y minúsculas.");
    console.log("No se consideran la 'll' ni la 'ñ'.\n");

    while (intento < intentosMaximos && !adivino) {
        let letraUsuario = await input(`Intento ${intento + 1}: Ingresa una letra → `);

        if (letraUsuario.length !== 1 || !letrasPermitidas.includes(letraUsuario)) {
            console.log(" Entrada inválida. Ingresa solo una letra permitida.");
            continue;
        }

        intento++;

        if (letraUsuario === letraSecreta) {
            adivino = true;
            break;
        } else {
            console.log(" No es la letra, intenta otra vez.");
        }
    }

    let puntaje = adivino ? Math.round(((intentosMaximos - intento + 1) / intentosMaximos) * 100) : 0;

    console.log("\n Resultado:");
    if (adivino) {
        console.log(` ¡Correcto! La letra era '${letraSecreta}'.`);
        console.log(` Puntaje: ${puntaje}`);

        if (puntaje >= 80) console.log(" Adivinador Nato");
        else if (puntaje >= 60) console.log(" Adivinador Experto");
        else if (puntaje >= 40) console.log(" Adivinador Novato");
        else if (puntaje >= 1) console.log(" Adivinador Amateur");
    } else {
        console.log(` No lograste adivinar. La letra era '${letraSecreta}'.`);
        console.log(" Puntaje: 0");
    }
}

juegoAdivinanza();
