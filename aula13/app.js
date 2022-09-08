/* 
    ***************** bibliotecas necessárias para criar uma API *********************

    é uma biblioteca para criar aplicaçoes em node no formato de API
        express : npm install express --save

        é uma biblioteca para manipular as permissões do protocolo http
            cors : npm install cors --save

            é uma biblioteca que permite manipular o corpo do protocolo http
                body-parser : npm install body-parser --save

*/

// import da biblioteca do express para criação da API
const express = require ( 'express' );

// import da biblioteca do cors para manipular as permissões doprotocolo http
const cors = require ( 'cors' );

//import da biblioteca do body-parser que irá manipular o corpo das requisições do protocolo http
const bodyParser = require ( 'body-parser' );

// cria um objeto chamado app que será especialista nas funções do express
const app = express();

const { getEstados, getEstado } = require('./modulo/estados');
const { getCidade } = require ('./modulo/cidades')


// request : recebe dados
// response : devolve dados
// next : próximo. continuar.
app.use( (request, response, next)  => {

    // permite especificar quem serão os IP's que podem acessar a API
    response.header('Access-Control-Allow-Origin', '*'); // '*' : pode vir de qualquer lugar, significa todos.

    // permite especificar quais serão os verbos (metodos) que a API irá reconhecer
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors());

    next();
});

//EndPoints: listagem de estados
app.get('/estados', cors(), async function(request, response, next){
    


    // recebe o array de estados
    let estados = getEstados();

    // cria uma variável do tipo JSON
    let estadosJSON = {}
    if(estados){

        // criamos uma chave chamada uf, para receber o array de dados
        estadosJSON.uf = estados;
        response.status(200)
        response.json(estadosJSON);
    } else{
        response.status(400);
        response.json('{ Message: Nenhum item encontrado }')
    }
});

// listagem de cidades
app.get('/cidades', cors(), async function (request, response, next){
    let cidades = {mensagem: 'Bem vindo a API de cidades'}

    response.status(200); // 200 : ok
    response.json(cidades);
})

// busca informações do estado pela sigla
app.get('/estado/:sigla', cors(), async function(request, response, next){

    // recebe a sigla enviada por parametro no endpoint
    let sigla = request.params.sigla
    let estado = getEstado(sigla)

    if(estado){
        response.status(200)
        response.json(estado)
    } else{
        response.status(404)
    }
});

app.get('/cidades/:sigla', cors(), async function(request, response, next){

    // recebe a sigla o estado encaminhado do endpoint
    let sigla = request.params.sigla;
    // chama a funcao de cidades para buscar as cidades pelo estado
    let cidades = getCidade(sigla);
    let cidadesJSON = {}


    if (cidades){
        cidadesJSON.city = cidades;
        response.status(200)
        response.json(cidadesJSON)
    } else{
        response.status(404)
    }
 })

// para que os endpoints possa estar funcionando, precisamos obrigatóriamente finalizar a API com essa function que representa o start da API
app.listen(8080, function(){
    console.log('servidor aguardando requisições')
});
