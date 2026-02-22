DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE alunos (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(150),
    turma VARCHAR(150),
    matricula INT
);

CREATE TABLE livros (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    autor VARCHAR(150),
    isbn VARCHAR(12),
    quantidade INT,
    disponiveis INT
);

CREATE TABLE emprestimos (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    aluno_id INT,
    livro_id INT,
    data_emprestimo DATE,
    data_devolucao DATE,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);