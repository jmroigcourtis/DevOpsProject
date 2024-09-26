const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const { ME_CONFIG_MONGODB_URL } = process.env;

// Conectar a MongoDB
const url = "mongodb://jroig:fito80@localhost:27017/db?authSource=jroig&w=";

const connectDB = async () => {
    try {
        mongoose.Promise = global.Promise;
        // Conectarse a MongoDB usando la URL desde las variables de entorno
        await mongoose.connect("mongodb://mongo:27017/my-db", {
            poolSize: 10,
            authSource: "admin",
            user: "juan",
            pass: "fito80",
            useMongoClient: true,
        }).then(() => {"Connected success"})
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);  // Detener el proceso si falla la conexión
    }
};

connectDB();

const ItemSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    status: String
});

const Item = mongoose.model('users', ItemSchema);

// CRUD

// Crear un item
app.post('/my-db/users', async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Leer todos los items
app.get('/my-db/users', async (req, res) => {
    try {
        const items = await Item.find();
        console.log(items)
        res.status(200).send(items);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Leer un item por ID
app.get('/my-db/users/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).send();
        res.status(200).send(item);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Actualizar un item
app.patch('/my-db/users/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) return res.status(404).send();
        res.status(200).send(item);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Eliminar un item
app.delete('/my-db/users/:id', async (req, res) => {
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
