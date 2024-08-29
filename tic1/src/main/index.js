const express = require('express');
const app = express();
const port = 3002;

// Middleware para manejar JSON
app.use(express.json());

// Rutas RESTful
let items = [];

// Obtener todos los items (GET)
app.get('/items', (req, res) => {
    res.json(items);
});

// Crear un nuevo item (POST)
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json(item);
});

// Obtener un item por ID (GET)
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = items.find(i => i.id === id);
    if (!item) {
        return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.json(item);
});

// Actualizar un item por ID (PUT)
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = items.findIndex(i => i.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Item no encontrado' });
    }
    items[index] = req.body;
    res.json(items[index]);
});

// Eliminar un item por ID (DELETE)
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = items.findIndex(i => i.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Item no encontrado' });
    }
    items.splice(index, 1);
    res.status(204).send();
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
