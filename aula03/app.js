// typeof verifica qual o tipo de dados deuma variavel ou objeto   
// console.log(typeof(numero1));

console.log("Calculadora Simples");


const {calcular} = require('./modulos/calculadora.js')
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question("Digite o primeiro número: ", function(valor1){
// Declarando a variável e convertendo o valor digitado pelo usuário em float
    let numero1= parseFloat(valor1);

    entradaDados.question("Digite o segundo número: ", function(valor2){
        let numero2 = parseFloat (valor2);
            
        entradaDados.question("Escolha a operação: somar[+], subtrair[-], multiplicar[*], dividir [/] ", function(opcao){
            // Declarando a variavel que vai receber o tipo de operação matemática e convertendo o texto em MAIÚSCULO
            //toUpperCase() - converte em MAIUSCULO
            //toLowerCase() -  converte em MINUSCULO
            let operacao = opcao.toUpperCase();
            let result;

            if (result = calcular(numero1, numero2, operacao)){
                console.log('O resultado é: ' + result);
            }
        });        
    });
});


