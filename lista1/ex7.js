// 7) Escreva uma função que receba uma string como argumento e retorna essa string invertida

function inverterString(string) {

    const caracteres = string.split(''); // Convertendo a string para um array de caracteres
    const arrayInvertido = [];

    for (let i = caracteres.length - 1; i >= 0; i--) { // Loop for que percorre o array caracteres de trás para frente. Começamos do último índice (caracteres.length - 1) e vamos até o primeiro índice (0).
        // os índices de um array em JavaScript vão de 0 até length - 1. Portanto, o último índice é length - 1

        arrayInvertido.push(caracteres[i]); // Adiciona cada caractere no início do array arrayInvertido

        stringInversa = arrayInvertido.join(''); // Junta os caracteres do array para formar a string invertida
    }

    return stringInversa;

}

const resultado = inverterString('abcd');
console.log(resultado);