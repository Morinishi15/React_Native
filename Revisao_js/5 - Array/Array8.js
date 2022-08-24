//Implementando o map 
Array.prototype.map2 = function(callback){
    const newArray= []
    for (let i = 0; i<this.length;i++){
        newArray.push(callback(this[i], i, this))
              }
    return newArray          
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome":"Kit de lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = json =>JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)

//Antes da implementação
/* [Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array8.js"
c:\Users\user\Desktop\React\Revisao_js\Array\Array8.js:14
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
                           ^

TypeError: carrinho.map2 is not a function
    at Object.<anonymous> (c:\Users\user\Desktop\React\Revisao_js\Array\Array8.js:14:28)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.186 seconds*/ 

//Após a implementação
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array8.js"
[ 3.45, 13.9, 41.22, 7.5 ]

[Done] exited with code=0 in 0.178 seconds*/ 
