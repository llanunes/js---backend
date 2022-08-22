/************************************************************
Autor: Larissa Nunes Vaz Alves de Oliveira
Objetivo: Tabuada Simples
Data de criação: 15.08.2022
Versão:1.0
*************************************************************/

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

const { validarTabuada } = require('./modules/functionApp')
const { validarContador } = require ('./modules/functionApp')
const { calcularTabuada } = require ('./modules/functionApp')

 entradaDados.question('Insira a tabuada inicial de 2 a 100: ', function(valor){
    let valorTabuadaInicial = parseFloat(valor);
    validarTabuada(valorTabuadaInicial); 
    entradaDados.question('Insira a tabuada final de 2 a 100: ', function(valor){
        let valorTabuadaFinal = parseFloat(valor);
        validarTabuada(valorTabuadaFinal); 
        entradaDados.question('Insira o operador inicial de 1 a 50: ', function(valor){
            let valorOperadorInicial = parseFloat(valor);
            validarContador(valorOperadorInicial); 
            entradaDados.question('Insira o operador final de 1 a 50: ', function(valor){
                let valorOperadorFinal = parseFloat(valor);
                validarContador(valorOperadorFinal); 

                if(valorOperadorInicial > valorOperadorFinal){
                    console.log('\nERRO: O contador final não pode ser maior que o final.')
                    process.exit(1);
                } else{
                    calcularTabuada(valorTabuadaInicial, valorTabuadaFinal, valorOperadorInicial, valorOperadorFinal);
                }
            });
        });
    });
});

