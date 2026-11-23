const express = require('express');
const cors = require('cors');
const sequelize = require('./db/connection');
const Product = require('./models/Product');
const app = express();

app.use(cors());
app.use(express.json());

// API 1: Valor total por tipo de producto
app.get('/api/productos/valor-total', async (req, res) => {
    try {
        const resultado = await Product.findAll({
            attributes: [
                'productType',
                [sequelize.fn('SUM', sequelize.col('value')), 'valor_total']
            ],
            group: ['productType']
        });

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API 2: Cantidad de productos por estado
app.get('/api/productos/por-estado', async (req, res) => {
    try {
        const resultado = await Product.findAll({
            attributes: [
                'status',
                [sequelize.fn('COUNT', sequelize.col('partNumber')), 'total_productos']
            ],
            group: ['status']
        });

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API 3: Valor promedio por categoría
app.get('/api/productos/promedio-categoria', async (req, res) => {
    try {
        const resultado = await Product.findAll({
            attributes: [
                'category_code',
                [sequelize.fn('AVG', sequelize.col('value')), 'valor_promedio']
            ],
            group: ['category_code']
        });

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente');
});

const PORT = 5000;

app.listen(5000, () => {
    console.log('Backend corriendo')
})