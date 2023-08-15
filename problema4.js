const prompt = require("prompt-sync")({sigint: true})

/* Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número. */

function factorial(num){
    let resultado = 1;
    for(let i = 1; i <= num; i++){
        resultado *= i 
    }
    return resultado
}

console.log(factorial(12))

