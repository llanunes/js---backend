
const media = function (primeiraNota, segundaNota, terceiraNota, quartaNota, media) {
    let nota1 = primeiraNota;
    let nota2 = segundaNota;
    let nota3 = terceiraNota;
    let nota4 = quartaNota;

    media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}

const statusAluno = function (media, statusAluno){
    if(media < 50){
        statusAluno = 'reprovado.';
    }else if(media < 70){
        statusAluno = 'de exame.';
    } else if(media < 100){
        statusAluno = 'aprovado!'
    }

    return statusAluno;
}

module.exports = {
    media, 
    statusAluno
}

