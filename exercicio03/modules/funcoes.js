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
     if( numeroInicial < 0 || numeroInicial > 500){
         erro = true;
         validarErro();
     }
 }
 
 function validarNumeroFinal(numeroFinal){
     if( numeroFinal < 100 || numeroFinal > 1000){
         erro = true;
         validarErro();
     }
 }

 function validarNumeros(numeroInicial, numeroFinal){
    if ( numeroInicial >= numeroFinal) {
        console.log('\nERRO: O valor inicial não pode ser maior ou igual ao valor final.\n');
        process.exit(1);
    } 
 }

 function parImpar(numeroInicial, numeroFinal){
    let numeroPar  = [];
    let numeroImpar = [];
    
    for (let numero = numeroInicial ; numero <= numeroFinal ; numero++) {
        if (numero % 2 == 0) {
            numeroPar.push(numero);
        } else {
            numeroImpar.push(numero);
        }
    }
    console.log('\n------- NUMEROS PARES -------');
    for (let contador = 0 ; contador < numeroPar.length ; contador++) {
        console.log('\t' + numeroPar[contador]);
    }
    console.log('Quantidade de numeros pares: ' + numeroPar.length);
    console.log('\n------- NUMEROS IMPARES -------');
    for (let contador = 0 ; contador < numeroImpar.length ; contador++) {
        console.log('\t' + numeroImpar[contador]);
    }
    console.log('\nQuantidade de numeros impares: ' + numeroImpar.length + '\n');
 }

 module.exports = {
     validarErro,
     validarNumeroInicial,
     validarNumeroFinal,
     validarNumeros,
     parImpar,
 }
