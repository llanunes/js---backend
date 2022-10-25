/**************************************************************************************************** 
* Objetivo: Arquivo responsável pela manipulação de dados do Back-end
    (GET, POST, PUT, DELETE)
* Autor: Larissa Nunes
* Versão: 1.0
* Data criação: 10/10/2022
* Data modificação: 

ANOTAÇÕES: 


CONTENT-TYPE: ESSA PROPRIEDADE QUE TRAZ O FORMATO DA REQUISIÇÃO


Para manipular o acesso a BD podemos utilizar o prisma.

comandos para  instalação do prisma: 

npm install prisma --save
npx prisma
npx prisma init 
npm install @prisma/client  // como se fosse um drive para fazer as integrações com o banco.

 // duas formas  de manipular o banco:
 // * orm (tabela) 
 // * link direto (scripts)

 //  npx prisma migrate dev : processo de migraçao e ligação com o BD(fazer antes de criar as tabelas, sempre fazer este teste, cria uma model e dar inicio) 
****************************************************************************************************/

const  express  = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const { MESSAGE_ERROR, MESSAGE_SUCESS } = require ('./modulo/config.js');
const { request, response } = require('express');


const app = express();

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    app.use(cors());
    next();
});

// Criamos um bjeto que permite receber um JSON no body das requisições 
const jsonParser = bodyParser.json();

/****************************************************************
    Rotas para CRUD (Create - Read - Update - Delete) de alunos.
    Data: 10/10/2022
*****************************************************************/


// EndPoint para listar todos os alunos
app.get('/alunos', cors(), async (request, response) => {

    let message;
    let statusCode;


    // import do arquivo controllerAluno
    const controllerAlunos = require ('./controller/controllerAluno.js');
    
    // Retorna todos os alunos existentes do BD
    const dadosAlunos = await controllerAlunos.listarAlunos();
    // console.log(dadosAlunos);
    
    // valida se existe retorno 
    if(dadosAlunos){

        //status 200 - deu certo.
        statusCode = 200;
        message = dadosAlunos;
    } else {

        // status 404 - deu erro
        statusCode = 404; 
        message = MESSAGE_ERROR.NOT_FOUND_BD;
    }

    response.status(statusCode);
    response.json(message);
});

// EndPoint para inserir um novo aluno
app.post('/aluno', cors(), jsonParser, async (request, response, next) => {
    let statusCode;
    let message;
    let headerContentType;

    // recebe o tipo de content type que foi enviado no header da requisição
    // application/json
    headerContentType = request.headers['content-type']

        // validar se o content-type é do tipo json
    if (headerContentType == 'application/json'){
        let dadosBody = request.body

        // Realiza um processo de conversão de dados para conseguir comparar o json vazio
        if(JSON.stringify (dadosBody) != "{}"){
            // import do arquivo da controller de aluno
            const controllerAluno = require ('./controller/controllerAluno');

            // chama a função novoAluno da controller e encaminha os dados do body
            const novoAluno = controllerAluno.novoAluno(dadosBody);

           statusCode = novoAluno.status;
           message = novoAluno.message;

        } else {
            statusCode = 400;
            message = MESSAGE_ERROR.EMPTY_BODY;
        }
        
    } else {
        statusCode = 415;
        message = MESSAGE_ERROR.CONTENT_TYPE;
    }

    response.status(statusCode);
    response.json(message);

});

// endpoint para atualizar um aluno existente
app.put('/aluno/:id', cors(), jsonParser, async (request, response, next) => {
    let statusCode;
    let message;
    let headerContentType;

    // recebe o tipo de content type que foi enviado no header da requisição
    // application/json
    headerContentType = request.headers['content-type']

        // validar se o content-type é do tipo json
    if (headerContentType == 'application/json'){
        let dadosBody = request.body

        // Realiza um processo de conversão de dados para conseguir comparar o json vazio
        if(JSON.stringify (dadosBody) != "{}"){

            // recebe id enviado por parametro na requisição
            let id = request.params.id;

            // validacao do ID na requisição 
            if (id != '' && id != undefined){

                // adiciona o id no JSON que chegou no corpo da requisição
                dadosBody.id = id;
                // import do arquivo da controller de aluno
                const controllerAluno = require ('./controller/controllerAluno');

                // chama a função novoAluno da controller e encaminha os dados do body
                const novoAluno = controllerAluno.atualizarAluno(dadosBody);

            statusCode = novoAluno.status;
            message = novoAluno.message;
            } else {
                statusCode =  400 ;
                message = MESSAGE_ERROR.REQUIRED_ID
            }
        } else {
            statusCode = 400;
            message = MESSAGE_ERROR.EMPTY_BODY;
        }
        
    } else {
        statusCode = 415;
        message = MESSAGE_ERROR.CONTENT_TYPE;
    }

    response.status(statusCode);
    response.json(message);

});

// endpoint para deletar um aluno existente
app.delete('/aluno/:id', cors(), jsonParser, async (request, response, next) => {
    let statusCode;
    let message;
    let id = request.params.id

    if (id != '' && id != undefined){
        // import do arquivo da controller de aluno
        const controllerAluno = require ('./controller/controllerAluno');
        // chama a função para excluir um item
        const deletarAluno = controllerAluno.deletarAluno(id);

        statusCode = deletarAluno.status;
        message = deletarAluno.message
    } else {
        statusCode = 400;
        message = MESSAGE_ERROR.REQUIRED_ID
    }
   response.status(statusCode);
   response.json(message);
});

// endpoint para buscar um aluno pelo id
app.get('/aluno/:id', cors(), jsonParser, async (request, response, next) => {
    let message;
    let statusCode;
    let id = request.params.id;
    
    if (id != '' && id != undefined){

         // import do arquivo controllerAluno
        const controllerAluno = require ('./controller/controllerAluno.js');
        
        // Retorna todos os alunos existentes do BD
        const dadosAluno = await controllerAluno.buscarAluno(id);
        // console.log(dadosAlunos);
        
        // valida se existe retorno 
            if(dadosAluno){

                //status 200 - deu certo.
                statusCode = 200;
                message = dadosAluno;

            } else {
                statusCode = 400;
                message = MESSAGE_ERROR.REQUIRED_ID
            }
    } else {

        // status 404 - deu erro
        statusCode = 404; 
        message = MESSAGE_ERROR.NOT_FOUND_BD;
    }

    response.status(statusCode);
    response.json(message);
});

// Ativa o servidor para receber requisições http
app.listen(8080, function(){
    console.log('Servidor aguardando requisições!');
});

// setTimeout( () => {
//    console.clear();
// }, 5000); 









 
