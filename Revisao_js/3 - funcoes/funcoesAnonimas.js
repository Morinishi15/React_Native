// Uma função anônima é apenas uma função sem nome
const soma = function (x,y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a,b))
}
imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y){
    return x - y
})
imprimirResultado(3,4, (x,y) => x * y)
//Arrow function sempre será uma função anônima, não tem como dar nome pra uma arrow function
const pessoa = {
    falar: function(){
        console.log('Opa')
    }
} 
pessoa.falar()
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\funcoes\funcoesAnonimas.js"
7
7
-1
12
Opa

[Done] exited with code=0 in 0.251 seconds
*/