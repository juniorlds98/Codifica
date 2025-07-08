/*let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let somaDosNumeros = 0
let mediaDosNumeros = 0 
let numerosPares = []
let n = numeros.length

for (let i = 0; i < n - 1; i++) {
    somaDosNumeros += numeros[i]
    if (numeros[i] % 2 === 0){
        numerosPares.push(numeros[i])
    }
    
}

//for para fazer bubble sort

for(i = 0; i < n - 1; i++){
    for(let j = 0; j < n - 1 - i; i++){
        if(numeros[i] > numeros[j + 1]){
            const temp = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = temp
        }
    }
} 

mediaDosNumeros = somaDosNumeros / numeros.length

console.log(`Os números presente no array original são: ${numeros}`)
console.log(`A soma dos números deu: ${somaDosNumeros}`)
console.log(`A media dos números deu: ${mediaDosNumeros}`)
console.log(`Os números pares são: ${numerosPares}`)

//Fazer o mesmo com métodos de arrays

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
const media = soma/numeros.length
const pares = numeros.filter(num => num % 2 === 0)
const ordenacao = numeros.sort((a, b) => a - b)



console.log(`Os números presente no array original são: ${numeros}`)
console.log(`A soma dos números deu: ${soma}`)
console.log(`A media dos números deu: ${media}`)
console.log(`Os números pares são: ${pares}`)
console.log(`Os números ordenados são: ${ordenacao}`)


//O que é reduce?

/*Ele reduz o array à um valor só, para isso ele usa um acumulador que sempre irá começar em 0 e toda vez
que ele passa por um item dentro do array ele incrementa o valor do array.*/

//O que é filter?

/* Ele constroi um novo array com uma nova condição que satisfaça a condição pedida, o "num" ele representa
a posição do array*/

//Arrays multidimensionais ou listas

let matriz = []

//iterando com 10 posições
for(var i = 0; i < 10; i++){
    matriz[i] = []
    for(var j = 0; j < 10; j++){
    matriz[i][j] = 10
    }
    if(matriz[i] === matriz[j]){
        console.table(matriz)
    }
}


//calculando diagonal de matriz

function calculo(matriz){
    const count = matriz.length;
    console.log(count)
    let resultado = 0
    for(let i = 0; i < count; i++){
        resultado += matriz[i][i]
    }
    return resultado
}


console.log(calculo(matriz))

