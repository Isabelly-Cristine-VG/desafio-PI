-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

CREATE DATABASE estufaTech;

USE estufaTech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table estufa (
/* em nossa regra de negócio, um estufa tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	luminosidade DECIMAL,
	momento DATETIME,
	fk_estufa INT,
	FOREIGN KEY (fk_estufa) REFERENCES estufa(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'A1B2C3');
insert into estufa (descricao, fk_empresa) values ('Estufa A', 1);
insert into estufa (descricao, fk_empresa) values ('Estufa B', 1);
insert into estufa (descricao, fk_empresa) values ('Estufa C', 1);

insert into medida(dht11_umidade,luminosidade,momento,fk_estufa)values
(60.2,21.3,'2025-06-17 13:12:00',1),
(62.8,23.1,'2025-06-17 13:12:05',1),
(61.1,21.3,'2025-06-17 13:12:10',1),
(66.7,20.5,'2025-06-17 13:12:15',1),
(68.2,21.5,'2025-06-17 13:12:20',1),
(62.2,20.2,'2025-06-17 13:12:25',1),
(64.8,21.2,'2025-06-17 13:12:30',1),
(61.1,23.2,'2025-06-17 13:12:35',1),
(61.7,22.2,'2025-06-17 13:12:40',1),
(65.2,23.2,'2025-06-17 13:12:45',1);

insert into medida(dht11_umidade,luminosidade,momento,fk_estufa)values
(61.1,22.4,'2025-06-17 13:12:00',2),
(62.4,23.6,'2025-06-17 13:12:05',2),
(61.3,22.1,'2025-06-17 13:12:10',2),
(65.2,21.9,'2025-06-17 13:12:15',2),
(68.7,22.2,'2025-06-17 13:12:20',2),
(62.1,25.4,'2025-06-17 13:12:25',2),
(61.4,23.6,'2025-06-17 13:12:30',2),
(65.3,23.1,'2025-06-17 13:12:35',2),
(62.2,22.9,'2025-06-17 13:12:40',2),
(63.5,21.2,'2025-06-17 13:12:45',2);

insert into medida(dht11_umidade,luminosidade,momento,fk_estufa)values
(61.1,22.4,'2025-06-17 13:12:00',3),
(62.4,23.6,'2025-06-17 13:12:05',3),
(61.3,22.1,'2025-06-17 13:12:10',3),
(65.2,21.9,'2025-06-17 13:12:15',3),
(68.7,22.2,'2025-06-17 13:12:20',3),
(64.1,22.2,'2025-06-17 13:12:25',3),
(62.4,21.6,'2025-06-17 13:12:30',3),
(67.3,22.1,'2025-06-17 13:12:35',3),
(68.2,25.9,'2025-06-17 13:12:40',3),
(65.7,23.2,'2025-06-17 13:12:45',3);

