// 10) Escreva uma funcao que verifique se uma determinada string é um palindromo (ou seja, pode ser lida da mesma forma tanto da esquerda para a direita,
// quanto da direita para a esquerda) Exemplo: arara

function vericarPalindromo(string) { 

    let arrayInvertido = [];
    let palindromo = false;

    for (let i = string.length - 1; i >= 0; i--) { // Percorre a string da direita para a esquerda, começando do último caractere

        arrayInvertido.push(string[i])
    }

    stringInvertida = arrayInvertido.join('') // Converte o array invertido de volta para string

    palindromo = string === stringInvertida;

    return palindromo;
}

console.log(vericarPalindromo('ana'));
console.log(vericarPalindromo('arara'));
console.log(vericarPalindromo('string'));
