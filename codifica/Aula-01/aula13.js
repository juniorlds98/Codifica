//Recursividade é chamar a função novamente com um caso base

//recursividade de fatorial

function fatorial(n){
    if(n === 0){
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))

function fibonacci(n){
    if(n === 0){
        return 1
    } else if(n === 1){
        return 1         
    } else {
        return fibonacci(n-1) + fibonacci(n - 2)
    }
}

console.log(fibonacci(10))

const categorias = [{
    id: 1,
    nome:"Eletrônicos",
    filhos: [
        {id: 2, nome: "celulares", filhos: []},
        {id: 3, nome: "computadores", filhos: [
            {id: 4, nome: "notebooks", filhos: []}
        ]},
    ]
},
{
    id: 5,
    nome: "roupas",
    filhos: []
}
]

function imprimirCategorias(lista, nivel = 0){
    for(let categoria of lista){
        console.log("--|".repeat(nivel * 2) + categoria.nome)
        if(categoria.filhos.length > 0){
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }
}

imprimirCategorias(categorias)


// TAD - Tipos Abstratos de Dados

//São 4 princípios fundamentais

/*

Abstração
Encapsulamento
Ocultação de Informação
Separação entre interface e implementação

*/

/*

Aprender:

-Listas(encadeadas, duplamente encadeadas e circulares)
- Pilhas
- Filas
- Arvores de decisões, binária e de busca
- Hash
- Mapa
- Grafo

*/