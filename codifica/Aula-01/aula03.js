console.log("Hello World!")
console.log('Hello World!')
console.log('O termo "Mané" é comum no Rio de Janeiro')
console.log(`Junior Silva`)

console.log(1.5)
console.log(typeof(1.5))
console.log(typeof(1.5), 1000, "Junior")

// Jeito de setar Variáveis (3 formas)
let name = "Hyago"
var anotherName = "Junior"
const CITY = "Porto Seguro"


let teste //Tipo undefined
let titulosDoInter = null //Tipo null
let cursando = true //Tipo boolean

//OPERAÇÕES ARITIMÉTICAS

let num1 = 5
let num2 = 2

console.log(num1+num2)
console.log(num1*num2)
console.log(num1-num2)
console.log(num1/num2)
console.log(num1**num2)
console.log(num1%num2)

// MAIOR PRECEDÊNCIA

//1° - () 
//2° - **
//3° - /%
//4° - + E - 

//concatenar valores
let num = "4"
console.log(num + 10)

//converter strings em int

console.log(parseInt(num) + 10)

//Pós encremento
let counter = 1
counter++

//pré encremento
++counter

//incrementação de 2 em 2

let step = 2
counter += step
console.log(counter)

console.log((10<5)&&(10>2))
console.log((10<5)||(10>2))
console.log((10<5)||!(10>2))
console.log(!(10<5)||!(10>2))

let usuario = "Junior"
let senha = "234"

let autenticacao = usuario === "Junior" && senha === "234"
console.log(autenticacao)

const nota = 70

if (nota > 70){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

let idade = 33

if(idade >= 18 && idade <= 32){
    console.log("Pode se inscrever no concurso")
} else{
    console.log("Não pode se inscrever no concurso")
}

// Fazer com ternário

let resultado = (idade >= 18 && idade <= 32) ? console.log("Pode se inscrever no concurso"):console.log("Não pode se inscrever no concurso")*/

//Exercício 1: verifiquem se o número é par ou impar

const numero = 29

if (numero % 2 == 0){
    console.log("Par")
} else {
    console.log("Impar")
}

//Exercício 2: Encontre o maior entre os 3 números

const numero1 = 3
const numero2 = 4
const numero3 = 5

if (numero1 > numero2 && numero3){
    console.log("O número 1 é o maior")
} else if (numero2 > numero3 && numero1) {
    console.log("O número 2 é o maior")
} else if (numero3 > numero1 && numero2) {
    console.log("O número 3 é o maior")
} else{
    console.log("Os números são iguais ou há um empate entre dois ou mais números")
}