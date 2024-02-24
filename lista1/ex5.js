// 5) Escreva um programa que imprima os números de 1 a 10 no console na mesma linha usando Estrutura de Repetição. Os números devem ser
// separados por um traço (-), exemplo: 1-2-3...-.10. Após o número 10 não pode ter um traço

function numerosComTraco() {

    let numeros = ''; // Declarando uma "string" vazia

    for(i = 1; i <= 10; i++) { // Enquanto i é menor que 10
        numeros += i; // A variável números, antes vazia, recebe o i

        if (i < 10) {
            numeros += '-'; // Depois, verifica se este i é menor que 10, se for, adiciona o caracter "-" a string numeros
        }
    }

    console.log(numeros); // Imprimindo
}

numerosComTraco(); // Chamando a função