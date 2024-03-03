// Escreva uma funcao chamda alunosMaior que recebe um array de objetos Alunos (criado acima)
// como entrada e retorna um novo array com apenas os alunos com idade acima de 18 anos

const alunos = [
    {
        "nome": "maria",
        "idade": "21",
        "curso": "ads",
        "matricula": "236766",
    },

    {
        "nome": "rebeca",
        "idade": "17",
        "curso": "ads",
        "matricula": "236767",
    },

    {
        "nome": "amanda",
        "idade": "18",
        "curso": "ads",
        "matricula": "236768",
    }
]

let alunosMaiores = [];

function alunosMaior(alunos) {

    for (let i = 0; i < alunos.length; i++) {

        if (alunos[i].idade > 18) {
            alunosMaiores.push(alunos[i]);
        }
    }

    return alunosMaiores;
}

console.log(alunosMaior(alunos));