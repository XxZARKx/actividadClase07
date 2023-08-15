const prompt = require("prompt-sync")({sigint: true})

/* Imprimir los números entre el 5 y el 20, saltando de tres en tres. */

for(let i = 5; i <= 20; i += 3){
    if(i !== 5) {
        console.log(i)
    }
}