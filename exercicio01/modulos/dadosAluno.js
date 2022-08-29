
const calcMedia = function (primeiraNota, segundaNota, terceiraNota, quartaNota, media) {
    let nota1 = primeiraNota;
    let nota2 = segundaNota;
    let nota3 = terceiraNota;
    let nota4 = quartaNota;

    media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}

const verStatusAluno = function (media, statusAluno){
    if(media < 50){
        statusAluno = 'reprovado.';
    }else if(media < 70){
        statusAluno = 'de exame.';
    } else if(media < 100){
        statusAluno = 'aprovado!'
    }

    return statusAluno;
}

const validarExame = function (media, nota) {
    let notaMedia = parseFloat(media);
    let notaExame = parseFloat(nota);

    let mediaExame = (notaMedia + notaExame) / 2;

    return mediaExame;
}

const validarStatusExame = function (mediaExame, statusAluno) {
    if (mediaExame < 60) {
        statusAluno = 'Reprovado!';
    } else {
        statusAluno = 'Aprovado através do exame!';
    }
    return statusAluno;
}

const relatorio = function (nomeAluno, nomeProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame, media, mediaFinal, statusAluno, statusAlunoExame, prefixoGeneroAluno, prefixoGeneroProfessor) {
    if (statusAluno == 'Exame') {
        console.log('\n' + prefixoGeneroAluno.toUpperCase() + ' alun' + prefixoGeneroAluno + ' ' + nomeAluno + ' foi ' + statusAlunoExame + ' na disciplina ' + nomeDisciplina + '.' + '\nCurso: ' + nomeCurso + '\nProfess' + prefixoGeneroProfessor + ': ' + nomeProfessor + '\nNotas d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + ': ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + ', ' + notaExame + '\nMédia final: ' + media + '\nMédia final do exame: ' + mediaFinal + '\n');
    } else {
        console.log('\n' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + ' ' + nomeAluno + ' foi ' + statusAluno + ' na disciplina ' + nomeDisciplina + '.' + '\nCurso: ' + nomeCurso + '\nProfess' + prefixoGeneroProfessor + ': ' + nomeProfessor + '\nNotas d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + ': ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia final: ' + media + '\n');
    }
}

module.exports = {
    calcMedia, 
    verStatusAluno,
    relatorio,
    validarExame,
    validarStatusExame
}
