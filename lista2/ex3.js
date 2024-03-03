// Dado o array numeros = [10, 20, 30, 40, 50], escreva uma funcao que receba um array e 
// retorne a soma de todos os elementos desse array

numeros = [10, 20, 30, 40, 50];

function somarArray(numeros) {
    let soma = 0;

    for(let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    return soma;
}

console.log(somarArray(numeros));