
// 1) Escreva um programa que declare duas variaveis numericas e realize as quatro operações matematicas basicas +-/*. Imprima os resultados no console.


// Declaração das variáveis
const num1 = 10;
const num2 = 5;

// Função para realizar as operações matemáticas
function realizarOperacoes(num1, num2) {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;

    return {
        soma,
        subtracao,
        multiplicacao,
        divisao
    };
}

// Armazenando o objeto de retorno da função
const resultados = realizarOperacoes(num1, num2);


// Imprimindo no console
console.log("Soma:", resultados.soma);
console.log("Subtração:", resultados.subtracao);
console.log("Multiplicação:", resultados.multiplicacao);
console.log("Divisão:", resultados.divisao);