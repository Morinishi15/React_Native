// This fixo na função arrow:
function Pessoa(){
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
/*
[Running] node "c:\Users\user\Desktop\React\Revisao_js\funcoes\arrowFunction2.js"
1
2
3
4
5

[Done] exited with code=1 in 5.966 seconds
*/