const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

// Conectar a MongoDB
mongoose.connect("0.0.0.0:27017")
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

// Esquema y modelo de ejemplo
const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Item = mongoose.model('Item', ItemSchema);

// CRUD

// Crear un item
app.post('/items', async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Leer todos los items
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        console.log(items)
        res.status(200).send(items);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Leer un item por ID
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).send();
        res.status(200).send(item);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Actualizar un item
app.patch('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) return res.status(404).send();
        res.status(200).send(item);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Eliminar un item
app.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).send();
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
