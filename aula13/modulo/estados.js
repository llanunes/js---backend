/* 
Autor: Larissa Nunes Vaz Alves de Oliveira
Objetivo: Obter uma lista de estados.
Data: 29.08.2022
Versão: 1.0
*/



// simulando o resultado de uma API
var estados = [
    {
        sigla: 'SP',
        nome: 'São Paulo'
    },
    {
        sigla: 'SC',
        nome: 'Santa Catarina'
    },
    {
        sigla: 'MG',
        nome: 'Minas Gerais'
    },
    {
        sigla: 'RJ',
        nome: 'Rio de Janeiro'
    },
    {
        sigla: 'BA',
        nome: 'Bahia'
    },
    {
        sigla: 'RS',
        nome: 'Rio Grande do Sul'
    },
    {
        sigla: 'CE',
        nome: 'Ceara'
    },
    {
        sigla: 'AC',
        nome: 'acre'
    },
    {
        sigla: 'GO',
        nome: 'Goiás'
    }
]

// retorna todos os estados pela sigla
const getEstados = function(){
    let listaEstados = [];
    let erro = true

    estados.forEach(item => {
        listaEstados.push (item.sigla)
        erro = false;
    })
    if (erro){
        return false;
    } else{
        return listaEstados;
    }
}

const getEstado = function(siglaEstado){
        let sigla = siglaEstado.toUpperCase();
        // cria um objeto do tipo json
        let estado = {};
        let erro = true;

    if (typeof(sigla) !='undefined' ){    
        if( sigla != '' && sigla.length == 2){

        estados.forEach( item => {
            // locaiza um item no array -> index.of
            if (item.sigla.indexOf(sigla) == 0){
                estado.uf = item.sigla
                estado.descricao = item.nome
                erro = false
            }
        });
            if (erro){
                return false
            } else {
                return estado
            }
        }    
    }
}
 

module.exports = {
    getEstados,
    getEstado,
}