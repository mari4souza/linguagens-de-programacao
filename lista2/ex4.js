// Dado o array numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], escreva uma funcao que receba um array e retore um array de numeros impares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let impares = [];

function retornarImpares(numeros) {
    for(let i = 0; i <= numeros.length; i++) {
        if (numeros[i] % 2 === 1) {
            impares.push(numeros[i])
        }
    }

    return impares;
}

console.log(retornarImpares(numeros));