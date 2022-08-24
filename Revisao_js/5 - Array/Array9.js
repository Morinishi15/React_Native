/* Filter: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
- Percorre o array
- Serve pra filtrar um array
- Criação de subarrays com um propósito a sua escolha
- O array é sempre ou menor ou igual ao array original
- ex: 
- filtrar os alunos aprovados 
- filtrar os clientes que estão devendo
- filtrar as notas acima de 8 
Callback :
Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário, recebendo três argumentos:
element
O elemento que está sendo processado no array.

index
O índice do elemento atual que está sendo processado no array.
array
O array para qual filter foi chamada.
thisArg Optional
Opcional. Valor a ser usado como this durante a execução do callback. 
*/
// Array.prototype.filter (mozila developer)
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPade Pro', preco: 4199, fragil: true},
    { nome:'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
console.log(produtos.filter(function(p){
    return false
}))
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array9.js"
[]

[Done] exited with code=0 in 0.187 seconds
*/

console.log(produtos.filter(function(p){
    return true
}))
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array9.js"

[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPade Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

[Done] exited with code=0 in 0.185 seconds*/
// Não filtrou nada pois retornou true para tudo

console.log(produtos.filter(function(p){
    return p.preco > 2500
}))
/* 
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array9.js"

[ { nome: 'iPade Pro', preco: 4199, fragil: true } ]

[Done] exited with code=0 in 0.219 seconds
*/

console.log(produtos.filter(function(p){
    return p.preco > 2400
}))
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array9.js"

[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPade Pro', preco: 4199, fragil: true }
]

[Done] exited with code=0 in 0.19 seconds */

// Produtos fragéis e produtos acima de 500 reais:
// Maneira que eu fiz!
console.log(produtos.filter(x => x.preco> 500 && x.fragil === true))
/* [Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array9.js"

[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPade Pro', preco: 4199, fragil: true }
]

[Done] exited with code=0 in 0.194 seconds*/ 

//Exemplo do professor!
const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil // já é verdadeiro ou falso 
const resultado = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(resultado)
/* 
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array9.js"

[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPade Pro', preco: 4199, fragil: true }
]

[Done] exited with code=0 in 0.214 seconds
*/
