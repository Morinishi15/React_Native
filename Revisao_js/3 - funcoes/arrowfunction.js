//Função introduzida no ES6 
// Possui uma sintaxe mais curta e um this associado ao contexto no qual a função foi escrita
// Função normal

let dobro = function(a){
    return 2 * a
}
//Função arrow

dobro = (a) =>{
    return 2 * a
}

//Função arrow é sempre uma função anônima. armazenar a função arrow em uma var ou const se quiser chamá-la depois
//Podemos tirar os parênteses se tivermos um único parâmetro
//Tirando as chaves, o corpo da função, temos o retorno implícito 
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\funcoes\arrowfunction.js"
6.283185307179586
Olá

[Done] exited with code=0 in 0.173 seconds
*/