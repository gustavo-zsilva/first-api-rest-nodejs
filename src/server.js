const express = require('express');
const sqlite = require('sqlite3');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ titulo: "Como criar a API" });
})

app.get("/books", (req, res) => {
    return res.json({ livros: [
        "Livro 1",
        "Livro 2",
        "Livro 3",
        "Livro 4",
        "Livro 5"
    ] });
})

app.post("/books", (req, res) => {
    return res.json({ livros: [
        "Livro 6"
    ] })
})

app.listen(8080, () => console.log('Servidor iniciado na porta 8080: http://localhost:8080'));

