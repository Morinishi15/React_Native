// Simulando array com objeto 
//(Demonstrar uma estrutura parecida com a de um array a partir de um objeto)
//Só para ficar bem clara a questão de que um array é um objeto
const quaseArray = { 0: 'Rafael', 1:'Ana', 2:'Bia'}
console.log(quaseArray)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array3.js"
{ '0': 'Rafael', '1': 'Ana', '2': 'Bia' }

[Done] exited with code=0 in 0.305 seconds
*/
Object.defineProperty(quaseArray, 'toString',{
    value: function(){ return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array3.js"

Rafael

[Done] exited with code=0 in 0.195 seconds
*/
const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array3.js"

[ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]

[Done] exited with code=0 in 0.21 seconds
*/