
function Item(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}


function criarCarrinhoDeCompras() {
  const carrinho = [];
  
  
  function adicionarItem(item) {
    carrinho.push(item);
  }
  
  
  function calcularTotal(comDesconto, callback) {
    let total = 0;
    
    carrinho.forEach(function(item) {
      total += item.preco;
    });
    
    if (comDesconto) {
     
      total *= 0.9;
    }
    
    if (callback && typeof callback === 'function') {
      callback(total);
    }
    
    return total;
  }
  
  return {
    adicionarItem,
    calcularTotal
  };
}


const meuCarrinho = criarCarrinhoDeCompras();

const item1 = new Item('Arroz', 10);
const item2 = new Item('Feijão', 5);
const item3 = new Item('Óleo', 3);

meuCarrinho.adicionarItem(item1);
meuCarrinho.adicionarItem(item2);
meuCarrinho.adicionarItem(item3);

const valorTotalSemDesconto = meuCarrinho.calcularTotal(false, function(total) {
  console.log(`Valor total (sem desconto): R$ ${total.toFixed(2)}`);
});

const valorTotalComDesconto = meuCarrinho.calcularTotal(true, function(total) {
  console.log(`Valor total (com desconto): R$ ${total.toFixed(2)}`);
});
