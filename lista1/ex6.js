// 6) Faça uma função que mostre o dobro do número passado. Caso o número seja menor ou igual a 0 deve mostrar a mensagem "Só é aceito números positivos maiores que zero"


function dobroDoNumero(numero) {

    if (numero > 0) { // Verificando se o número é maior que 0
        const dobro = numero * 2;
        console.log(`O dobro do número ${numero} é: ${dobro}`);
    } else {
        console.log("Só é aceito números positivos maiores que zero");
    }
}

// Chamar a função com a entrada do usuário
dobroDoNumero(5);