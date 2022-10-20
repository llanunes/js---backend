
# Permite visualizar todos os databses existentes no BD
show databases;

# Permite apagar um database e toda sua estrutura de tablas e dados
drop database dbcontatos2022_2;

# Permite criar um novo database no BD
create database db_lionschool;

# Permite ativar a utilização de um database
use db_lionschool;

# Permite visualizar todas as tabelas existentes dentro de um database
show tables;

# Permite criar uma tabela de uma determinada forma 
create table tbl_aluno(
	id int UNSIGNED not null auto_increment primary key,
    nome varchar (80) not null,
    foto varchar (100),
    sexo varchar (10),
    rg varchar(30) not null,
    cpf varchar (20) not null,
    email varchar(256) not null,
    telefone varchar (15),
    celular varchar(15),
	data_nascimento date not null,
    unique index(id)
);

create table tbl_curso(
	id int UNSIGNED not null auto_increment primary key,
	nome varchar (50) not null,
	carga_horaria int (10) not null,
	icone varchar(100),
	sigla varchar(5),
	unique index(id)
);

create table tbl_aluno_curso(
	id int UNSIGNED not null auto_increment primary key,
    id_aluno int UNSIGNED not null,
    id_curso int UNSIGNED not null,
    matricula varchar (15) not null,
    status_aluno varchar (10) not null,
     
    # Programação para definir uma chave estrangeira
    
    foreign key (id_aluno)			# define qual atributo será uma FK (chave estrangeira)
		references tbl_aluno(id),	# define de onde virá a FK
    foreign key (id_curso)
		references tbl_curso(id),
   unique index (id)     
);


# Permite visualizar todos os dados de todas as colunas de uma tabela
select * from tbl_aluno;


insert into tbl_aluno (
nome,
 foto,
 sexo,
 rg,
 cpf,
 email,
 telefone,
 celular,
 data_nascimento
 )
values (
# qualquer atributo que não seja do tipo inteiro, deverá ser colocado '' ASPAS SIMPLEES
'José Nissan',
 'https://www.diariochapadense.com.br/wp-content/uploads/2020/08/7462-agua-pra-cachorro-780x405.jpg',
 'M',
 '34.456.345-1',
 '300.567.456-23',
 'josedoguinho@gmail.com',
 '3225-8991',
 '11 94323-8996',
 '2005-08-23');

	insert into tbl_aluno (
	 nome,
	 foto,
	 sexo,
	 rg,
	 cpf,
	 email,
	 telefone,
	 celular,
	 data_nascimento
	 )
	values (
	# qualquer atributo que não seja do tipo inteiro, deverá ser colocado '' ASPAS SIMPLEES
	'Maria Mercedes',
	 'https://br.depositphotos.com/187197426/stock-photo-dog-spa-wellness-salon.html',
	 'F',
	 '34.222.345-1',
	 '300.900.456-23',
	 'mariadoguinho@gmail.com',
	 '1245-8691',
	 '11 99013-8996',
	 '2005-08-22'
	);


# Permite editar algo no BD
update tbl_aluno set rg = '35.567.23-4' where id = 1;

# Permite visualizar tabela
select * from tbl_aluno;

# Permite apagar um registro de uma tabela do BD
delete from tbl_aluno where id = 3;

# Permite alterar um atributo específico de uma tabela do BD
update tbl_aluno set nome = 'Jose Nissan' where id = 1;

# crud ->
# create - (insert)
# read (select)
# update (update)
# delet (delete)


