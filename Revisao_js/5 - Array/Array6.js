/* Função map:
- Percorre o array
- Existe um laço de repetição associado ao map
- Serve para fazer uma transformação no array
- "Mapear um array para outro array do mesmo tamanho, só que com os dados transformados"
- Sempre vai gerar um array do mesmo tamanho do array original
- Não altera o array original
*/
const nums = [1, 2, 3, 4, 5]
//Map é um for com propósito 
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array6.js"
[ 2, 4, 6, 8, 10 ]

[Done] exited with code=0 in 0.192 seconds
*/
resultado = nums.map(function(e) {
    return e * 20
})
console.log(resultado)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array6.js"
[ 20, 40, 60, 80, 100 ]

[Done] exited with code=0 in 0.179 seconds
*/
resultado = nums.map(function(e) {
    //return e * 20
})
console.log(resultado)
//Como não retornamos nada, temos um array novo com todos seus elementos undefined
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array6.js"

[ undefined, undefined, undefined, undefined, undefined ]

[Done] exited with code=0 in 0.181 seconds

- O map sempre retorna um array novo, não modifica o array original!!!!
Executando todos os consoles do código, com todas as variações de resultados que fizemos
teremos todos os 3 arrays em questão:
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array6.js"
[ 2, 4, 6, 8, 10 ] resultado 1
[ 20, 40, 60, 80, 100 ] resultado 2
[ undefined, undefined, undefined, undefined, undefined ] resultado 3

[Done] exited with code=0 in 0.181 seconds
*/

const soma10 = e => e + 10 // Soma 10 aos elementos
const triplo = e => e * 3 // Triplica os elementos
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 
/* Transforma o elemento em um formato financeiro
parseFloat converte uma string em um número ponto-flutuante
toFixed se refere à quantidade de casas decimais, no caso são duas
replace substitui o ponto por vírgula */
// A função recebe o elemento do array, modifica e cria um array diferente
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array6.js"

[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]

[Done] exited with code=0 in 0.21 seconds
Resultado foi uma string pois a última função tem um template de string
*/
resultado = nums.map(soma10).map(paraDinheiro)
console.log(resultado)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array6.js"

[ 'R$ 11,00', 'R$ 12,00', 'R$ 13,00', 'R$ 14,00', 'R$ 15,00' ]

[Done] exited with code=0 in 0.284 seconds
*/
resultado = nums.map(triplo).map(soma10).map(paraDinheiro)
console.log(resultado)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array6.js"

[ 'R$ 13,00', 'R$ 16,00', 'R$ 19,00', 'R$ 22,00', 'R$ 25,00' ]

[Done] exited with code=0 in 0.198 seconds
*/
