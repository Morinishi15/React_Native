function rand ([min = 0, max = 1000]){
    if (min>max) [min, max] = [max, min] // invertendo as variáveis
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))
/*[Running] node "c:\Users\user\Desktop\React\Revisao_js\desestructuring\deses4.js"
45
998
4
572

[Done] exited with code=0 in 0.172 seconds
*/
//a partir da próxima linha dá erro
console.log(rand()) // dará erro, mesmo problema do destructuring 3
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\desestructuring\deses4.js"
41
994
9
713
c:\Users\user\Desktop\React\Revisao_js\desestructuring\deses4.js:1
function rand ([min = 0, max = 1000]){
              ^

TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
    at rand (c:\Users\user\Desktop\React\Revisao_js\desestructuring\deses4.js:1:15)
    at Object.<anonymous> (c:\Users\user\Desktop\React\Revisao_js\desestructuring\deses4.js:19:13)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.176 seconds

*/