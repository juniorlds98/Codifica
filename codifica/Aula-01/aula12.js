//Exercícios práticos
//Verificar dentro de uma lista de livros os que foram publicados antes de 2000


const livraria = [
    {titulo: "Código limpo", autor:"Martin", ano: 2019},
    {titulo: "The Gunslinger", autor:"Stephen King", ano: 1991},
    {titulo: "Laranja Mecânica", autor:"Nicole", ano: 1810},
    {titulo: "Pequeno Príncipe", autor:"Fabiana", ano: 1903},
    {titulo: "As Crônicas Marcianas", autor:"Brabury", ano: 2010},
]

for(let char of livraria){
    if(char.ano < 2000){
        console.log(char)
    }
}

// Contar quantidade de filmes por gênero

const filmes = [
    {titulo: "Senhor dos Aneis", genero:"fantasia"},
    {titulo: "Jogo da Imitação", genero: "histórico"},
    {titulo: "Clube da Luta", genero: "drama"},
    {titulo: "Ilha do medo", genero: "terror"},
    {titulo: "Pulp Fiction", genero: "Ação"},
    {titulo: "Poderoso Chefão", genero: "Máfia"},
    {titulo: "DVD do Renight - Melhores Momentos", genero: "histórico"},
    {titulo: "Ai que vida", genero: "comédia"},
    {titulo: "Kill Bill", genero: "Ação"},
    {titulo: "Batman Forever", genero: "heroi"},
    {titulo: "Batman - Piada Mortal", genero: "heroi"},
    {titulo: "As Branqueas", genero: "comédia"},
    {titulo: "O Terno de 1 Bilhão de Dólares", genero: "comédia"},

]

let contador = {}

for (let filme of filmes){
    if(contador[filme.genero]){
        contador[filme.genero] += 1
    } else {
        contador[filme.genero] = 1
    }   
}
console.table(contador)

//Estrutura de repetição para arrays

let contagemGenero = {}

filmes.forEach(filme => {
    if(contagemGenero[filme.genero]){
        contagemGenero[filme.genero]++
    } else {
        contagemGenero[filme.genero] = 1
    }   
    
});
console.table(contador)

//Calcular o fatorial de um numero

function calcularFatorial(numero){
let fatorial = 1
let linha = ""
for(let i = numero; i > 0; i--){
    fatorial *= i
    linha += (i !== 1) ? `${i} x ` : `${i} = ${fatorial}`
    }
    return linha
}

console.log(calcularFatorial(10))

//Calcular os 10 primeiros valores de fibonacci

function calcularFibonacci(valor){
    inicial = 1
    soma = 1
    let sequencia = `${inicial}, ${soma}`
    for (let i = 2; i <= valor; i++){
        let proximo = inicial + soma
        sequencia += `, ${proximo}`
        inicial = soma
        soma = proximo
    } return sequencia
}

console.log(calcularFibonacci(10))

