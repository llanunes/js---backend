/****************************************************************************************************************
* Objetivo:         Arquivo que contém todas as funções para calculos matemáticos.  
* Autor:            Larissa Nunes
* Data de criação:  01/08/2022
* Versão:           1.0.22 (Modificação: altera a casa decimal(1.1). Adicioniu outra function: muda a versão(2.0).);
*****************************************************************************************************************/

//metodo tradicional de se criar uma função.
    //Formato menos utilizado no JS    
// function calcular (valor1, valor2, opcaoCalculo){

//     //criando variaveis locais para recebr o conteudo dso argumentos que foroam encaminhados na function
// let numero1 = valor1;
// let numero2 = valor2;
// let operacao = opcaoCalculo.toUpperCase();
// let result;
// let erro = false;

// if(isNaN (numero1) || isNaN (numero2)){
//     console.log ('ERRO: Digite somente números.')
//     erro = true;
// }else{

//     switch(operacao){
//         case 'SOMAR': case '+':
//             result = numero1 + numero2;
//             break;
//         case 'SUBTRAIR': case '-':
//             result = numero1 - numero2;
//             break;
//         case 'MULTIPLICAR': case '*':
//             result= numero1 * numero2;
//             break;
//         case 'DIVIDIR': case '/':
//         if(numero2==0){
//             console.log("ERRO: não é possivel realizar divisão por 0!")
//         } else{
//             result = numero1 / numero2;
//             break;
//         }    
//         default: 
//         console.log('ERRO: Não foi escolhida uma operação válida.')
//         erro = true;
//     }
// }
// if(erro){
//     return false;
// }else{
//     return result;
// }
// } 

const calcular = function(valor1, valor2, opcaoCalculo){
    let numero1 = valor1;
let numero2 = valor2;
let operacao = opcaoCalculo.toUpperCase();
let result;
let erro = false;

if(isNaN (numero1) || isNaN (numero2)){
    console.log ('ERRO: Digite somente números.')
    erro = true;
}else{

    switch(operacao){
        case 'SOMAR': case '+':
            result = numero1 + numero2;
            break;
        case 'SUBTRAIR': case '-':
            result = numero1 - numero2;
            break;
        case 'MULTIPLICAR': case '*':
            result= numero1 * numero2;
            break;
        case 'DIVIDIR': case '/':
        if(numero2==0){
            console.log("ERRO: não é possivel realizar divisão por 0!")
        } else{
            result = numero1 / numero2;
            break;
        }    
        default: 
        console.log('ERRO: Não foi escolhida uma operação válida.')
        erro = true;
    }
}
    if(erro){
        return false;
    }else{
        return result;
    }
} 

/*
As funções que serão importadas em outros projetos precisamobrigatóriamente serem incluídas no module.exports.
As funções que nao forem incluídas no moduke.exports irão funcionar apenas localmente neste arquivo.
*/
module.exports = {
    calcular
}