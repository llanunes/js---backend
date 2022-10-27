/**************************************************************************************************** 
* Objetivo: Arquivo responsável pela manipulação de dados com o BD (insert, update, delet e select)
* Autor: Larissa Nunes
* Versão: 1.0
* Data criação: 06/10/2022
* Data modificação: 
****************************************************************************************************/



// função para inserir um novo registro do BD
const insertAluno = async (aluno) => {
    try {
       // import da classe pismaClient, responsável pelas interações com o BD
       const { PrismaClient } = require ('@prisma/client');

       // instancia da classe PrismaClient
       const prisma = new PrismaClient();

       let sql = `insert into tbl_aluno (
        nome,
        foto,
        rg, 
        cpf, 
        email, 
        celular, 
        telefone, 
        sexo, 
        data_nascimento 
        )
        values (
            '${aluno.nome}',
            '${aluno.foto}',
            '${aluno.rg}',
            '${aluno.cpf}',
            '${aluno.email}',
            '${aluno.celular}',
            '${aluno.telefone}',
            '${aluno.sexo}',
            '${aluno.data_nascimento}'
            )`; 

    //$executeRawUnsafe permite encaminhar uma variavel contendo o script         
    const result = await prisma.$executeRawUnsafe (sql);  
    if (result){
        return true;
    } else {
        return false;
    }
    } catch (error){
        return false;
    }
}

// função para atualizar um registro no BD
const updateAluno = async (aluno) => {
    try {
        // import da classe pismaClient, responsável pelas interações com o BD
        const { PrismaClient } = require ('@prisma/client');
 
        // instancia da classe PrismaClient
        const prisma = new PrismaClient();
 
        let sql = `update tbl_aluno set
         nome = '${aluno.nome}',
         foto = '${aluno.foto}',
         rg = '${aluno.rg}', 
         cpf = '${aluno.cpf}', 
         email = '${aluno.email}',
         celular = '${aluno.celular}', 
         telefone = '${aluno.telefone}',
         sexo =  '${aluno.sexo}',
         data_nascimento =  '${aluno.data_nascimento}'
         
         where id = '${aluno.id}'`
         
     // console.log(sql);
        
     //$executeRawUnsafe permite encaminhar uma variavel contendo o script         
     const result = await prisma.$executeRawUnsafe (sql);  
     if (result){
         return true;
     } else {
         return false;
     }
     } catch (error){
         return false;
     }

}

// função para deletar um registro no BD
const deleteAluno = async (id) => {
    try {
        // import da classe pismaClient, responsável pelas interações com o BD
        const { PrismaClient } = require ('@prisma/client');
 
        // instancia da classe PrismaClient
        const prisma = new PrismaClient();
 
        let sql = `delete from tbl_aluno 
        where id = '${id}'`;
         
     // console.log(sql);
        
     //$executeRawUnsafe permite encaminhar uma variavel contendo o script         
     const result = await prisma.$executeRawUnsafe (sql);  
     if (result){
         return true;
     } else {
         return false;
     }
     } catch (error){
         return false;
     }

}

// função para retornar os registros no BD
const selectAllAlunos = async () => {

    // import da classe pismaClient, responsável pelas interações com o BD
    const { PrismaClient } = require ('@prisma/client');


    // instancia da classe PrismaClient
    const prisma = new PrismaClient();

        // recordset = dados vindos de um BD

    // criamos um objeto do tipo recordset para receber os dados do DB aravés do script  SQL (select)    
    const rsAlunos = await prisma.$queryRaw `select cast(id as float) as id, nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento from tbl_aluno order by id desc`;

    if (rsAlunos.length > 0){
        return rsAlunos;
    } else {
        return false;
    }
}

// funcao para retornar apenas o registro baseado no id
const selectByIdAluno = async (id) => {
     // import da classe pismaClient, responsável pelas interações com o BD
     const { PrismaClient } = require ('@prisma/client');


     // instancia da classe PrismaClient
     const prisma = new PrismaClient();
 
         // recordset = dados vindos de um BD
 
        let sql = `select cast(id as float) as 
        id, 
        nome, 
        foto, 
        sexo, 
        rg, 
        cpf, 
        email, 
        telefone, 
        celular, 
        data_nascimento
        from tbl_aluno
        where id = ${id}`;

    // criamos um objeto do tipo recordset para receber os dados do DB aravés do script  SQL (select)    
     const rsAluno = await prisma.$queryRawUnsafe(sql);

     if (rsAluno.length > 0){
         return rsAluno.length;
     } else {
         return false;
     }
}

module.exports = {
    updateAluno,
    deleteAluno,
    selectAllAlunos,
    insertAluno,
    selectByIdAluno
}
