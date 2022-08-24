//Implementação do forEach
//#desafio
/* const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array5.js"
c:\Users\user\Desktop\React\Revisao_js\Array\Array5.js:4
aprovados.forEach2(function(nome, indice){
          ^

TypeError: aprovados.forEach2 is not a function
    at Object.<anonymous> (c:\Users\user\Desktop\React\Revisao_js\Array\Array5.js:4:11)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.162 seconds 
*/

// Implementando forEach2:
/*
function arrayEach (){
    const forEach2 = {
        for (let i = 0;i < aprovados.length;i++ )
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array5.js"
c:\Users\user\Desktop\React\Revisao_js\Array\Array5.js:26
        for (let i = 0;i < aprovados.length;i++ )
                 ^

SyntaxError: Unexpected identifier
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1055:15)
    at Module._compile (node:internal/modules/cjs/loader:1090:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.203 seconds
Minha tentativa falha rs, em minha defesa eu não sabia dessa parada de array.prototype kkkk
*/

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
/* 
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array5.js"
1) Agatha
2) Aldo
3) Daniel
4) Raquel

[Done] exited with code=0 in 0.179 seconds
*/
/*
forEach padrão do js:
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array5.js"
1) Agatha
2) Aldo
3) Daniel
4) Raquel

[Done] exited with code=0 in 0.192 seconds
*/