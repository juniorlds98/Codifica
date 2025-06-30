//1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias. 
const tempoDeVidaPerdido = 10
let cigarrosPorDia = 15
let tempoDeFumante = 3

//Definindo tempo
const ano = 365
const diaEmHoras = 24
const diaEmMinutos = 1440

let tempoPerdidoNoDia = (cigarrosPorDia * 10)
let tempoPerdidoNoAno = (tempoPerdidoNoDia * ano)
let tempoPerdidoNoAnoEmDias = (tempoPerdidoNoAno / diaEmMinutos)
let tempoVidaPerdido = (diaEmMinutos/cigarrosPorDia)
let tempoTotalDeVidaPerdido = (tempoPerdidoNoAnoEmDias*tempoDeFumante)

console.log("Você fuma um cigarro a cada:",tempoVidaPerdido, "minutos")
console.log("Por dia você perde:", tempoPerdidoNoDia, "minutos por fumar", cigarrosPorDia, "cigarros no dia" )
console.log("Isso indica que você perde:", tempoPerdidoNoAno, "minutos no ano, ou:", tempoPerdidoNoAnoEmDias.toFixed(2), "dias da sua vida no ano" )
console.log("Você perdeu:", tempoTotalDeVidaPerdido.toFixed(2), "dias de vida desde que começou a fumar" )
//2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. 
let velocidadeDoCarro = 112
const velocidadeMaxima = 80
const valorMulta = 5

if (velocidadeDoCarro > velocidadeMaxima){
    let quantosKMAcima = velocidadeDoCarro - velocidadeMaxima
    let valorTotalMulta = valorMulta * quantosKMAcima
    console.log("Você estava:",quantosKMAcima, "KM acima do limite de velocidade da via. Sua multa será de R$:", valorTotalMulta )
} else {
    console.log("Parabens, você não está correndo por ai!")
}
//3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas. 
const precoViagemCurta = 0.50
const precoViagemLonga = 0.45
const limiteViagemCurta = 200

let distanciaDaViagem = 200


if (distanciaDaViagem <= limiteViagemCurta){
    let valorViagem = distanciaDaViagem * precoViagemCurta
    console.log("O preço da sua viagem será de R$:", valorViagem)
} else {
    valorViagem = distanciaDaViagem * precoViagemLonga
    console.log("O preço da sua viagem será de R$:", valorViagem)
}
//4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois. 
let l1 = 5
let l2 = 10
let l3 = 3

if (l1 + l2 < l3 || l1 + l3 < l2 || l2 + l3 < l1){
    console.log("Essas medidas podem formar um triângulo")
} else{
    console.log("Essas medidas não podem ser um triângulo")
} 
//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). 
let numeroAleatorio = Math.floor(Math.random()* 3) + 1
let numeroEscolhido = 1

console.log("Jó-")
setTimeout(() => {
    console.log("Kem-")
    setTimeout(() => {
        console.log("Pô!")
        setTimeout(() => {
        if (numeroAleatorio === 3 && numeroEscolhido === 1){
            console.log("Pedra x Tesoura")
            console.log("Você perdeu!")
        } else if(numeroAleatorio === 2 && numeroEscolhido === 3){
            console.log("Papel x Pedra")
            console.log("Você perdeu!")
        } else if(numeroAleatorio === 1 && numeroEscolhido === 2){
            console.log("Tesoura x Papel")
            console.log("Você perdeu!")
        } else if (numeroEscolhido === 3 && numeroAleatorio === 1){
            console.log("Tesoura x Pedra")
            console.log("Você ganhou!")
        } else if(numeroEscolhido === 2 && numeroAleatorio === 3){
            console.log("Pedra x Papel")
            console.log("Você ganhou!")
        } else if(numeroEscolhido === 1 && numeroAleatorio === 2){
            console.log("Papel x Tesoura")
            console.log("Você ganhou!")
        } else {
            console.log("Faça uma escolha válida!")
        }
        }, 2000)
    }, 2000)

}, 2000)

//6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado. 
const prompt = require("prompt-sync")()

let numeroAleatorio = Math.floor(Math.random()* 5) + 1
let numeroEscolhido = 0

console.log(numeroAleatorio)

while(numeroEscolhido !== numeroAleatorio){
    numeroEscolhido = Number(prompt("Escolha um número aleatório entre 1 e 5: "))
    if(numeroEscolhido !== numeroAleatorio){
        console.log("Número errado, escolha novamente!")
    } else if(numeroEscolhido === numeroAleatorio){
        console.log("Parabens, você acertou o número!")
    } else {
        console.log("Escolha um número válido!")
    }
}
/*7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir: 
Carros populares 
- Até 100 Km percorridos: R$ 0,20 por Km 
- Acima de 100 Km percorridos: R$ 0,10 por Km 
Carros de luxo 
- Até 200 Km percorridos: R$ 0,30 por Km 
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

const carroDeLuxo = 150
const carroNormal = 90

let carroEscolhido = carroNormal
let diasDeAluguel = 5
let KMPercorrido = 250

let precoPorDia;
let valorPorKM;
let valorDias;
let valorKM;
let total;

if (carroEscolhido === carroNormal) {
    precoPorDia = carroNormal;
    valorPorKM = KMPercorrido <= 100 ? 0.20 : 0.10;
} else if (carroEscolhido === carroDeLuxo) {
    precoPorDia = carroDeLuxo;
    valorPorKM = KMPercorrido <= 100 ? 0.30 : 0.25;
} else {
    console.log("Escolha um carro válido!");
}

if (precoPorDia) {
    valorDias = precoPorDia * diasDeAluguel;
    valorKM = valorPorKM * KMPercorrido;
    total = valorDias + valorKM;

    console.log("O valor dos dias alugados deu R$: " + valorDias.toFixed(2));
    console.log("Foi gasto R$: " + valorKM.toFixed(2) + " em quilometragem percorrida");
    console.log("O total do aluguel ficou R$: " + total.toFixed(2));
}

/*8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim: 
- até 10 h de atividade no mês: ganha 2 pontos por hora 
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora 
- acima de 20 h de atividade no mês: ganha 10 pontos por hora 
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos) 
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês. Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

let tempoDeAtividade = 45

let pontosPor9Horas = 2
let pontosPor10Horas = 5
let pontosPor20Horas = 10
let ganhoPorPontos = 0.05
let pontos
let valoresGanhos

if(tempoDeAtividade < 10){
    pontos = pontosPor9Horas * tempoDeAtividade
    valoresGanhos = pontos * ganhoPorPontos
    console.log("Você ganhou R$:", valoresGanhos.toFixed(2), "no mês.", "E ganhou:", pontos , "pontos no mês")
} else if(tempoDeAtividade >= 10 && tempoDeAtividade <= 20){
    pontos = pontosPor10Horas * tempoDeAtividade
    valoresGanhos = pontos * ganhoPorPontos
    console.log("Você ganhou R$:", valoresGanhos.toFixed(2), "no mês.", "E ganhou:", pontos , "pontos no mês")
} else if (tempoDeAtividade > 20){
    pontos = pontosPor20Horas * tempoDeAtividade
    valoresGanhos = pontos * ganhoPorPontos
    console.log("Você ganhou R$:", valoresGanhos.toFixed(2), "no mês.", "E ganhou:", pontos , "pontos no mês")
}

//9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário. 

const prompt = require("prompt-sync")()

let contadorHomem = 0
let contadorMulher = 0
let salarioTotalHomens = 0
let salarioTotalMulheres = 0
let continuar = 1

while(continuar !== 0){
    let sexo = Number(prompt("Escolha o sexo do funcionário [1 para homem, 2 para mulher]: "))
    if(sexo === 1){
            contadorHomem += 1
            let salario = Number(prompt("Digite o salário: "))
            salarioTotalHomens += salario
    }else if(sexo ===2){
            contadorMulher += 1
            let salario = Number(prompt("Digite o salário: "))
            salarioTotalMulheres += salario  
    } else{
        console.log("Sexo inválido. Use 1 para homem ou 2 para mulher.");
        continue;
    }
    continuar = Number(prompt("Quer continuar[0 p/ sair e 1 p/continuar]: "))
}

console.log("\nResumo:");
console.log("Total de salário pago aos homens: R$", salarioTotalHomens.toFixed(2));
console.log("Total de salário pago às mulheres: R$", salarioTotalMulheres.toFixed(2));

/*10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela: a) O somatório entre todos os valores; 
b) Qual foi o menor valor digitado; 
c) A média entre todos os valores; 
d) Quantos valores são pares. */

const prompt = require("prompt-sync")()
let numero
let soma = 0
let menorValor = null
let contador = 0
let contadorPares = 0
let continuar

do {
    numero = Number(prompt("Escreva um número aleatório: "))
    soma += numero
    
    if (menorValor === null || numero < menorValor){
        menorValor = numero
    }
    if(numero % 2 == 0){
        contadorPares++
    }
    contador ++
    continuar = prompt("Você quer continuar: [S/N]").toLowerCase()
} while(continuar !== "n")


console.log("A somatoria dos valores é: " + soma)
console.log("O menor valor escolhido foi: " + menorValor)
console.log("Foi digitado: " + contador + " numeros")


//11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência. 

const prompt = require("prompt-sync")();

const a1 = Number(prompt("Digite o primeiro termo (a1): "));
const r = Number(prompt("Digite a razão (r): "));
const n = Number(prompt("Digite o número de termos (n): "));


const an = a1 + (n - 1) * r;


const sn = (n / 2) * (2 * a1 + (n - 1) * r);

console.log(`\nO ${n}º termo da PA é: ${an}`);
console.log(`A soma dos ${n} primeiros termos é: ${sn}`);

//12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21. 

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

//13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci. 

let termosDesejados = 15
let vetor = [0, 1]

for (let i = 2; i < termosDesejados; i++){
    vetor[i] = vetor[i - 1] + vetor[i - 2]
    
}
console.log("Sequência de Fibonacci" + vetor)

//14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

const prompt = require("prompt-sync")();
let limitador = 7
let nomes = []
let nome

for(let i = 0; i < limitador; i++){
    nome = prompt("Digite um nome: ")
    nomes.push(nome)
}
for (let aux = limitador -1; aux >= 0; aux--)
    console.log(nomes[aux])

//15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados. 
const prompt = require("prompt-sync")();
let limitador = 10
let numeros = []
let numero
let numerosPares = []
 

for(let i = 0; i < limitador; i++){
    numero = Number(prompt("Digite um numero: "))
    numeros.push(numero)
    if(numero % 2 === 0){
        numerosPares.push(numero)
    }
}

for (let aux = 0; aux < numerosPares.length; aux++){
    let posicao = numeros.indexOf(numerosPares[aux])
    console.log(`Número par ${numerosPares[aux]} encontrado na posição ${posicao}`)
}

//16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. 

let vetor = []

for(let i = 0; i <= 20; i++){
    let numeroAleatorio = Math.floor(Math.random()* 99) + 1
    vetor.push(numeroAleatorio)
}
console.log("Não ordenado:" + vetor)

vetor.sort(function(a, b){
    return a - b
})
console.log("Ordenado:" + vetor)

//17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade. 

const prompt = require("prompt-sync")();
let limitador = 3
let idades = []
let nomes = []
let idade
let idadesMenores18 = []
let nome

for(let i = 0; i < limitador; i++){
    nome = prompt("Digite um nome: ")
    idade = Number(prompt("Digite a idade da pessoa: "))

    idades.push(idade)
    nomes.push(nome)
}

for (let aux = 0; aux < limitador; aux++){
    if(idade[aux] <= 18){
        console.log(`Nome: ${nomes[aux]}, idade: ${idades[aux]} (posição ${aux}`)
    }
}

//18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro. 

const prompt = require("prompt-sync")();

let funcionario = {
    nomeDoFuncionario: prompt("Qual o nome do funcionário: "),
    cargo: prompt("Qual o cargo do funcionário: "),
    salario: Number(prompt("Qual o seu salário: "))
}


console.log(`Nome: ${funcionario.nomeDoFuncionario}`)
console.log(`Cargo: ${funcionario.cargo}`)
console.log(`Salário: ${funcionario.salario}`)

//19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS. 

const prompt = require("prompt-sync")();

let horarios = []


for(let i = 0; i <= 5; i++){
    let horas, minutos, segundos

    horas = Number(prompt("Escreva as horas: ex.:[12]"))
    minutos = Number(prompt("Escreva os minutos: ex.:[35]"))
    segundos = Number(prompt("Escreva os segundos: ex.:[22]"))
    while(horas < 0 || horas > 23){
        horas = Number(prompt("Você digitou um valor invalido, por favor, coloque um valor válido! ex.:[12]"))
    }
    while(minutos < 0 || minutos > 59){
        minutos = Number(prompt("Você digitou um valor invalido, por favor, coloque um valor válido! ex.:[12]"))
    }
    while(segundos < 0 || segundos > 59){
        segundos = Number(prompt("Você digitou um valor invalido, por favor, coloque um valor válido! ex.:[12]"))
    }
    let horarioFormatado = 
    String(horas).padStart(2, '0') + '.' +
    String(minutos).padStart(2, '0') + '.' +
    String(segundos).padStart(2, '0')

    horarios.push(horarioFormatado)
    
}
console.log("\nHorários registrados:")
for (let h of horarios) {
    console.log(h)
}


/*20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir: 
Matrícula: 
Nome: 
Salário bruto: 
Dedução INSS: 
Salário líquido: 
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS). */

let funcionarios = [
    {
        matricula: 1,
        nome: "José Claudio da Silva Junior",
        salarioBruto: 2500,
        deducaoINSS: 300,
        salarioLiquido: 2200
    },
    {
        matricula: 2,
        nome: "Beatriz Muike Sato de Oliveira",
        salarioBruto: 2500,
        deducaoINSS: 300,
        salarioLiquido: 2200
    },
    {
        matricula: 3,
        nome: "Thiago Silva Lira",
        salarioBruto: 3200,
        deducaoINSS: 384,
        salarioLiquido: 2816
    },
    {
        matricula: 4,
        nome: "Rodrigo Miranda",
        salarioBruto: 1500,
        deducaoINSS: 180,
        salarioLiquido: 1320
    },
    {
        matricula: 5,
        nome: "Cristiano Ferreira dos Santos",
        salarioBruto: 8000,
        deducaoINSS: 960,
        salarioLiquido: 7040
    },
]

for (let i = 0; i < funcionarios.length; i++) {
    let funcionario = funcionarios[i];   
    let deducaoINSS = funcionario.salarioBruto * 0.12;
    let salarioLiquido = funcionario.salarioBruto - deducaoINSS;

    console.log("\n------------------------------")
    console.log(`Matrícula: ${funcionario.matricula}`)
    console.log(`Nome: ${funcionario.nome}`)
    console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`)
    console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`)
    console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`)
    console.log(`------------------------------`)
}

//21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. 

const prompt = require("prompt-sync")();

let sexo
let altura

sexo = prompt("Qual o sexo da pessoa: ").toLowerCase()

if(sexo === "h"){
    altura = Number(prompt("Qual é a sua altura: "))
    let pesoIdealHomem = 72.7 * altura - 58
    console.log(`O seu peso ideal é: ${pesoIdealHomem.toFixed(2)}`)
} else if(sexo === "m"){
    altura = Number(prompt("Qual é a sua altura: "))
    let pesoIdealMulher = 62.1 * altura - 44.7
    console.log(`O seu peso ideal é: ${pesoIdealMulher.toFixed(2)}`)
}else{
    console.log("Sexo inválido! Por favor, insira 'h' para homem ou 'm' para mulher.")
}

//22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00. 

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

let mediaSalarios = salario / contador
let mediaNFilhos = totalFilhos / contador
let porcentagem350Mais = (salariosAcima350/contador) * 100


console.log(`A média de salários da população é de: ${mediaSalarios.toFixed(2)}`)
console.log(`A média de filhos da população é de: ${mediaNFilhos.toFixed(2)}`)
console.log(`O maior salário entre a população é: ${maiorSalario.toFixed(2)}`)
console.log(`A porcentagem da população que recebe mais de R$:350,00 é de: ${porcentagem350Mais.toFixed(2)}%`)

//23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos. 

let matrizIdentidade = [];

for (let i = 0; i < 7; i++) {
    let linha = []
    for (let j = 0; j < 7; j++) {
        if (i === j) {
            linha.push(1)
        } else {
            linha.push(0)
        }
    }
    matrizIdentidade.push(linha)
}

for (let i = 0; i < 7; i++) {
    console.log(matrizIdentidade[i].join(" "))
}

//24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M. 

let M = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [1, 2, -3, -4, 5, 6, -7, 8],
    [1, -2, -3, 4, 5, -6, 7, 8],
    [1, 2, 3, 4, -5, -6, 7, 8],
    [1, -2, 3, -4, 5, -6, 7, -8]
]

let C = []

for (let i = 0; i < M.length; i++) {
    let count = 0
    for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] < 0) {
            count++
        }
    }
    C.push(count)
}

console.log(C)


//25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente. 

let M = [
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100),
    Array.from({ length: 20 }, () => Math.random() * 100)

]

for (let j = 0; j < 20; j++) {
    let somaColuna = 0
    for (let i = 0; i < 15; i++) {
        somaColuna += M[i][j]
    }
    console.log(`Soma da coluna ${j + 1}: ${somaColuna.toFixed(2)}`)
}


//26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5]. 

let A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let B = [
    [5, 4, 3, 2, 1],
    [10, 9, 8, 7, 6],
    [15, 14, 13, 12, 11]
]

let P = []

for (let i = 0; i < 3; i++) {
    let linhaP = []
    for (let j = 0; j < 5; j++) {
        linhaP.push(A[i][j] * B[i][j]);
    }
    P.push(linhaP)
}

console.log(P)

//27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final. 

let M = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
]

let A = Number(prompt("Digite o valor de A: "))

let V = []

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        V.push(M[i][j] * A)
    }
}

console.log("Vetor V:", V)

/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item: 
a) a soma dos elementos acima da diagonal principal; 
b) a soma dos elementos abaixo da diagonal principal;*/ 

let M = [
    Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))
]

let somaAcimaDiagonal = 0
let somaAbaixoDiagonal = 0

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i < j) {
            somaAcimaDiagonal += M[i][j]
        } else if (i > j) {
            somaAbaixoDiagonal += M[i][j]
        }
    }
}

console.log("Soma acima da diagonal principal:", somaAcimaDiagonal)
console.log("Soma abaixo da diagonal principal:", somaAbaixoDiagonal)

/*29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas: a) da linha 4 de M; 
b) da coluna 2 de M; 
c) da diagonal principal; 
d) todos os elementos da matriz M. 
Escrever essas somas e a matriz. */

let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

let somaLinha4 = 0
let somaColuna2 = 0
let somaDiagonalPrincipal = 0
let somaTotal = 0

// Soma da linha 4
for (let i = 0; i < 5; i++) {
    somaLinha4 += M[3][i]
}

for (let i = 0; i < 5; i++) {
    somaColuna2 += M[i][1]
}

for (let i = 0; i < 5; i++) {
    somaDiagonalPrincipal += M[i][i]
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        somaTotal += M[i][j]
    }
}

console.log("Soma da linha 4:", somaLinha4)
console.log("Soma da coluna 2:", somaColuna2)
console.log("Soma da diagonal principal:", somaDiagonalPrincipal)
console.log("Soma total da matriz:", somaTotal)

//30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados. 

let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

let SL = []
let SC = []

for (let i = 0; i < 5; i++) {
    let somaLinha = 0
    for (let j = 0; j < 5; j++) {
        somaLinha += M[i][j]
    }
    SL.push(somaLinha)
}

for (let j = 0; j < 5; j++) {
    let somaColuna = 0
    for (let i = 0; i < 5; i++) {
        somaColuna += M[i][j]
    }
    SC.push(somaColuna)
}

console.log("Matriz M:", M)
console.log("Somas das linhas (SL):", SL)
console.log("Somas das colunas (SC):", SC)

// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.

let V = []
for (let i = 0; i < 30; i++) {
    V.push(Array.from({ length: 30 }, () => Math.floor(Math.random() * 10))) // Preenche a matriz com valores aleatórios
}

let A = Number(prompt("Digite o valor A: "))

let countA = 0
let X = []


for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
        if (V[i][j] === A) {
            countA++
        } else {
            X.push(V[i][j])
        }
    }
}

console.log("Quantidade de A:", countA)
console.log("Matriz X:", X)


//32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada. 

let M = []
for (let i = 0; i < 12; i++) {
    M.push(Array.from({ length: 13 }, () => Math.floor(Math.random() * 100))) 
}

console.log("Matriz M original:", M)

for (let i = 0; i < 12; i++) {
    let maiorValor = Math.max(...M[i].map(num => Math.abs(num))) 
    for (let j = 0; j < 13; j++) {
        M[i][j] = M[i][j] / maiorValor
    }
}

console.log("Matriz M modificada:", M)


//33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária. 

let M = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let somaDiagonalSecundaria = M[0][2] + M[1][1] + M[2][0]
let mediaDiagonalSecundaria = somaDiagonalSecundaria / 3

for (let i = 0; i < 3; i++) {
    M[i][i] = M[i][i] * mediaDiagonalSecundaria
}

console.log("Matriz M após a multiplicação:", M)


//34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações. 

let M = []
for (let i = 0; i < 50; i++) {
    M.push(Array.from({ length: 50 }, () => Math.random() * 100)) 

for (let i = 0; i < 50; i++) {
    let diagonal = M[i][i]
    for (let j = 0; j < 50; j++) {
        M[i][j] = M[i][j] * diagonal
    }
}

console.log("Matriz M após a multiplicação:", M)


//35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias. 

let pares = []
let impares = []

for (let i = 0; i < 30; i++) {
    let valor = Number(prompt("Digite um valor: "))

    if (valor % 2 === 0) {
        if (pares.length < 5) {
            pares.push(valor)
        } else {
            console.log("Vetor de pares cheio:", pares)
            pares = [valor]
        }
    } else {
        if (impares.length < 5) {
            impares.push(valor)
        } else {
            console.log("Vetor de ímpares cheio:", impares)
            impares = [valor]
        }
    }
}

console.log("Vetor de pares:", pares)
console.log("Vetor de ímpares:", impares)


//36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR". 

let gabarito = Array.from({ length: 13 }, () => Math.floor(Math.random() * 10))
console.log("Gabarito:", gabarito)

for (let apostador = 1; apostador <= 100; apostador++) {
    let respostas = Array.from({ length: 13 }, () => Math.floor(Math.random() * 10))
    let acertos = 0

    for (let i = 0; i < 13; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++
        }
    }

    console.log(`Apostador ${apostador}: ${acertos} acertos`)
    if (acertos === 13) {
        console.log(`Parabéns, o Apostador ${apostador} foi o GANHADOR!`)
    }
}


//37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário. 

let gabarito = Array.from({ length: 20 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 4))) // Gera letras A, B, C, D
console.log("Gabarito:", gabarito)

for (let aluno = 1; aluno <= 50; aluno++) {
    let respostas = Array.from({ length: 20 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 4))) // Respostas aleatórias
    let acertos = 0

    for (let i = 0; i < 20; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++
        }
    }

    console.log(`Aluno ${aluno}: ${acertos} acertos`)
    if (acertos >= 12) {
        console.log("APROVADO")
    } else {
        console.log("REPROVADO")
    }
}

/*38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável: 
1- soma dos elementos; 
2- produto dos elementos; 
3- média dos elementos; 
4- ordene os elementos em ordem crescente; 
5- mostre o vetor.*/

let vetor = Array.from({ length: 6 }, () => Number(prompt("Digite um número: ")))

let operacao = Number(prompt("Escolha a operação:\n1 - Soma\n2 - Produto\n3 - Média\n4 - Ordenar\n5 - Mostrar"))

switch (operacao) {
    case 1:
        let soma = vetor.reduce((acc, val) => acc + val, 0)
        console.log("Soma dos elementos:", soma)
        break
    case 2:
        let produto = vetor.reduce((acc, val) => acc * val, 1)
        console.log("Produto dos elementos:", produto)
        break
    case 3:
        let media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length
        console.log("Média dos elementos:", media)
        break
    case 4:
        vetor.sort((a, b) => a - b)
        console.log("Vetor ordenado:", vetor)
        break
    case 5:
        console.log("Vetor:", vetor)
        break
    default:
        console.log("Operação inválida")
}

//39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. 

let A = Array.from({ length: 100 }, () => Math.floor(Math.random() * 200) - 100) // Gera números aleatórios entre -100 e 100
let B = A.filter(num => num > 0)

console.log("Vetor A:", A)
console.log("Vetor B:", B)

//40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.) 

let resultadoLoto = Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 1)
console.log("Resultado oficial:", resultadoLoto)

for (let aposta = 1; aposta <= 50; aposta++) {
    let apostaUsuario = Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 1)
    let acertou = apostaUsuario.every(num => resultadoLoto.includes(num))

    if (acertou) {
        console.log(`Aposta ${aposta}: Ganhador!`)
    }
}


//41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade. 

let pessoa = {
    nome: "João",
    idade: 25
}

console.log("Idade:", pessoa.idade)

pessoa.email = "joao@example.com"

console.log("Pessoa atualizada:", pessoa)


//42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays. 

let dados = {
    nome: "Junior",
    idade: 27,
    hobbies: ["futebol", "leitura", "viagem"],
    scores: [100, 85, 92],
    email: "juniorlds.98@gmail.com"
}

function filtraArrays(obj) {
    let resultado = {}
    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave]
        }
    }
    return resultado
}

console.log(filtraArrays(dados))


//43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos. 

let obj1 = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
}

let obj2 = {
    idade: 30,
    cidade: "Rio de Janeiro",
    email: "joao@example.com"
}

function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 }
}

console.log(combinarObjetos(obj1, obj2))


//44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número. 

let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
    email: "joao@example.com"
}

function contarStrings(obj) {
    let count = 0
    for (let chave in obj) {
        if (typeof obj[chave] === 'string') {
            count++
        }
    }
    return count
}

console.log(contarStrings(pessoa))


//45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array. 

let palavras = ["maçã", "banana", "maçã", "laranja", "banana", "banana"]

function contarOcorrencias(arr) {
    let resultado = {}
    arr.forEach(palavra => {
        if (resultado[palavra]) {
            resultado[palavra]++
        } else {
            resultado[palavra] = 1
        }
    })
    return resultado
}

console.log(contarOcorrencias(palavras))


//46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. 

let vendas = [
    { vendedor: "João", valor: 100 },
    { vendedor: "Maria", valor: 200 },
    { vendedor: "João", valor: 150 },
    { vendedor: "Pedro", valor: 250 },
    { vendedor: "Maria", valor: 300 }
]

function totalVendasPorVendedor(vendas) {
    let resumo = {}
    vendas.forEach(venda => {
        if (resumo[venda.vendedor]) {
            resumo[venda.vendedor] += venda.valor
        } else {
            resumo[venda.vendedor] = venda.valor
        }
    })
    return resumo
}

console.log(totalVendasPorVendedor(vendas))


//47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados. 

let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
}

function aplicarFuncaoEmPropriedades(obj, func) {
    let resultado = {}
    for (let chave in obj) {
        resultado[chave] = func(obj[chave])
    }
    return resultado
}

function maiuscula(valor) {
    return typeof valor === 'string' ? valor.toUpperCase() : valor
}

console.log(aplicarFuncaoEmPropriedades(pessoa, maiuscula))


//48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.

let inventarioLojaA = {
    "produto1": 10,
    "produto2": 15,
    "produto3": 5
}

let inventarioLojaB = {
    "produto2": 8,
    "produto3": 10,
    "produto4": 20
}

function combinarInventarios(inventarioA, inventarioB) {
    let resultado = { ...inventarioA }
    for (let produto in inventarioB) {
        if (resultado[produto]) {
            resultado[produto] += inventarioB[produto]
        } else {
            resultado[produto] = inventarioB[produto]
        }
    }
    return resultado
}

console.log(combinarInventarios(inventarioLojaA, inventarioLojaB))


//49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. 

let transacoes = [
    { id: 1, valor: 100, data: "2023-01-01", categoria: "Alimentação" },
    { id: 2, valor: 200, data: "2023-01-02", categoria: "Transporte" },
    { id: 3, valor: 150, data: "2023-01-03", categoria: "Alimentação" },
    { id: 4, valor: 250, data: "2023-01-04", categoria: "Saúde" }
]

function agruparPorCategoria(transacoes) {
    let resultado = {}
    transacoes.forEach(transacao => {
        if (!resultado[transacao.categoria]) {
            resultado[transacao.categoria] = { transacoes: [], subtotal: 0 }
        }
        resultado[transacao.categoria].transacoes.push(transacao)
        resultado[transacao.categoria].subtotal += transacao.valor
    })
    return resultado
}

console.log(agruparPorCategoria(transacoes))


/*50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica. 
1. Estrutura de Dados: 
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis. 
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente. 
2. Funcionalidades: 
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema. ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica. 
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel. 
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente. ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente. 
3. Regras de Negócio: 
○ Um hotel só pode aceitar reservas se houver quartos disponíveis. ○ As reservas devem ser identificadas por um ID único e associadas a um único hotel. 
4. Desafios Adicionais (Opcionais): 
○ Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos. 
○ Gerar relatórios de ocupação para um hotel. 
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.*/

let hoteis = [
    { id: 1, nome: "Hotel A", cidade: "Rio de Janeiro", quartosTotais: 10, quartosDisponiveis: 10 },
    { id: 2, nome: "Hotel B", cidade: "São Paulo", quartosTotais: 5, quartosDisponiveis: 5 }
]

let reservas = []

function adicionarHotel(id, nome, cidade, quartosTotais) {
    let novoHotel = { id, nome, cidade, quartosTotais, quartosDisponiveis: quartosTotais }
    hoteis.push(novoHotel)
}

function buscarHotelPorCidade(cidade) {
    return hoteis.filter(hotel => hotel.cidade === cidade)
}

function fazerReserva(idHotel, nomeCliente) {
    let hotel = hoteis.find(hotel => hotel.id === idHotel)
    if (hotel && hotel.quartosDisponiveis > 0) {
        hotel.quartosDisponiveis--
        reservas.push({ idReserva: reservas.length + 1, idHotel, nomeCliente })
        console.log("Reserva feita com sucesso!")
    } else {
        console.log("Não há quartos disponíveis no hotel!")
    }
}

function cancelarReserva(idReserva) {
    let reserva = reservas.find(reserva => reserva.idReserva === idReserva)
    if (reserva) {
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel)
        hotel.quartosDisponiveis++
        reservas = reservas.filter(reserva => reserva.idReserva !== idReserva)
        console.log("Reserva cancelada com sucesso!")
    } else {
        console.log("Reserva não encontrada!")
    }
}

function listarReservas() {
    reservas.forEach(reserva => {
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel)
        console.log(`Reserva ID: ${reserva.idReserva}, Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`)
    })
}

// Exemplo de uso
adicionarHotel(3, "Hotel C", "Salvador", 8)
fazerReserva(1, "João")
fazerReserva(1, "Maria")
cancelarReserva(1)
listarReservas()
