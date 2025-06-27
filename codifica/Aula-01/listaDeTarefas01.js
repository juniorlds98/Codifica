//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

let numero = "2"

if (numero % 2 == 0){
    console.log("O número escolhido é par")
} else {
    console.log("O seu número é impar")
} 

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

let idade = -3

const crianca = 0
const adolescente = 12
const adulto = 20
const idoso = 60

if (idade < adolescente && idade >= 0){
    console.log("Ele é uma criança e tem:", idade, "anos")
} else if (idade >= adolescente && idade < adulto){
    console.log("Ele é um adolescente e tem: ", idade, " anos")
} else if (idade >= adulto && idade < idoso){
    console.log("Ele é um adulto e tem: ", idade, " anos")
} else if (idade > idoso){
    console.log("Ele é um idoso e tem: ", idade, " anos")
} else{
    console.log("A idade fornecida não é valida!")
}

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = 9.5

if(nota == 5){
    console.log("Recuperação")
} else if (nota > 5){
    console.log("Aprovado")
} else if (nota < 5 && nota > 0){
    console.log("Reprovado")
} else{
    console.log("A sua nota não foi válida")
}

//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

const opcao1 = "seja"

const opcao2 = "bem"

const opcao3 = "vindo"

let opcao = prompt("Escolha uma das 3 opções (opcao1, opcao2 ou opcao3):")

switch(opcao){
    case "opcao1":
        console.log(opcao1)
        break
    case "opcao2":
        console.log(opcao2)
        break
    case "opcao3":
        console.log(opcao3)
        break
    default:
        console.log("Escolha uma das opções válidas!")
}

//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else

const baixoPeso = 18.5
const pesoNormal = 24.9
const sobrePeso = 29.9
const obesidade = 30

let peso = 86
let altura = 1.73

let imc = peso / (altura * altura)

if (imc < baixoPeso){
    console.log("Você está com baixo peso, seu IMC é:", imc.toFixed(2))
} else if (imc >= baixoPeso && imc <= pesoNormal){
    console.log("Você está com peso normal, seu IMC é:", imc.toFixed(2))
} else if (imc > pesoNormal && imc <= sobrePeso){
    console.log("Você está com sobrepeso, seu IMC é:", imc.toFixed(2))
} else if (imc >= obesidade){
    console.log("Você está com obesidade, seu IMC é:", imc.toFixed(2))
} else {
    console.log("Coloque um peso e uma altura válida!")
}

//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

let l1 = 16
let l2 = 16
let l3 = 16

if (l1 === l2 && l1 === l3 && l3 ===l2){
    console.log("É um triângulo equilátero")
} else if(l1 === l2 || l2 === l3 || l1 === l3){
    console.log("É um triângulo isosceles")
} else if (l1 !== l2 || l2 !== l3 || l3!== l1){
    console.log("É um triângulo escaleno")
}

//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

let macasCompradas = 5

const preco01 = 0.30
const preco02 = 0.25

if (macasCompradas < 12){
    console.log("Você comprou:", macasCompradas, "maças, elas irão custar R$:", preco01, "a unidade. E o total ficará R$:", preco01*macasCompradas)
} else if(macasCompradas >= 12){
    console.log("Você comprou:", macasCompradas, "maças, elas irão custar R$:", preco02, "a unidade. E o total ficará R$:", preco02*macasCompradas)
} else{
    console.log("O valor de maçãs não são válidos")
}

//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

let valor1 = 15

let valor2 = "15"

if(valor1 > valor2){
    console.log("1°",valor2, "2°",valor1)
} else if(valor2 > valor1){
    console.log("1°",valor1, "2°",valor2)
} else if(valor2 === valor1){
    console.log("Os valores são iguais: ","1°",valor2, "2°",valor1)
} else{
    console.log("Um ou dois valores não são válidos")
}

//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

for (let contador = 0; contador <= 10; contador++){
    console.log(contador)
}

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let numeroInteiro = 13
let i = 0

for (i = 0; i <= 10; i++){
    console.log(numeroInteiro)
}

//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require("prompt-sync")()

let numero = 0
let i = 5
let numeros = 0

for (i = 5; i > 0; i--){
    numero = Number(prompt("Escreva um número aleatório: "))
    numeros += numero
}
console.log("A soma dos valores é: ", numeros)

//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

let tabuada = 6
let contador = 0

for (contador = 0; contador <= 10; contador++){
    console.log(contador, "x", tabuada, "=", (tabuada * contador))
}

//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")()

let contador = 0
let numero = -1
let numeros = 0

for (numero = -1; numero !== 0; contador++){
    numero = Number(prompt("Escreva um número aleatório [digite 0 p/ sair]: "))
    numeros += numero
    if (numero == 0){
        console.log("Você escolheu:",contador,"numeros.","A soma dos números escolhidos deu:", numeros)
        break
    }
}

//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let i = 1
let linha = ""

for(let fatorial = 5; fatorial > 0; fatorial--){
    i *= fatorial 

    if(fatorial > 1){
        linha += fatorial + " x ";        
    }else {
        linha += fatorial + " = " + i;
    }

}
console.log(linha)


//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let termosDesejados = 10
let inicial = 0
let soma = 1
let sequencia = `${inicial}, ${soma}`

for (let i = 2; i < termosDesejados; i++){
    let proximo = inicial + soma
    sequencia += `, ${proximo}`
    inicial = soma
    soma = proximo
    
}
console.log(sequencia)
