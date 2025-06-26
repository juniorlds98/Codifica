//Switch case
const prompt = require("prompt-sync")()

let nota1 = 10
let nota2 = 20

let media = (nota1 + nota2) / 2

let opcao = prompt("Quais serviços você pretende acessar? 1: Saber a média, 2: Saber se está aprovado ou não")

switch(opcao){
    case "1":
        console.log(media)
        break
    case "2":
        if (media >= 60){
            console.log("Aprovado!")
        }else {
            console.log("Reprovado!")
        }
        break
    default:
        console.log("Você não escolheu uma opção válida")
}

//Usar switch quando temos opções, por exemplo menus

//Estrutura de repetição

//While
let i = 0


while(i <= 10){
    console.log(i)
    i += 1
}


//Exercício 1: Faça uma tabuada com o while

let nTabuada = 0
i = 6
let resultado = 0

while (nTabuada <= 10){
    resultado = i * nTabuada
    console.log(nTabuada,"x", i, "=", resultado )
    nTabuada += 1
}

//For (usado normalmente quando você sabe onde começa e onde termina)

for (let i = 10; i >= 0; i--){
    if(i % 2 == 0){
        console.log(i)
    }
}

// Do While executa primeiro, depois conclui

let i = 0

do {
    console.log(i)
    i++
} while(i <= 10)