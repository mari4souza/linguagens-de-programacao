// 9) Escreva uma funcao que recebe um endereço de e-mail como argumento e retorna true se o e-mail for valido ou false caso contrario. Um e-mail
// valido deve conter um unico simbolo '@' e pelo menos um ponto '.' após o '@'.

function validarEmail(email) {

    var qtdArroba = 0;
    var temPontoApos = false;

    for(let i = 0; i < email.length; i++) { // Percorrendo todos os caractreres do email

        if (email[i] === '@') { // Verifica se o caractere atual é '@'. Se sim, incrementa
            qtdArroba++;
        } else if (email[i] === '.' && qtdArroba === 1) { // Se o caractere atual for '.', verifica se qtdArroba é igual a 1 (ou seja, se já encontramos um '@'). 
            // Se sim, define temPontoApos como true.
            temPontoApos = true;
        }
    }

    return qtdArroba === 1 && temPontoApos; // Retorna true se houver exatamente um '@' e pelo menos um ponto '.' após o '@', caso contrário, retorna false.
}

console.log(validarEmail('maria@gmail.com')); // Deve imprimir true
console.log(validarEmail('mariainvalido@gmailcom')); // Deve imprimir false