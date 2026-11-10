
const express = require('express')
const Producto = require('./Modelos/Producto')
const Carrito = require('./Modelos/Carrito');
const coor = require('cors')

const app = express()

app.use(express.json())

app.use(coor())

//get, post, put, delete

// punto de entrada - url
// reque - response
// metodo 
// codigos de respuesta 200, 404, 500, 401, 403 , etc...

app.get('/producto', async (req, res) => {

    try {
        //select *from producto
        const producto = await Producto.findAll();

        res.status(200).json(producto);

    } catch (error) {
        res.status(500).json({ 'error': error.message })
    }
})

app.post('/producto', async (req, res) => {

    try {
        //inser into producto values(?,??)
        console.log(req.body)
        const producto = await Producto.create(req.body);

        if (producto) {
            res.status(200).json(producto)
        }
        else {
            res.status(400).json({ 'mensjae': 'informacion de producto vacia' })
        }

    } catch (error) {
        res.status(500).json({ 'error': error })
    }

})

app.put('/producto/:id', async (req, res) => {

    //update producto set nombre=? where idproducto=?

    try {
        let idProducto = req.params.id

        console.log(idProducto)

        const [updated] = await Producto.update(req.body, {
            where: { idProducto: idProducto }
        });

        console.log(updated)
        if (updated > 0) {
            res.status(200).json({ mensaje: 'Se actualizó el producto' })
        } else {
            res.status(400).json({ mensaje: 'No se actualizó el producto' })
        }

    } catch (error) {
        res.status(500).json({ 'mensjae': error })
    }
})

app.delete('/producto/:id', async (req, res) => {

    try {
        //delete from producto where idproducto =? 

        const deleted = await Producto.destroy({
            where: { idProducto: req.params.id }
        })

        if (deleted) {
            res.status(200).json({ mensaje: 'Producto Eliminado' })
        }
        else {
            res.status(400).json({ 'mensjae': 'informacion de producto no se elimina' })
        }

    } catch (error) {
        res.status(500).json({ 'mensjae': error })
    }
})

app.get('/carrito', async (req, res) => {
    try {
        const carrito = await Carrito.findAll();

        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Agregar producto al carrito
app.post('/carrito', async (req, res) => {
    try {
        const carrito = await Carrito.create(req.body);

        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Consultar productos por orden de compra
app.get('/carrito/orden/:ordenCompra', async (req, res) => {
    try {
        const carrito = await Carrito.findAll({
            where: {
                ordenCompra: req.params.ordenCompra
            }
        });

        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar producto del carrito
app.delete('/carrito/:id', async (req, res) => {
    try {
        const eliminado = await Carrito.destroy({
            where: {
                idcarrito: req.params.id
            }
        });

        if (eliminado > 0) {
            res.status(200).json({ mensaje: 'Producto eliminado del carrito' });
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado en el carrito' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log('Backend corriendo')
})
