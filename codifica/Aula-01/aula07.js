let fruitList = Array()
let nameList = ["Jaques", "Kanneman", "Killua"]

//adicionar itens

fruitList[0] = "Maça"
fruitList[1] = "Banana"

console.table(fruitList)
fruitList.push("Morango") //Adicionar no final da lista
fruitList.unshift("Pera") //Adicionar no começo da lista

//Excluir itens

fruitList.pop() //Excluir o último
fruitList.shift() //Excluir o primeiro

//Procurar no array o elemento que você quer

let resultado = fruitList.indexOf("Maça")
console.log(resultado)

//Estrutura de array com repetição

for (let i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
}

//Existem arrays em multidimensões

//E existem os arrays de arrays que são as listas


