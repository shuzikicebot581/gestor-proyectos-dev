const express = require('express');
const router = express.Router();

let proyectos = [];

router.get('/', (req, res) => {
    res.json(proyectos);
});

router.post('/', (req, res) => {
    const nuevoProyecto = req.body;
    proyectos.push(nuevoProyecto);
    res.status(201).json(nuevoProyecto);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    res.status(204).send();
});

module.exports = router;