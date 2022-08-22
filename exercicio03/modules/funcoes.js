/****************************************************************
 Autor: Larissa Nunes Vaz Alves de Oliveira
 Objetivo: Exibir números pares ou ímpares e a quantidade deles
 Data: 18.08.2022
 Versão: 1.0
 ****************************************************************/

let erro = false;

function validarErro(){
    if(erro == true){
        console.log('\nERRO: Insira um valor válido.')
        process.exit(1);
    }
}

function validarNumeroInicial(numeroInicial){
    if(numeroInicial < 0 || numeroInicial > 500){
        erro = true;
        validarErro();
    }
}

function validarNumeroFinal(numeroFinal){
    if(numeroFinal < 100 || numeroFinal > 1000){
        erro = true;
        validarErro();
    }
}

module.exports = {
    validarErro,
    validarNumeroInicial,
    validarNumeroFinal
}