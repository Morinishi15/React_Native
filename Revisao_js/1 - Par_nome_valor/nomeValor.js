// Par nome/valor

const { cleanCodeBlockContent } = require("discord.js")

// Um objeto é uma coleção de chave e valor (nome e valor)
const saudacao = 'opa' // contexto léxico 1
// Também está presente quando declaramos uma variável 
// nome "saudacao" valor "opa"
/* Definimos uma var/const dentro de um contexto léxico 
Contexto léxico: Local onde a sua var/const foi definida fisicamente no 
código. 
Nesse caso a nossa const foi definida dentro do arquivo nomeValor.js, porém
no browser, por exemplo, ela pode ser definida em um contexto global 
(objeto window(global))
- Existem vários contextos dentro de um programa(código)
- Em uma função, por exemplo, temos outro contexto léxico
- O programa sempre procura variáveis dentro de seus contextos léxicos,
caso não ache em um mais interno ele procura em um mais externo até o encontrar,
caso não encontre, no js, temos a resposta "undefined"*/
function exec(){
    const saudacao = "Faaaaala"// contexto léxico 2
    return saudacao 
}
/* esse saudacao procurará dentro de seu contexto léxico, que nesse caso é a 
função*/ 
console.log(saudacao)
/* 
[Running] node "c:\Users\user\Desktop\React\Revisao_js\1 - Par_nome_valor\nomeValor.js"
opa

[Done] exited with code=0 in 0.211 seconds
Retornou opa pois nós não chamamos a função */
console.log(saudacao,exec()) 
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\1 - Par_nome_valor\nomeValor.js"

opa Faaaaala

[Done] exited with code=0 in 0.197 seconds
Embora tenham o mesmo nome, como estão em contextos léxicos diferentes, elas apresentam valores
diferentes*/

// Objetos são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}
console.log(cliente)
/* 
[Running] node "c:\Users\user\Desktop\React\Revisao_js\1 - Par_nome_valor\nomeValor.js"

{
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: { logradouro: 'Rua muito legal', numero: 123 }
}

[Done] exited with code=0 in 6.807 seconds
*/ 

//Exemplo de erro: 
/*const saudacao = 'Epa'
console.log(saudacao)
[Running] node "c:\Users\user\Desktop\React\Revisao_js\1 - Par_nome_valor\nomeValor.js"
c:\Users\user\Desktop\React\Revisao_js\1 - Par_nome_valor\nomeValor.js:68
const saudacao = 'Epa'
      ^

SyntaxError: Identifier 'saudacao' has already been declared
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1055:15)
    at Module._compile (node:internal/modules/cjs/loader:1090:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.191 seconds
é o que acontece quando tentamos declarar duas coisas iguais em um mesmo contexto léxico */
