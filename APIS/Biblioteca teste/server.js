require("dotenv").config();

const express = require("express");
const cors = require("cors");

const alunosRoutes = require("./src/routes/alunos.routes.js");
const livrosRoutes = require("./src/routes/livros.routes");
const emprestimosRoutes = require("./src/routes/emprestimos.routes.js");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/alunos", alunosRoutes);
app.use("/emprestimos", emprestimosRoutes);
app.use("/livros", livrosRoutes);

app.get("/", (req, res) => {
    res.send("App Online");
});

app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta 3000");
});