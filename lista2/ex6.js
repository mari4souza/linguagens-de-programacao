// Crie um objeto chamado aluno com as propriedades nome, idade, curso, e matricula. Adicione um 
// metodo chamado mostrarInformacoes que exibe todas as informacoes do aluno

const aluno =  {
    "nome": "maria",
    "idade": "21",
    "curso": "ads",
    "matricula": "236766",

    mostrarInformacoes: function() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Matrícula: ${this.matricula}`;
    }
}

console.log(aluno.mostrarInformacoes())