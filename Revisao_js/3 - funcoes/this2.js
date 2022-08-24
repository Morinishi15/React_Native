// função bind 2:
function Pessoa(){
    this.idade = 0
    //podemos utilizar esse método de criar uma constante para driblar o problema da variação do this
    const self = this
    // setInterval Dispara uma outra função a partir de determinado intervalo que você passou (podemos passar uma função como parâmetro de outra função)
    setInterval(function() { 
        self.idade++
        console.log(self.idade)
    }/*.bind(this), ou podemos utilizar a função bind para driblar a variação do this*/, 1000 ) 
    
}

new Pessoa
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\funcoes\this2.js"
c:\Users\user\Desktop\React\Revisao_js\funcoes\this2.js:15
/*

SyntaxError: Invalid or unexpected token
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1055:15)
    at Module._compile (node:internal/modules/cjs/loader:1090:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.226 seconds
Esse é o erro que roda quando não utilizamos a função bind
*/
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\funcoes\this2.js"
1
2
3
4
5
6
7
8
9

[Done] exited with code=1 in 9.945 seconds
Roda quando o bind está ativo
*/