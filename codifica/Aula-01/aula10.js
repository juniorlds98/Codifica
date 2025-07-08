/*
//Funções nativas do JS

//Tamanho
console.log("Enzo Grigol".length)

//Letras especificas por posição

console.log("Enzo Grigol".charAt(0))

//Letras especificas por referência

console.log("Enzo Grigol".indexOf("i"))

//Trocar algo da string

console.log("Enzo Grigol".replace("Enzo", "Guilherme"))

//Extrair parte do texto

console.log("Enzo Grigol".substr(7, 8))

//Letras maiusculas e minusculas

console.log("Ronan".toLowerCase())
console.log("Ronan".toUpperCase())

//Eliminar espaços
console.log("-" + " Denize" + " -".trim())

//Arredondar valores

console.log(Math.ceil(9.5))
console.log(Math.floor(9.5))
console.log(Math.round(9.4))

//Calcular raiz quadrada e cubica

console.log(Math.sqrt(81))
console.log(Math.cbrt(81))

//Elevar número ao quadrado

console.log(Math.pow(81, 2))

//valor absoluto

console.log(Math.abs(81.13123213213))

//valor aleatório

console.log(Math.random()*100)

//Manipulação de data

let date = new Date()

console.log(date.getDate()) //dia
console.log(date.getMonth() + 1) //mês
console.log(date.getFullYear()) //ano


//Data em milisegundos
let date1 = new Date(2025, 7, 5)
let date2 = new Date(2002, 7, 5)

console.log(date1.toString())
console.log(date2.toString())

console.log(date1.getTime())
console.log(date2.getTime())

let milissegundoEntreDatas = Math.abs((date1.getTime()) - date2.getTime())

console.log(milissegundoEntreDatas)

let milissegundosPorDia = (1*24*60*60*1000)

console.log(`"A diferença entre as datas é de ${Math.ceil(milissegundoEntreDatas/milissegundosPorDia)} dias"`)


//Reverter string

function reverseString(str){
    return str.split("").reverse().join("") //É possível encadear vários métodos de uma vez
}

console.log(reverseString("Ola, mundo!"))

//Formatar data

let date = new Date().toString().substr(4, 11).split("")
for(let i = 0;i < date.length; i++)
    if(date[i] === " "){
        date.splice(i, 1, "/")
    }
console.log(date.join(""))


let date1 = new Date()
    
function formatDate(date){
    let day = date.getDate().toString().padStart(2, "0")
    let month = (date.getMonth() + 1).toString().padStart(2, "0")
    let year = date.getFullYear()

    return `${day}/${month}/${year}`
}

console.log(formatDate(date1))
*/

//Intervalos de números aleatórios

function numeroRandomico(min, max){
    return (Math.round(Math.random()*(max - min + 1)) + min)

}

console.log(numeroRandomico(1, 15))

//contar vogais de strings

function contarVogais(palavra){
    let contadorVogais = 0
    for(let i = 0; i < palavra.length; i++){
        if("aeiouAEIOU".includes(palavra[i])){
            contadorVogais ++
        }
    }
    return contadorVogais
}

console.log(contarVogais("conversar"))