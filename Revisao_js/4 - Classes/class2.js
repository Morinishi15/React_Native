class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

/* Extends:
    Forma que temos no âmbito de sintaxe de classes de definir que uma determinada classe tem outra classe como protótipo
    ou que uma determinada função gerada a partir daquela classe terá como protótipo uma outra função que será gerada
    a partir da classe avo, tanto pai gerará uma função quanto avo também, e o extends define a relação de protótipo,
    Ou seja, estamos falando da herança
     
*/
class pai extends avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
        
    }
}
//super se refere a superclasse, dar uma estudada em oo depois

class filho extends pai {
    constructor() {
    super('Silva')

    }
}

const Filho = new filho
console.log(Filho)

//Classes herdeiras herdam seus valores de suas classes pais