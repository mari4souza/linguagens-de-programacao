// 4) Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<ultimo nome>>@facens.br
// Por exemplo: a variável nome possui o conteúdo "Maria Eduarda Cardoso". Deve mostrar maria.cardoso@facens.br


function criarEmail(variavel) {
    // Dividir o nome em partes usando espaços como delimitadores
    const partesNome = variavel.split(' ');

    // Pegar o primeiro e o último nome
    const primeiroNome = partesNome[0].toLowerCase();
    const ultimoNome = partesNome[partesNome.length - 1].toLowerCase();

    // Criar o endereço de e-mail no formato
    const email = `${primeiroNome}.${ultimoNome}@facens.br`;

    return email;
}

// Exemplo de uso
const resultadoEmail = criarEmail("Maria Eduarda Cardoso");

// Imprimir o resultado no console
console.log(resultadoEmail)