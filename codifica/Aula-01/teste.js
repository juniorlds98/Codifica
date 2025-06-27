const prompt = require("prompt-sync")()

let numero = Number(prompt("Escreva um número aleatório: "))
let numeros = 0

do {
    numero = Number(prompt("Escreva um número aleatório [0 p/ parar]: "))
    i++
} while(numero ==! 0)