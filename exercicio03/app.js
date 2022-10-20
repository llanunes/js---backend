/****************************************************************
 Autor: Larissa Nunes Vaz Alves de Oliveira
 Objetivo: Exibir números pares ou ímpares e a quantidade deles
 Data: 18.08.2022
 Versão: 1.0
 ****************************************************************/

 const {validarNumeroInicial} = require ('./modulos/funcoes')
 const { validarNumeroFinal } = require ('./modulos/funcoes')
 const { validarNumeros } = require ('./modulos/funcoes')
 const { parImpar } = require ('./modulos/funcoes') 


var readline = require ('readline')

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

entradaDados.question('Insira um número entre 0 e 500: ', function(valor){
  let numeroInicial = parseFloat(valor);
  validarNumeroInicial(numeroInicial);
  
  entradaDados.question('Insira um número entre 100 e 1000: ', function(valor){
      let numeroFinal = parseFloat(valor);
      validarNumeroFinal(numeroFinal);
      validarNumeros(numeroInicial,numeroFinal);
      parImpar(numeroInicial, numeroFinal);
  });
});