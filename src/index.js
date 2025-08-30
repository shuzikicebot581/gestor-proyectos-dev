const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let proyectos = [];

app.get('/proyectos', (req, res) => {
    res.json(proyectos);
});

app.post('/proyectos', (req, res) => {
    const nuevoProyecto = req.body;
    proyectos.push(nuevoProyecto);
    res.status(201).json(nuevoProyecto);
});

app.delete('/proyectos/:id', (req, res) => {
    const { id } = req.params;
    proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});