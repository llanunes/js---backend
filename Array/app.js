
// define uma variável do tipo array
const listaNomes = ['Larissa', 'Moisés', 'Lucas'];
const listaProdutos = ['teclado', 'branco', 50.0, true]
const listaAlunos = ['Larissa', 'Geovanna', 'Milena', 'Heitor', 'Moisés',]
const listaDisciplinas = ['PWBE', 'PWFE', 'BCD', 'INDMO']

// exibe todos os dados de um array
console.log(listaNomes);
console.log(listaProdutos);

// verifica o tipo de dados de um array
console.log(typeof(listaProdutos));

// verifica o tpo de dado de cada elemento de um array
console.log(typeof(listaProdutos[0]));

// exibe os valores de cada elemnto de um array

console.log('O produto é: ' + [0]);
console.log('A cor do ' + listaProdutos[0] + ' é ' + listaProdutos[1]);

// exibe a quantidade de elementos de um array
console.log('A quantidade de itens é: ' + listaProdutos.length);


// extraindo valores do array com estrutura de repetição
let quantidade = listaAlunos.length
let cont = 0;

// while : estrutura de repetição
console.log('\nEXEMPLO UTILIZANDO O WHILE\n');
while(cont < quantidade){
    console.log('O aluno da turma DS2M é: ' + listaAlunos[cont])
    cont += 1;
}

// for : estrutura de repetição
console.log('\nEXEMPLO UTILIZANDO O FOR\n');
for(let cont = 0 ; cont < quantidade ; cont++){
    console.log('O aluno da turma DS2M é: ' + listaAlunos[cont])
}

// foreach: estrutura de repetição. específico para trabalhar com array ou objeto. Desmonstração:
console.log('\nEXEMPLO UTILIZANDO O FOREACH\n');

listaAlunos.forEach(function(item, cont){
    console.log('O aluno da turma DS2M é: ' + item)
});

// adicionando novos elementos no array 'push'
listaAlunos.push('Japa', 'Mellissa', 'Tedy');
console.log(listaAlunos);


// Remove o ultimo elemento de um array
listaAlunos.pop();
console.log(listaAlunos)

// adicionar elementos no início do array
listaAlunos.unshift('Enzo')
console.log(listaAlunos);

// remover elementos no inicio do array
listaAlunos.shift()
console.log(listaAlunos);

// procurar um valor em um array retornando o seu índice.
    // se retornar -1, significa que nao foi encontrado o item, não existe
let indice = listaAlunos.indexOf('Heitor');
console.log(indice);

//removendo elementos a partir de um indice escolhido
listaAlunos.splice(indice);
console.log(listaAlunos)

// remove um elemento específico e um array
listaAlunos.splice(indice, 1);
console.log(listaAlunos)

const listaNovosAlunos = listaAlunos.slice();

listaNovosAlunos.push('Moisés', 'Mellissa', 'Karina', 'Jaime')
console.log(listaNovosAlunos);

// adicionando um array de lista dentro de outro array
console.log('\nTRABALHANDO UM ARRAY DENTRO DE OUTRO ARRAY\n')
listaNovosAlunos.push(listaDisciplinas);

// Lista o array e todos os sub arrays existentes
console.log(listaNovosAlunos);

// Exibe o primeiro elemento do array contido dentro da linha 7 do array principal
console.log(listaNovosAlunos[7][0]);

// exemplo de como buscar um elemento de um array que está dentro de outro array
console.log(listaNovosAlunos[7]. indexOf('BCD'));

