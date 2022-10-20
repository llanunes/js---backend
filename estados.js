/* 
Autor: Larissa Nunes Vaz Alves de Oliveira
Objetivo: Obter uma lista de estados.
Data: 29.08.2022
Versão: 1.0
*/

let erro = false;

function validarErro(){
    if(erro == true)
    return false
}

// simulando o resultado de uma API
var estados = [
    
]

// retorna todos os estados pela sigla
const getEstados = function(){
    let listaEstados = [];

    estados.forEach(item => {
        listaEstados.push (item.sigla)
        validarErro();
    });
    return listaEstados;
}
console.table(getEstados())