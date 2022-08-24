//Desafio Map
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome":"Kit de lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = json =>JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
/* [Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array7.js"
[ 3.45, 13.9, 41.22, 7.5 ]

[Done] exited with code=0 in 0.2 seconds*/ 


/* como já existe uma constante essa daqui não roda, é só pra ficar de exemplo! 
resultado = carrinho.map(paraObjeto)
console.log(resultado)
[Running] node "c:\Users\user\Desktop\React\Revisao_js\Array\Array7.js"
[
  { nome: 'Borracha', preco: 3.45 },
  { nome: 'Caderno', preco: 13.9 },
  { nome: 'Kit de lapis', preco: 41.22 },
  { nome: 'Caneta', preco: 7.5 }
]

[Done] exited with code=0 in 0.181 seconds*/