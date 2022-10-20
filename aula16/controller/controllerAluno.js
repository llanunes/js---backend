/**************************************************************************************************** 
* Objetivo: Arquivo responsável pela manipulação de recebimento, tratamento e retorno de dados entre a API e a model (insert, update, delet e select)
* Autor: Larissa Nunes
* Versão: 1.0
* Data criação: 06/10/2022
* Data modificação: 
****************************************************************************************************/

const { MESSAGE_ERROR, MESSAGE_SUCESS } = require ('../modulo/config.js')


// funcao para gerar um novo aluno
const novoAluno = (aluno) => {
    
    // validação de campos obrigatórios
    if (aluno.nome == '' || aluno.foto == '' || aluno.rg == '' || aluno.cpf == '' || aluno.email == '' || aluno.data_nascimento == '' ){
        return { status: 404, message: MESSAGE_ERROR.REQUIRED_FIELDS};
        // validação para verificar se o email é válido
    } else if (!aluno.email.includes('@')){
        return { status: 404, message: MESSAGE_ERROR.INVALID_EMAIL };
    } else {
        const novoAluno = require ('../model/DAO/alunos.js');

        // chama a função para inserir um novo aluno
        const result = novoAluno.insertAluno(aluno);
        
        if (result){
            return  { status: 201, message: MESSAGE_SUCESS.INSERT_ITEM };
        } else {
            return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
        }
    }
}

// funcao para atualizar um registro
const atualizarAluno = (aluno) => {

}

// funcao para excluir um registro
const deletarAluno = (id) => {

}

// funcao para retornar todos os registros
const listarAlunos = async () => {
    const { selectAllAlunos } = require ('../model/DAO/alunos.js');
    const alunos = await selectAllAlunos();


    // Conversão do tipo de dados BigInt para Int (??????????????????) -- resolvido pelo prof (!!!!!!!!!!!!!!!!!!!!);
    // alunos.forEach(element => {
    //     element.id = Number (element.id)
    // });

    if(alunos){
        return alunos;
    } else {
        return false;
    }
}

// console.log(listarAlunos());

module.exports = {
    listarAlunos,
    novoAluno,
    deletarAluno,
    atualizarAluno
}