/**
 * Objetivo:                Criar um sistema para uma escola
 * Autor:                   Larissa Nunes Vaz Alves de Oliveira
 * Data de Criacao:         04/08/22
 * Data de Modificacao:     04/08/22
 * Versao:                  1.0.22
 */

 const { calcMedia } = require('./modulo/funcoes');
 const { verStatusAluno } = require('./modulo/funcoes');
 const { validarExame } = require('./modulo/funcoes');
 const { validarStatusExame } = require('./modulo/funcoes');
 const { relatorio } = require('./modulo/funcoes');
 
 var readline = require('readline');
 var entradaDados = readline.createInterface({
     input:  process.stdin,
     output: process.stdout
 });
 
 console.log("\n---- SISTEMA DA ESCOLA ----\n")
 
 entradaDados.question('\nInsira o sexo do(a) aluno(a): ', function (generoAluno) {
     let sexoAluno = generoAluno.toString().toLowerCase();
     let prefixoGeneroAluno;
     if (sexoAluno == 'masculino') {
         prefixoGeneroAluno = 'o';
     } else if (sexoAluno == 'feminino') {
         prefixoGeneroAluno = 'a';
     } else {
         console.log('\nERRO: É necessario inserir o sexo do(a) aluno(a)');
         process.exit(1);
     }
     entradaDados.question('Insira o nome d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + ': ', function (nome) {
         let nomeAluno = nome;
         if (nomeAluno == '') {
             console.log('ERRO: Insira o nome d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno);
             process.exit(1);
         }
         entradaDados.question('Insira o sexo do(a) professor(a): ', function (generoProfessor) {
             let sexoProfessor = generoProfessor.toString().toLowerCase();
             let prefixoGeneroProfessor;
             let prefixoGenero;
             if (sexoProfessor == 'masculino') {
                 prefixoGeneroProfessor = 'or';
                 prefixoGenero = 'o';
             } else if (sexoProfessor == 'feminino') {
                 prefixoGeneroProfessor = 'ora';
                 prefixoGenero = 'a';
             } else {
                 console.log('\nERRO: É necessario inserir o sexo do professor\n');
                 process.exit(1);
             }
             entradaDados.question('Insira o nome d' + prefixoGenero + ' profess' + prefixoGeneroProfessor + ': ', function (nome) {
                 let nomeProfessor = nome;
                 if (nomeProfessor == '') {
                     console.log('ERRO: Insira o nome d' + prefixoGenero + ' profess' + prefixoGeneroProfessor);
                     process.exit(1);
                 }
                 entradaDados.question('Insira o nome do curso: ', function (curso) {
                     let nomeCurso = curso;
                     if (nomeCurso == '') {
                         console.log('\nERRO: É necessário inserir o nome do curso');
                         process.exit(1);
                     }
                     entradaDados.question('Insira o nome da disciplina: ', function (disciplina) {
                         let nomeDisciplina = disciplina;
                         if (nomeDisciplina == '') {
                             console.log('\nERRO: É necessário inserir o nome da disciplina');
                             process.exit(1);
                         }
                         
                         entradaDados.question('\nInsira a primeira nota d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + ': ', function (nota) {
                             let primeiraNota = parseFloat(nota);
                             if (isNaN(primeiraNota) || primeiraNota < 0 || primeiraNota > 100) {
                                 console.log('\nERRO: Insira uma nota valida');
                                 process.exit(1);
                             }
                             entradaDados.question('Insira a segunda nota d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + ': ', function (nota) {
                                 let segundaNota = parseFloat(nota);
                                 if (isNaN(segundaNota) || segundaNota < 0 || segundaNota > 100) {
                                     console.log('\nERRO: Insira uma nota valida');
                                     process.exit(1);
                                 }
                                 entradaDados.question('Insira a terceira nota d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + ': ', function (nota) {
                                     let terceiraNota = parseFloat(nota);
                                     if (isNaN(terceiraNota) || terceiraNota < 0 || terceiraNota > 100) {
                                         console.log('\nERRO: Insira uma nota valida');
                                         process.exit(1);
                                     }
                                     entradaDados.question('Insira a quarta nota d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + ': ', function (nota) {
                                         let media = 0;
                                         let mediaFinal;
                                         let statusAluno;
                                         let statusAlunoExame
                                         let notaExame;
                                         let mediaExame;
                                         let quartaNota = parseFloat(nota);
                                         if (isNaN(quartaNota) || quartaNota < 0 || quartaNota > 100) {
                                             console.log('\nERRO: Insira uma nota valida');
                                             process.exit(1);
                                         }
                                         media = calcMedia(primeiraNota, segundaNota, terceiraNota, quartaNota, media);
                                         statusAluno = verStatusAluno(media, statusAluno);
 
                                         if (statusAluno == 'Aprovado' || statusAluno == 'Reprovado') {
                                             mediaFinal = media;
                                             console.log('\nMedia: ' + media);
                                             console.log('Status d' + prefixoGeneroAluno + ' Alun' + prefixoGeneroAluno + ': ' + statusAluno);
                                             relatorio(nomeAluno, nomeProfessor, nomeCurso, nomeDisciplina, primeiraNota, segundaNota, terceiraNota, quartaNota, notaExame, media, mediaFinal, verStatusAluno, statusAlunoExame, prefixoGeneroAluno, prefixoGeneroProfessor);
                                             process.exit(1);
                                         } else {
                                             console.log('\nStatus d' + prefixoGeneroAluno + ' Alun' + prefixoGeneroAluno + ': ' + statusAluno);
                                             entradaDados.question('Insira a nota que ' + prefixoGeneroAluno + ' alun' + '' + prefixoGeneroAluno + '' + nomeAluno + ' obteve no exame: ', function (nota) {
                                                 notaExame = nota;
 
                                                 mediaExame = validarExame(media, notaExame);
                                                 mediaFinal = mediaExame;
                                                 statusAlunoExame = validarStatusExame(mediaExame, statusAlunoExame);
 
                                                 relatorio(nomeAluno, nomeProfessor, nomeCurso, nomeDisciplina, primeiraNota, segundaNota, terceiraNota, quartaNota, notaExame, media, mediaFinal, statusAluno, statusAlunoExame, prefixoGeneroAluno, prefixoGeneroProfessor);
                                                 process.exit(1);
                                             });
                                         }
                                     });
                                 });
                             });
                         });
                     });
                 });
             })
         });
     });
 });