//Array: visão geral
//Array em js é um objeto, porém não implica em nada 
console.log(typeof Array, typeof new Array, typeof [])
// O array em js é dinâmico 
//Podemos colocar todos os tipos de dados em um array no js, array heterogêneo
//Trabalhar com dados homogêneos em um array (Fica muito difícil trabalahar com dados diferentes em um array)

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
//Uma forma de se escrever arrays

aprovados = ['Bia', 'Carlos', 'Ana']
//Forma mais recomendada de se escrever arrays
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
/*Uma das formas de se adicionar um elemento no array
    Não é tão recomendada pois se tivermos um array muito grande, fica difiícil de saber qual o índice que 
    queremos adicionar
    Essa forma é mais utilizada para substituir um item dentro de um array
*/
aprovados.push('Abia')
// Melhor forma de se adicionar um item dentro de um array
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
//Adicionaremos Rafael no índice 9, ou seja, teremos 10 itens no array e os itens de 5 ao 8 estão undefineds já que não definimos nenhum dado para esses índices
console.log(aprovados)
// [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
console.log(aprovados[8] === undefined)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"

true

[Done] exited with code=0 in 0.177 seconds
*/
console.log(aprovados[8] === null)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"

false

[Done] exited with code=0 in 0.179 seconds
*/
console.log(aprovados)
aprovados.sort()
console.log(aprovados)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"

[ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

[Done] exited with code=0 in 0.203 seconds

Alguns métodos não alteram o array original, mas retornam um novo array, o método sort altera o array original
.sort altera o array, ordenando ele, nesse caso em ordem alfabética
*/
//Excluir itens do array:
delete aprovados[1]
// exclui o elemento mas não reordena o array 
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"


[ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]
undefined // console.log(aprovados[1])
Bia // console.log(aprovados[2])
['Abia', <1 empty item>, 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items>]

[Done] exited with code=0 in 0.208 seconds
*/ 
aprovados = ['Bia', 'Carlos', 'Ana']
/* 
Splice serve para adicionar elementos em um determinado índice
remover elementos de um array
remover e adicionar elementos ao mesmo tempo
*/
aprovados.splice(1, 1) 
/*
o primeiro elemento diz o índice que você quer trabalhar (antes da vírgula)
o segundo elemento diz quantos elementos vamos excluir a partir do índice (após a vírgula)
*/
console.log(aprovados)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"

[ 'Bia', 'Ana' ]

[Done] exited with code=0 in 0.203 seconds
*/
// excluindo dois elementos
aprovados.splice(1,2)
console.log(aprovados)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"

[ 'Bia' ]

[Done] exited with code=0 in 0.214 seconds
*/
//adicionando elementos
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"

[ 'Bia', 'Elemento1', 'Elemento2' ]

[Done] exited with code=0 in 0.181 seconds
*/
//Apenas adicionando elementos
aprovados.splice(1,0, 'Elemento1', 'Elemento2')
console.log(aprovados)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"

[ 'Bia', 'Elemento1', 'Elemento2', 'Elemento1', 'Elemento2' ]

[Done] exited with code=0 in 0.201 seconds
*/
//Substituindo itens no array
aprovados = ['Fernando','Carlos','Ana','Paulo','João']
console.log(aprovados)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"

[ 'Fernando', 'Carlos', 'Ana', 'Paulo', 'João' ]

[Done] exited with code=0 in 0.199 seconds
*/
aprovados[0] = 'Ricardo'
console.log(aprovados)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array1.js"

[ 'Ricardo', 'Carlos', 'Ana', 'Paulo', 'João' ]

[Done] exited with code=0 in 0.181 seconds
*/