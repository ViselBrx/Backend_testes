-- CreateTable
CREATE TABLE `alunos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NULL,
    `turma` VARCHAR(150) NULL,
    `matricula` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `livros` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(200) NOT NULL,
    `autor` VARCHAR(150) NULL,
    `isbn` VARCHAR(12) NULL,
    `quantidade` INTEGER NULL,
    `disponiveis` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emprestimos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aluno_id` INTEGER NULL,
    `livro_id` INTEGER NULL,
    `data_emprestimo` DATE NULL,
    `data_devolucao` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `emprestimos` ADD CONSTRAINT `emprestimos_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `alunos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `emprestimos` ADD CONSTRAINT `emprestimos_livro_id_fkey` FOREIGN KEY (`livro_id`) REFERENCES `livros`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
