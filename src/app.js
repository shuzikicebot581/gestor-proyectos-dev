const express = require('express');
const proyectos = require('./routes/proyectos');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/proyectos', proyectos);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});