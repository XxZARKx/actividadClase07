const prompt = require("prompt-sync")({sigint: true})

/* Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro. */

function secuencia(num) {
    let num1 = 1;
    let num2 = 1;
    let arrayNumbers = []
    for (let i = 0; num1 <= num; i++) {
        arrayNumbers.push(num1)
        let suma = num1 + num2;
        num1 = num2;
        num2 = suma;
    }

    let numbers = arrayNumbers.join(', ')

    console.log(numbers);
}

secuencia(57);