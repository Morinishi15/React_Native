function rand({min=0, max=1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min : 40}
console.log(rand(obj))
console.log(rand({min : 950}))
console.log(rand({}))
/* 
[Running] node "c:\Users\user\Desktop\React\Revisao_js\desestructuring\destructing3.js"
49
995
686

[Done] exited with code=0 in 0.171 seconds
*/
//a partir da próxima linha dá erro
console.log(rand()) // essa linha que deu erro porque ele tenta desestruturar algo undefined ou nulo 
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\desestructuring\destructing3.js"
45
965
911
c:\Users\user\Desktop\React\Revisao_js\desestructuring\destructing3.js:1
function rand({min=0, max=1000}) {
               ^

TypeError: Cannot read properties of undefined (reading 'min')
    at rand (c:\Users\user\Desktop\React\Revisao_js\desestructuring\destructing3.js:1:16)
    at Object.<anonymous> (c:\Users\user\Desktop\React\Revisao_js\desestructuring\destructing3.js:19:13)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.169 seconds

*/