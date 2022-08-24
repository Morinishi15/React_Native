let comparaComThis = function(param){
    console.log(this === param)

}
// Nesse contexto o this não é o this (porque ele aponta para o global)
comparaComThis(this)
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
// Em uma função normal o this aponta para o global, porém em uma função arrow ele não apontará para o global
comparaComThisArrow(module.exports)
comparaComThisArrow(this) 

//Usando bind dentro de uma função arrow
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
//A arrow function é mais forte que a função bind
comparaComThisArrow(module.exports)
// resumindo o this de uma função arrow não vai variar nunca, mesmo utilizando o bind!
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\funcoes\arrowFunction3.js"
false
true
false
true
false
true
true
false
true

[Done] exited with code=0 in 0.173 seconds
*/