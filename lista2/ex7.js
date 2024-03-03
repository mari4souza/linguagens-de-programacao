// Escreva uma funcao chamada encontraMaiorNumero que recebe um array de numeros
// como entrada e retorna o maior numero encontrado no array

function encontraMaiorNumero(array) {
    let maiorNumero = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }

    return maiorNumero;
}

console.log(encontraMaiorNumero([1, 7, 5, 9, 12, 3, 4]))