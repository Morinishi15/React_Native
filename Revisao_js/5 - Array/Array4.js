// ForEach #1
// ForEach é uma forma de percorrer um array
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
//A função acima é uma call back que será chamada em cada um dos elementos do array
//Essa função possui um "for", então ele chamará um novo call back toda vez que passar por um novo elemento
/* ForEach possui 3 parâmetros padrões, o primeiro é o valor do elemento, nome nesse caso,
o segundo é o índice e o terceiro é o próprio array
Se quisermos ter acesso ao índice precisamos colocar o primeiro parâmetro (nome), porque o índice sempre é passado como    
segundo parâmetro (usando o forEach)
*/
//Como não colocamos o próprio array como parâmetro ele foi ignorado pelo console.
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array4.js"
1) Agatha
2) Aldo
3) Daniel
4) Raquel

[Done] exited with code=0 in 0.172 seconds
*/
aprovados.forEach(nome => console.log(nome))
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array4.js"

Agatha
Aldo
Daniel
Raquel

[Done] exited with code=0 in 0.226 seconds
*/
//O forEach passou pelo índice mas como não colocamos o índice como um dos parâmetros,o console ignorou
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
// Outra forma de coletar os nomes do array (passar uma função em uma const/var e depois passar no forEach)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array4.js"

Agatha
Aldo
Daniel
Raquel

[Done] exited with code=0 in 0.188 seconds */
// Passando o array na função
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome} ${array}`)
})
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array4.js"

1) Agatha Agatha,Aldo,Daniel,Raquel
2) Aldo Agatha,Aldo,Daniel,Raquel
3) Daniel Agatha,Aldo,Daniel,Raquel
4) Raquel Agatha,Aldo,Daniel,Raquel

[Done] exited with code=0 in 0.235 seconds
ou */
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)

})
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array4.js"

[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
2) Aldo
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
3) Daniel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
4) Raquel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]

[Done] exited with code=0 in 0.2 seconds*/
//Passando um quarto parâmetro
aprovados.forEach(function(nome, indice, array, x){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x)
})
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array4.js"
1) Agatha
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
undefined
2) Aldo
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
undefined
3) Daniel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
undefined
4) Raquel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
undefined

[Done] exited with code=0 in 0.269 seconds
O x apareceu undefined pois o forEach possui apenas 3 parâmetros!!!
*/