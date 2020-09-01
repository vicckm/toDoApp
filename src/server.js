const express = require('express');

const app = express();
const port = 3333;

const paginaToDo = require('./views/toDoApp');

app.get('/', (req, res) => {
    res.send(paginaToDo)
})

app.listen(port, () => { console.log("Servidor iniciado :)") })