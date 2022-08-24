  const pessoa = {
    nome:'Ana',
    idade: 15,
    peso: 60,
    endereco: {
        logradouro: 'rua das conchas',
        numero: 347
    }
  }
  // console.log(pessoa)
const {nome, idade} = pessoa
// console.log(nome, idade)
const {nome:n , idade: i} = pessoa
console.log(n,i)
/* 
[Running] node "c:\Users\user\Desktop\React\Revisao_js\desestructuring\index.js"
Ana 15

[Done] exited with code=0 in 0.171 seconds
*/