// Dado o objeto endereco com propriedades como rua, numero, bairro e cidade. Faca
// um loop que mostre todas as propriedades e seus valores de forma generica

const endereco = {
    "rua": "Av. Paulista",
    "numero": "305",
    "bairro": "Bela Vista",
    "cidade": "Sorocaba",

    mostrarPropriedades: function() {
        for(let prop in this) {
            console.log(`${prop}: ${this[prop]}`);
        }
    }
}

endereco.mostrarPropriedades();

