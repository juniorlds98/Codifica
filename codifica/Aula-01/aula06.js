//Transformar celcius em Fahrenheit
c = 20

fahrenheit = (c * 1.8) + 32

console.log(fahrenheit + "º F")

//Transformar Fahrenheit em Celcius
f = 77

celcius = (f - 32) / 1.8

console.log(celcius + "º C")

//Calcular números de brancos, nulos e válidos

const validos = 160

const brancos = 10

const nulos = 20

let total = nulos + brancos + validos

console.log("O número total de eleitores são: " +total)

pNulos = (nulos / total) * 100
pBrancos = (brancos / total) * 100
pValidos = (validos / total) * 100
console.log("A porcentagem total de nulos é: " + pNulos.toFixed(2) + "%")
console.log("A porcentagem total de brancos é: " + pBrancos.toFixed(2) + "%")
console.log("A porcentagem total de validos é: " + pValidos.toFixed(2) + "%")

pTotal = (pNulos + pBrancos + pValidos)

console.log("Somando um total de: "+pTotal+"%")

//Calcular percentual de alunos reprovados

const turmaC = 60
const turmaD = 20

const percentualReprovadosC = 10
const percentualAprovadosD = 85

let totalReprovadosC = (turmaC/100) * percentualReprovadosC
let totalAprovadosD = (turmaD/100) * percentualAprovadosD
let totalReprovadosD = turmaD - totalAprovadosD
let totalAlunos = turmaC + turmaD
let totalReprovados = (totalReprovadosC+totalReprovadosD) / totalAlunos * 100

console.log("O total de alunos reprovados na turma C é: ",totalReprovadosC)
console.log("O total de alunos reprovados na turma D é: ",totalReprovadosD)
console.log("O total de alunos reprovados nas turmas é: ",totalReprovados,"%")

//Imprimir fim de semana se escolher domingo e sabado ou de segunda a sexta dia útil

let diaDaSemana = "Segunda"

if (diaDaSemana.toLowerCase() === "sabado" || diaDaSemana.toLowerCase() === "domingo"){
    console.log("O dia da semana escolhido: " + diaDaSemana + " É final de semana")
} else if(diaDaSemana.toLowerCase() === "segunda" || diaDaSemana.toLowerCase() === "terça" || diaDaSemana.toLowerCase() === "quarta" || diaDaSemana.toLowerCase() === "quinta" || diaDaSemana.toLowerCase() === "sexta"){
    console.log("O dia da semana escolhido:" + diaDaSemana + " É um dia Util")
} else{
    console.log("O dia escolhido não é valido!")
}

//O número é negativo ou positivo

const prompt = require("prompt-sync")()

let numero = 1

while (numero !== 0){
    numero = prompt("Escolha um número (Digite 0 p/sair): ")

    if (numero > 0){
        console.log("Número: " +numero)
        console.log("O número escolhido é positivo")
    } else if (numero < 0){
        console.log("Número: " +numero)
        console.log("O número escolhido é negativo")
    } else if (numero == 0){
        console.log("O número escolhido foi: " +numero + " Até logo!")
        break
    }else{
        console.log("Isso não é um número, escolha um número!")
    }
}

//Escolha a senha correta
const prompt = require("prompt-sync")()
let senhaCorreta = 1571651533

let tentativaDeSenha = 123456789
let contador = 3

while (tentativaDeSenha !== senhaCorreta){
    tentativaDeSenha = prompt("Digite a senha corretamente: ")
    if(tentativaDeSenha === senhaCorreta){
        console.log("Acesso permitido")
        break
    } else if(tentativaDeSenha !== senhaCorreta){
        contador--
        console.log("Acesso negato, você tem mais " +contador + " chances")
        if (contador === 0){
            contador += 3
            console.log("Você tentou 3 vezes, você precisa redefinir a sua senha")
            senhaCorreta = prompt("Escolha a sua nova senha:")
            console.log("A sua nova senha é: " +senhaCorreta)
        }
    }
}

