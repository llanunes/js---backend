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
    // validacao para o id como campo obrigatorio
        if (aluno.id == '' || aluno.id == undefined){
            return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
        }   
    // validacao de campos obrigatorios
    else if (aluno.nome == '' || aluno.foto == '' || aluno.rg == '' || aluno.cpf == '' || aluno.email == '' || aluno.data_nascimento == '' ){
        return { status: 404, message: MESSAGE_ERROR.REQUIRED_FIELDS};
        // validação para verificar se o email é válido
    } else if (!aluno.email.includes('@')){
        return { status: 404, message: MESSAGE_ERROR.INVALID_EMAIL };
    } else {
        const atualizarAluno = require ('../model/DAO/alunos.js');

        // chama a função para inserir um novo aluno
        const result = atualizarAluno.updateAluno(aluno);
        
        if (result){
            return  { status: 201, message: MESSAGE_SUCESS.UPDATE_ITEM };
        } else {
            return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
        }
    }
}

// funcao para excluir um registro
const deletarAluno = (id) => {
    if (id == '' || id == undefined){
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }   
    const excluirAluno = require ('../model/DAO/alunos.js');

        // chama a função para inserir um novo aluno
        const result = excluirAluno.deleteAluno(id);
        
        if (result){
            return  { status: 201, message: MESSAGE_SUCESS.DELETE_ITEM };
        } else {
            return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
        }
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

// funcao para retornar um registro baseado no id
const buscarAluno = async (id) => {

    let dadosAlunoJSON = {};

    if (id == '' || id == undefined){
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }   

    const { selectByIdAluno } = require ('../model/DAO/alunos.js');
    const dadosAluno = await selectByIdAluno(id);

    if(dadosAluno){
        
        dadosAlunoJSON.aluno = dadosAluno;
        return dadosAlunoJSON;
    } else {
        return false;
    }
}

// console.log(listarAlunos());

module.exports = {
    listarAlunos,
    novoAluno,
    deletarAluno,
    atualizarAluno,
    buscarAluno
}