const prisma = require("../data/prisma");

const listar = async (req, res) => {
    const lista = await prisma.emprestimos.findMany();

    res.json(lista).status(200).end();
};

const cadastrar = async (req, res) => {
    const dados = req.body;

    try {
        dados.data_emprestimo = dados.data_emprestimo ? new Date(dados.data_emprestimo) : null;
        dados.data_devolucao = dados.data_devolucao ? new Date(dados.data_devolucao) : null;
    } catch {
        dados.data_devolucao = null; // se der erro, deixa o resultado nulo
    }

    const item = await prisma.emprestimos.create({
        data: dados 
    });

    res.json(item).status(201).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.emprestimos.findUnique({
        where: { id: Number(id) },
        include: { 
            livro: true,
            aluno: true 
        }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    try {
        dados.data_emprestimo = dados.data_emprestimo ? new Date(dados.data_emprestimo) : null;
        dados.data_devolucao = dados.data_devolucao ? new Date(dados.data_devolucao) : null;
    } catch {
        dados.data_devolucao = null; // se der erro, deixa o resultado nulo
    }

    const item = await prisma.emprestimos.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.emprestimos.delete({
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