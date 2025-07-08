/*let listaCoisas = Array()

//1° Forma de declarar o que tem no array
//listaCoisas[1] = "Celular"

//2° Forma de declarar o que tem no array

listaCoisas["Hardware"] = Array()
listaCoisas["Hardware"][0] = "Placa de vídeo"
listaCoisas["Hardware"][1] = "Notebook"

listaCoisas["Filmes"] = ["O Senhor dos Anéis"]
listaCoisas["Filmes"][1] = "Harry Potter: E a Pedra Filosofal"*/

//Puxar itens específicos
//console.table(listaCoisas["Filmes"])

//possível usar métodos para implementar funcionalidades em arrays, ajudando a ordenar de forma mais coesa

//Estrutura de uma função básica

/*function parOuImpar(valor){
    let resultado = 0
    
    if (valor % 2 === 0){ 
        resultado = "PAR"
    }else {
        resultado = "ÍMPAR"
    }
    return resultado
}

let verificaParOuImpar = parOuImpar(3)

console.log(verificaParOuImpar)



function arrayOrdenado(lista){
    let n = lista.length
    for(i = 0; i < n - 1; i++){
    for(let j = 0; j < n - 1 - i; j++){
        if(lista[j] > lista[j + 1]){
            const temp = lista[j]
            lista[j] = lista[j + 1]
            lista[j + 1] = temp
            }
        }
    }
    return lista 
}

let numeros = [1, 22, 55, 32, 7, 59, 11, 15, 2]
let ordenacao = arrayOrdenado(numeros)
console.log(ordenacao)

//Funções anonimas ou podemos chamar também de call back

function ordenaArray(arr){
    return arr.sort((a, b) => a -b)
}

let result = ordenaArray([1,5,4,3,2])

console.log(result)

let teste = function(){
    console.log("Gremio") /*Isso é o mesmo que isso:  teste = () => {console.log(teste)} teste("Galaticos")
}


//Call back

function showFunction(sucessCallBack, errorCallBack){
    if (false){
        errorCallBack("sucesso na requisição")
    } else{
        sucessCallBack("erro na requisição")
    }
}

let sucessCallBack = (message) => {console.log (message)}

let errorCallBack = (message) => {console.log (message)}

showFunction(sucessCallBack, errorCallBack)

*/

//Soma de números do array

function somaDeArray(numeros){
    let somaDosNumeros = 0
    let maiorNumero = 0
    let n = numeros.length
    for (let i = 0; i < n - 1; i++) {
        somaDosNumeros += numeros[i]
        if (numeros[i] > maiorNumero){
            maiorNumero = numeros[i]
        }  
    }  
    return {soma: somaDosNumeros, maior: maiorNumero}
}

let numeros = [1, 22, 55, 32, 7, 59, 11, 15, 2]
let resultado = somaDeArray(numeros)


console.log("Soma:", resultado.soma);
console.log("Maior número:", resultado.maior);

