const prompt = require("prompt-sync")({sigint: true})

/* Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100 */

let suma = 0

for(let i = 0; i <= 100; i++){
    suma += i
}

console.log(suma)