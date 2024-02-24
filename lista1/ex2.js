// 2) Faça um programa que mostre os números ímpares em um intervalo de 0 a 100


// Função que mostra números ímpares de 0 a 100
function mostrarImpares(inicio, fim) {

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// Chamada da função 
mostrarImpares(0, 100);