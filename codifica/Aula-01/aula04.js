//Entradas de usuários


//Exercício 3: Fazer uma calculadora simples
const prompt = require('prompt-sync')();

const operacao = prompt("Qual operação você irá escolher (+, -, *, /): ");

const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));
let resultado = 0 

if(operacao === "+"){
    resultado = numero1 + numero2
    console.log(resultado)
} else if(operacao === "*"){
    resultado = numero1 * numero2
    console.log(resultado)
}else if(operacao === "-"){
    resultado = numero1 - numero2
    console.log(resultado)
}else if(operacao === "/"){
    if (valor2 !== 0){
        resultado = valor1/valor2
    } else{
        console.log("Erro: Divisão por zero")
        resultado = undefined
    }
} else{
    console.log("Sua operação não é valida, escolha um valor válido!")
}


//Switch case

const prompt = require('prompt-sync')();

const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));

const operacao = prompt("Qual operação você irá escolher (+, -, *, /): ");
let resultado = 0

switch(operacao){
    case "+":
        resultado = numero1 + numero2
        console.log("O resultado é: " + resultado)
        break;
    case "-":
        resultado = numero1 - numero2
        console.log("O resultado é: " + resultado)
        break;
    case "*":
        resultado = numero1 * numero2
        console.log("O resultado é: " + resultado)
        break;
    case "/":
        if (numero2 !== 0){
            resultado = numero1 / numero2
            console.log("O resultado é: " + resultado)
        } else{
            console.log("Erro: Divisão por zero")
            resultado = undefined
        }
        break;
    default:
        console.log("Você não selecionou uma operação válida")
        break;
}


//Exercício 4: Calcular MDC entre dois números

let contagem = 0

let resultado = 0

if(resultado !== 5){
    for (resultado < 5; resultado++; contagem++)
        if(resultado === 5)
            break;
}

console.log(contagem)
console.log(resultado)
//Exercício 5: Verificar se o número é primo

let numero = 4

if (numero <= 1){
    console.log("Esse número não é primo")
} else {
    let i
    for (i = 2; i <= numero / 2; i++) {
        if (numero % i === 0){
            console.log("Esse número não é primo")
            break;
        }
    }
    if (i > numero / 2){
        console.log("Esse número é primo")
    }
}

