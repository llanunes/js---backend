/*
Autor: Larissa Nunes Vaz Alves de Oliveira
Objetivo:  funções para separar sequencia de numeros pares e ímpares
Data: 29.08.2022
Versão: 1.0
*/

const getPares = function(numero1, numero2){
    let numeroInicial = parseInt(numero1);
    let numeroFinal = parseInt(numero2);
    let pares = [];
    let erro = false;

    while(numeroInicial <= numeroFinal){
        if(numeroInicial % 2 == 0){
            pares.push(numeroInicial);
        }
        numeroInicial++;
    }
    if (erro == true){
        return false
    } else{
        return pares;
    }
}

console.log(getPares(1, 10));

const getImpares = function(numero1, numero2){
    let numeroInicial = parseInt(numero1);
    let numeroFinal = parseInt(numero2);
    let impares = [];
    let erro = false;

    while(numeroInicial <= numeroFinal){
        if(numeroInicial % 2 != 0){
            impares.push(numeroInicial);
        }
    numeroInicial++;
    }
   

    pares = getPares(numeroInicial, numeroFinal);
    impares = getImpares(numeroInicial, numeroFinal); 

    paresImpares = [pares, impares]
    return paresImpares;

    if (erro == true){
        return false
    } else{
        return impares;
    }
}

console.log(getImpares(1, 10));