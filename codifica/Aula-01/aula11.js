//*Objetos são elementos que representam informações do mundo real. Objetos são provenientes de classes

//Objetos tem funções próprias e faz coisas

//Para fazer um objeto é necessário abstrair as características mais importante para o seu negócio.

//Objetos tem estados, exemplo: novo, seminovo, velho, rasurado

//Um objeto não necessáriamente é um objeto, ele pode ser abstrato, pode ser uma ideia.

/* 3 carcterísticas de um objeto

- O que ele tem

- O que ele faz

- Como ele está
*/



let serie = {
    nome: "High School Musical",
    dataLancamento: 2007,
    atores: ["Zack Efron", "Client Eastwood", "Arthur Morgan"],
    status: "Finalizado",
    classificacao: 18,
    numeroDeTempodas: {
        temp1: 12,
        temp2: 1,
        temp3: 0
    },

    mostrarCaracteristicas: function(){
        return `O nome da série é; ${this.nome} a classificação é para maiores de ${this.classificacao} anos e ela está ${this.status}`
    }
}

//console.log(serie.mostrarCaracteristicas())

let livro = {
    titulo: "O Hobbit",
    autor: "J.R.R Tolkien",
    ano: 1925,

    mostrarCaracteristicas: function(){
        return `O nome do livro é: ${this.titulo}, foi lançado em ${this.ano} e foi escrito por ${this.autor}`
    }
}

//console.log(livro.mostrarCaracteristicas())

let atleta = {
    nome: "CR7 -  Flávio Caça Rato",
    time: "Caxias",
    esporte: "Beach Tenis",
    melhorAmigo: "Ribagol",

    celebrarVitoria: function(){
        console.log("SIIIIIIIIIIIIIII")
    }
}

//atleta.celebrarVitoria()

//Função construtora

function anime(nome, personagemForte, personagemFraco, nota){
    this.nome = nome
    this.personagemForte = personagemForte
    this.personagemFraco = personagemFraco
    this.nota = nota

    this.mostrarAnime = function(){
        return `
            nome: ${this.nome},
            maisForte: ${this.personagemForte},
            maisFraco: ${this.personagemFraco},
            nota: ${this.nota}
        `
    }
}

let naruto = new anime("Naruto", "Ebisu", "Orochimaru", 5)
let onePiece = new anime("One Piece", "Coby", "Ace", 5)

//console.log(naruto.mostrarAnime())
//console.log(onePiece.mostrarAnime())

function jogos(titulo, genero, anoLancamento, empresa, jogar){
    return{
        titulo, 
        genero,
        anoLancamento,
        empresa,
        jogar

    }
}

let jogo = jogos("Dragon Age", "RPG", "2009", "Bioware", () => console.log("Morrendo"))

//jogo.jogar()

/*for...in
for...of
for...all*/
//São feitos para arrays, será muito útil para itens 

let personagens = [["Killua", "Mustang"], "Minato", "Aiorous"]

for(let key in personagens){
    console.log(personagens[key])
}
//key significa a posição, o index

let palavra = "teste"

for(let char of palavra){
    console.log(char)
}

//Desmembra e armazena cada item

let professor  = {
    nome: "Stark",
    disciplina: "Física",
    notas: {
        aluno1: [2, 5],
        aluno2: [3, 1],
    }
}

let somaNotas = 0
let numeroEstudantes = 0

for(let estudante in professor.notas){
    somaNotas += professor.notas[estudante] ? 
    professor.notas[estudante].reduce((acc, nota) => acc /*acc é contador*/ + nota, 0/*Aqui esta dizendo em que posição começa a contar*/)/professor.notas[estudante].length:professor.notas[estudante]
    numeroEstudantes++
}
let media = somaNotas/numeroEstudantes

console.log(`A nota média turma é: ${media}`)

if(media >= 3){
    console.log(`${professor.nome} está acima da média`)
} else{
    console.log(`${professor.nome} está abaixo da média`)
}

