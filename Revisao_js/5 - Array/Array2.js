// Métodos importantes:
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//.pop é um método que remove o último elemento de um array
pilotos.pop()// "Massa quebrou o carro" rs
console.log(pilotos)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array2.js"

[ 'Vettel', 'Alonso', 'Raikkonen' ]

[Done] exited with code=0 in 0.204 seconds
*/
//.push adiciona um novo elemento dentro de um array, na última posição
pilotos.push('Verstappen')
console.log(pilotos)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array2.js"

[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

[Done] exited with code=0 in 0.193 seconds
*/
//.shift remove o elemento da primeira posição
pilotos.shift(pilotos)
console.log(pilotos)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array2.js"

[ 'Alonso', 'Raikkonen', 'Verstappen' ]

[Done] exited with code=0 in 0.2 seconds
*/
//.unshift é o contrário do shift, ou seja, ele adiciona um elemento na primeira posição do array
pilotos.unshift('Hamilton')
console.log(pilotos)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array2.js"

[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

[Done] exited with code=0 in 0.19 seconds
*/
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array2.js"

[ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

[Done] exited with code=0 in 0.189 seconds
*/
pilotos.splice(3,1) // Massa quebrou o carro de novo  :(
console.log(pilotos)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array2.js"

[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

[Done] exited with code=0 in 0.313 seconds
*/
//.slice (pedaço) esse método retorna um novo array
// podemos pegar um novo array a partir do índice de um array anterior
const algunsPilotos1 = pilotos.slice(2)
// Nesse caso teremos um array a partir do índice 2 do array "pilotos"
console.log(algunsPilotos1)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array2.js"

[ 'Bottas', 'Raikkonen', 'Verstappen' ]

[Done] exited with code=0 in 0.197 seconds
*/
const algunsPilotos2 = pilotos.slice(1, 4)
/* O número após a vírgula representa o índice final do pedaço de arrayque pegaremos, 
porém esse índice não entra no novo array gerado (índice limite)
*/
console.log(algunsPilotos2)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array2.js"

[ 'Alonso', 'Bottas', 'Raikkonen' ]

[Done] exited with code=0 in 0.251 seconds
*/