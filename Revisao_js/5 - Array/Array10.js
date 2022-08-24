// Implementação do filter
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
    
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPade Pro', preco: 4199, fragil: true},
    { nome:'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil 

const resultado = produtos.filter2(produtoCaro).filter2(produtoFragil)
console.log(resultado)
/* sem a implementação do filter2
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array10.js"
c:\Users\user\Desktop\React\Revisao_js\Array\Array10.js:11
const resultado = produtos.filter2(produtoCaro).filter2(produtoFragil)
                           ^

TypeError: produtos.filter2 is not a function
    at Object.<anonymous> (c:\Users\user\Desktop\React\Revisao_js\Array\Array10.js:11:28)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.182 seconds*/
/* com a implementação do filter 2
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array10.js"
[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPade Pro', preco: 4199, fragil: true }
]

[Done] exited with code=0 in 0.189 seconds*/ 
