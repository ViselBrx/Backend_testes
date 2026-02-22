const prisma = require("../data/prisma");

const listar = async (req, res) => {
    const lista = await prisma.livros.findMany();

    res.json(lista).status(200).end();
};

const cadastrar = async (req, res) => {
    const aluno = req.body;

    const item = await prisma.livros.create({
        data: aluno 
    });

    res.json(item).status(201).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.livros.findUnique({
        where: { id: Number(id) },
        include: { emprestimos: true }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.livros.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.livros.delete({
        where: { id: Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}