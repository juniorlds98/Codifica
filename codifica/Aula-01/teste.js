const prompt = require("prompt-sync")();

let totalFilhos = 0
let maiorSalario = 0
let contador = 0
let salariosAcima350 = 0
let totalSalarios = 0

while(true){
    let salario = Number(prompt("Digite o valor de seu salário (ou 0 p/ encerrar): "))
    if (salario === 0){
        break
    }

    let nFilhos = Number(prompt("Digite o número de filhos: "))

    totalSalarios += salario
    totalFilhos += nFilhos

    if (salario >= maiorSalario){
        maiorSalario = salario
    }
    if (salario >= 350){
        salariosAcima350++
    }
    contador++
}

let mediaSalarios = totalSalarios / contador
let mediaNFilhos = totalFilhos / contador
let porcentagem350Mais = (salariosAcima350/contador) * 100


console.log(`A média de salários da população é de: ${mediaSalarios.toFixed(2)}`)
console.log(`A média de filhos da população é de: ${mediaNFilhos.toFixed(2)}`)
console.log(`O maior salário entre a população é: ${maiorSalario.toFixed(2)}`)
console.log(`A porcentagem da população que recebe mais de R$:350,00 é de: ${porcentagem350Mais.toFixed(2)}%`)