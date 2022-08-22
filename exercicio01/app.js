/**
 * Objetivo:                Criar um sistema para uma escola
 * Autor:                   Larissa Nunes Vaz Alves de Oliveira
 * Data de Criacao:         04/08/22
 * Data de Modificacao:     04/08/22
 * Versao:                  1.0.22
 */

 const {inserirDados, statusAluno} = require('./modulos/dadosAluno');
 const {media} = require('./modulos/dadosAluno');
 const {classificacao} = require('./modulos/dadosAluno');

 var readline = require('readline');
 var entradaDados = readline.createInterface({
     input:  process.stdin,
     output: process.stdout
 });
 
 entradaDados.question('\nInsira o sexo do(a) aluno(a) [Mascuino][Feminino]: ', function (generoAluno) {
     let sexoAluno = generoAluno.toString().toLowerCase();
     let prefixoGeneroAluno;
     if (sexoAluno == '') {
         console.log('\nERRO: É necessario inserir o sexo do aluno\n');
         process.exit(1);
     } else if (sexoAluno == 'masculino') {
         prefixoGeneroAluno = 'o';
     } else if (sexoAluno == 'feminino') {
         prefixoGeneroAluno = 'a';
     } else if (sexoAluno != 'feminino' || sexoProfessor != 'masculino'){
        console.log('\nERRO: Insira um sexo válido.')
        process.exit(1);
      }
     entradaDados.question('Insira o nome d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + ': ', function (nome) {
         let nomeAluno = nome;
         if (nomeAluno == '') {
             console.log('ERRO: Insira o nome d' + prefixoGeneroAluno + ' alun' + prefixoGeneroAluno);
             process.exit(1);
         }
         entradaDados.question('Insira o sexo do(a) professor(a) [Mascuino][Feminino]: ', function (generoProfessor) {
             let sexoProfessor = generoProfessor.toString().toLowerCase();
             let prefixoGeneroProfessor;
             let prefixoGenero;
             if (sexoProfessor == '') {
                 console.log('\nERRO:  É necessario inserir o sexo do professor\n');
                 process.exit(1);
             } else if (sexoProfessor == 'masculino') {
                 prefixoGeneroProfessor = 'or';
                 prefixoGenero = 'o';
             } else if (sexoProfessor == 'feminino') {
                 prefixoGeneroProfessor = 'ora';
                 prefixoGenero = 'a';
              } else if (sexoProfessor != 'feminino' || sexoProfessor != 'masculino'){
                console.log('\nERRO: Insira um sexo válido.')
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
                         console.log('\nERRO: Insira o nome do curso');
                         process.exit(1);
                     }
                     entradaDados.question('Insira o nome da disciplina: ', function (disciplina) {
                         let nomeDisciplina = disciplina;
                         if (nomeDisciplina == '') {
                             console.log('\nERRO: Insira o nome da disciplina');
                             process.exit(1);
                         }
                        entradaDados.question('Insira a primeira nota: ', function (primeiraNota) {
                            let nota1 = primeiraNota;
                            if ( nota1 == '') {
                                console.log('\nERRO: Insira o valor da primeira nota ');
                                process.exit(1);
                            } else if( isNaN (nota1) || nota1 < 0 || nota1 > 100){
                                console.log('\nERRO: Insira uma nota válida.')
                                process.exit(1);
                            }
                            entradaDados.question('Insira a segunda nota: ', function(segundaNota) {
                                let nota2 = segundaNota;
                                if (nota2 == ''){
                                    console.log('\nERRO: Insira o valor da segunda nota.')
                                    process.exit(1);
                                } else if(isNaN(nota2) || nota2 < 0 || nota2 > 100){
                                    console.log('\nERRO: Insira uma nota válida.')
                                    process.exit(1);
                                }
                                entradaDados.question('Insira a terceira nota: ', function(terceiraNota) {
                                    let nota3 = terceiraNota;
                                    if (nota3 == ''){
                                        console.log('\nERRO: Insira o valor da terceira nota.')
                                        process.exit(1);
                                    } else if(isNaN(nota3) || nota3 < 0 || nota3 > 100){
                                        console.log('\nERRO: Insira uma nota válida.')
                                        process.exit(1);
                                    }
                                    entradaDados.question('Insira a quarta nota: ', function(quartaNota){
                                        let nota4 = quartaNota
                                        if(nota4 == ''){
                                            console.log('\nERRO: Insira o valor da quarta nota.')
                                            process.exit(1);
                                        } else if (isNaN(nota4) || nota4 < 0 || nota4 > 100){
                                            console.log('\nERRO: Insira uma nota válida.')
                                            process.exit(1);
                                        }
                                       console.log (prefixoGeneroAluno + ' alun' + prefixoGeneroAluno + nomeAluno + ' está:' + media(nota1, nota2, nota3, nota4, media));
                                    });
                                });   
                            });    
                        });    
                     });
                 });
             });
         });
     });
 });