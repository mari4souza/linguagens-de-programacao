// 8) Escreva uma funcao que recebe uma string como argumento e retorna o número de vogais presentes nesta string. Considere apenas vogais minúsculas

function contarQtdVogais(string) {

    var qtdVogais = 0;
    var vogais = ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0; i <= string.length; i++) { // Loop que percorre cada caractere da string

        if (vogais.includes(string[i])) { // Verifica se o caractere atual na posição i da string está presente no array de vogais.
            qtdVogais++;
        }
    }

    return qtdVogais;
}

var resultado = contarQtdVogais('Alice'); // Considerando apenas as vogais minusculas
console.log(resultado);