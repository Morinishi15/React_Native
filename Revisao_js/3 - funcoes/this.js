// função bind:
const pessoa = {
    saudacao: 'Bom dia!',
    //podemos criar uma função dessa forma abaixo, graças ao novo js(ES6)
    falar() {
        console.log(this.saudacao)
        //O this serve para acessar o atributo do obj, acessando saudacao que é o obj de pessoa
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e orientação a objetos
// armazenar a função em uma variável causa uma mudança de contexto e por isso gera o conflito

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//O bind é um método responsável por amarrar um determinado objeto pra ele ser o dono da execução daquele método sempre que ele for chamado
// quando chamarmos essa função o this será referenciado pela função bind, o bind linka o this a algo e esse link fica setado
// função bind não altera nenhuma função, ela apenas garante que o objeto esteja apontado pra algo

/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\funcoes\this.js"
Bom dia!
undefined
Bom dia!

[Done] exited with code=0 in 0.19 seconds

*/