/* 
como criar uma varialvel no js

var - forma genética de criar uma variável, não mais recomendada pois ocupa mais memoria no armazenamento da maquina (somente quando quiser uma variavel que tenha necessidade do programa ter acesso). Variavel de escopo global. Todas as funções do projeto terão acesso a esse tipo de variável.
let - So existe dentro da função sendo feita no momento. Indicada ser usada essa variavel. Variavel de escopo local.
const - ideia de uma constante, um elemento que não são alterados ou modificado dentro do seu programa (valor fixo).

operadores matemáticos -
== : comparação de teste lógico
!= : diferença de teste lógico
> : maior que
< : menor que
>= : maior ou igual que
<= : menor ou igual que

operadores lógicos -
&& : E           and
! : negação      not
|| : ou          or
*/

console.log('\n EXERCICIO PARA CALCULAR A MÉDIA \n');


//Import da biblioteca readline(permite interagir com o usuario)
var readline = require('readline');
var entradaDados = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

//Entrada do nome do aluno
// funçao que chama e ja te dá resultado é chamada de callback
entradaDados.question('Digite o nome do aluno: \n', function (nome){
    // declaração de variável local (let) e atribuindo valor 
    let nomeAluno = nome;
    //console.log('\n Nome do aluno: ' + nomeAluno )

    //Entrada da nota 1 
    entradaDados.question('Inserir o valor da nota 1: ', function(valor1){
        let nota1 = valor1;

        entradaDados.question('Inserir o valor da nota 2: ', function(valor2){
            let nota2 = valor2;
          
            entradaDados.question('Inserir o valor da nota 3: ', function (valor3){
                let nota3 = valor3;

                entradaDados.question('Inserir o valor da nota 4: ', function (valor4){
                    let nota4 = valor4;
                    let media;
                    let statusAluno;
                    
                    //console.log('Nota 1: ' + nota1 + '\n' + 'Nota 2: ' + nota2 + '\n' + 'Nota 3: ' + nota3 + '\n' + 'Nota 4: ' + nota4);
                    
                    if(nomeAluno == ''){
                        console.log('nome do aluno deve ser informado');
                        //fecha o objeto entradaDados instanciado anteriormente
                        entradaDados.close();
                    } else if (nota1 == ''|| nota2 == ''|| nota3 == ''|| nota4 == ''){
                         console.log('É necessário informar todos as notas para ser efetuado o cálculo');
                         //fecha o objeto entradaDados instanciado anteriormente
                        entradaDados.close();
                    }else{
                        media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4; 
                        /* console.log('O aluno ' + nomeAluno + ' ficou com média: \n' + media);
                        if(media >= 7){
                            console.log('Portanto, aluno(a) ' + nomeAluno + ' foi aprovado!');
                        }else if(media >= 4 && media <= 6.9){
                            console.log('Portanto, o aluno(a)' + nomeAluno + ' está de recuperação!');
                        } else{
                            console.log('Portanto, aluno(a) ' + nomeAluno + 'foi reprovado!');
                        }*/

                        if (media >= 7.0){
                            statusAluno = 'APROVADO!'
                        }else if (media >= 4.0 && media <= 6.9){
                            statusAluno = 'RECUPERAÇÃO!'
                        } else {
                            statusAluno = 'REPROVADO!'
                        }

                        // toFixed permite limitar a quantidade de casas decimais
                        console.log('O aluno(a) ' + nomeAluno + ' teve média ' + media.toFixed(1) + ' portanto, está ' + statusAluno);

                        //fecha o objeto entradaDados instanciado anteriormente
                        entradaDados.close();
                    }    
                })
            });
        });
    });
});


