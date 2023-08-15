const prompt = require("prompt-sync")({sigint: true})

/* Crear una función que pida un valor por parámetro y muestre los 10
números siguientes. */

function numerosPosteriores(num){

    let contador = 1

    while(contador <= 10){
        console.log(num + contador)
        contador++
    }
}

numerosPosteriores(14)