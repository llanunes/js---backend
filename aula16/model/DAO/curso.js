/**************************************************************************************************** 
* Objetivo: Arquivo responsável pela manipulação de dados com o BD (insert, update, delet e select)
* Autor: Larissa Nunes
* Versão: 1.0
* Data criação: 06/10/2022
* Data modificação: 
****************************************************************************************************/


const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();

// função para inserir um curso no banco de dados
const insertCurso = async (curso) => {
    try {
       let sql = `insert into tbl_curso 
       (
        nome,
        carga_horaria,
        icone,
        sigla
       )
       values (
        '${curso.nome}',
        '${curso.carga_horaria}',
        '${curso.icone}',
        '${curso.sigla}'
       )`;

        const result = await prisma.$executeRawUnsafe(sql);
        if(result){
            return true;
        } else {
            return false;
        }
    } catch (erro){
        return false
    }
};

const updateCurso = async (curso) => {
    try {
        let sql = `update tbl_curso set
        nome = '${curso.nome}',
        carga_horaria = '${curso.carga_horaria}',
        icone = '${curso.icone}',
        curso = '${curso.sigla}'

        where id = ${curso.id} ` 
        
     //$executeRawUnsafe permite encaminhar uma variavel contendo o script         
     const result = await prisma.$executeRawUnsafe (sql);  
     if (result){
         return true;
     } else {
         return false;
     }
     } catch (erro){
         return false;
     }
}

const deleteCurso = async (id) => {
    try {
        let sql = `delete from tbl_curso 
        where id = '${id}'`;
        
    const result = await prisma.$executeRawUnsafe (sql);  
     if (result){
         return true;
     } else {
         return false;
     }
     } catch (erro){
         return false;
     }
}

const selectAllCursos = async () => {
    const rsCursos = await prisma.$queryRaw `select cast(id as float) as id, nome, carga_horaria, icone, sigla from tbl_curso order by id desc`;

    if (rsCursos.length > 0){
        return rsCursos;
    } else {
        return false;
    }
}

const selectByIdCurso = async (id) => {
        // recordset = dados vindos de um BD
       let sql = `select cast(id as float) as 
        id, 
        nome,
        carga_horaria,
        icone,
        sigla
        where id = ${id}`;

   // objeto do tipo recordset para receber os dados do DB aravés do script  SQL (select)    
    const rsAluno = await prisma.$queryRawUnsafe(sql);

    if (rsAluno.length > 0){
        return rsAluno.length;
    } else {
        return false;
    }
}

module.export = {
    insertCurso,
    updateCurso,
    deleteCurso,
    selectAllCursos,
    selectByIdCurso
}