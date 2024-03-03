// Crie um objeto chamado produto com as proriedades nome, preco, quantidade, e calcularTotal.
// O metodo calcularTotal deve retornar o preco total do produto (preco multuiplicado pela quantidade)

const produto = {
    "nome": "refrigerante",
    "preco": "5.99",
    "quantidade": "4",

    calcularTotal: function() {
        return this.preco * this.quantidade;
    }
}

console.log(produto.calcularTotal())