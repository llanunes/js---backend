/**************************************************************************************************** 
* Objetivo: Arquivo responsável pela manipulação de recebimento, tratamento e retorno de dados entre a API e a model (insert, update, delet e select)
* Autor: Larissa Nunes
* Versão: 1.0
* Data criação: 27/10/2022
* Data modificação: 
****************************************************************************************************/


const { MESSAGE_ERROR, MESSAGE_SUCESS } = require ('../modulo/config.js');

// função para criar um novo curso
const novoCurso = (curso) => {
    
    // validação de campos obrigatórios
    if (curso.nome == '' || curso.carga_horaria == '' || curso.icone == '' || curso.sigla == ''){
        return { status: 404, message: MESSAGE_ERROR.REQUIRED_FIELDS};
    } else {
        const novoCurso = require ('../model/DAO/curso.js');

        // chama a função para inserir um novo curso
        const result = novoCurso.insertCurso(curso);
        
        if (result){
            return  { status: 201, message: MESSAGE_SUCESS.INSERT_ITEM };
        } else {
            return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
        }
    }
}

// funcao para atualizar um registro (curso no banco de dados)
const atualizarCurso = (curso) => {

    // validacao para o id como campo obrigatorio
        if (curso.id == '' || curso.id == undefined){
            return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
        }   
    // validacao de campos obrigatorios
    else if (curso.nome == '' || curso.carga_horaria == '' || curso.icone == '' || curso.sigla == ''){
        return { status: 404, message: MESSAGE_ERROR.REQUIRED_FIELDS};
        // validação para verificar se o email é válido
    } else {
        const atualizarcurso = require ('../model/DAO/curso.js');

        // chama a função para inserir um novo aluno
        const result = atualizarCurso.updateCurso(curso);
        
        if (result){
            return  { status: 201, message: MESSAGE_SUCESS.UPDATE_ITEM };
        } else {
            return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
        }
    }
}

// funcao para excluir um registro (curso no banco de dados)
const deletarCurso = (id) => {
    if (id == '' || id == undefined){
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }else{
        const curso = buscarCurso(id) 
            if(curso){
                const deletarCurso = require ('../model/DAO/curso.js');
                const result = deletarCurso.deleteCurso(id);

                if (result){
                    return  { status: 201, message: MESSAGE_SUCESS.DELETE_ITEM };
                } else {
                return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
                }
            } else {
                return {status: 404, message: MESSAGE_ERROR.NOT_FOUND_BD}
        }
    }    
}

// função para listar os cursos
const listarCursos = async () => {
    const { selectAllCursos } = require ('../model/DAO/curso.js');
    const cursos = await selectAllCursos();

    if(cursos){
        return cursos;
    } else {
        return false;
    }
}


// função para achar um curso por ID
const buscarCurso = async (id) => {

    let dadosCursoJSON = {};

    if (id == '' || id == undefined){
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }   
    const { selectByIdCurso } = require ('../model/DAO/curso.js');
    const dadosCurso = await selectByIdCurso(id);

    if(dadosCurso){
        dadosCursoJSON.aluno = dadosCurso;
        return dadosCursoJSON;
    } else {
        return false;
    }
}

module.export = {
    novoCurso,
    atualizarCurso,
    deletarCurso,
    listarCursos,
    buscarCurso
}