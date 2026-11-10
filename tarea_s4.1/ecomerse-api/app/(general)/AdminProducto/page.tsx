
'use client'

import { Producto } from '@/app/modelos/Producto'
import { useContextProducto } from '@/app/Provider/ProviderProducto';
import React, { useEffect, useState } from 'react'

export default function page() {

    const { consultarProducto, producto, agregarProducto, eliminarProducto, editarProducto } = useContextProducto()

    const [id, setID] = useState(0)
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [isv, setIsv] = useState('')
    const [img, setImge] = useState('')

    useEffect(() => {
        consultarProducto();
    }, [])

    async function crear() {

        if (nombre === '' || precio === '' || isv === '' || img === '') {
            alert('Completa todos los campos')
            return
        }

        let producto: Producto = {
            idProducto: id,
            nombreProducto: nombre,
            precioProducto: parseFloat(precio),
            isvProducto: parseFloat(isv),
            imgProducto: img
        }

        if (id === 0) {

            await agregarProducto(producto)

        }
        else {

            await editarProducto(producto)

        }

        setID(0)
        setNombre('')
        setPrecio('')
        setIsv('')
        setImge('')
    }

    function editar(producto: Producto) {
        setID(producto.idProducto)
        setNombre(producto.nombreProducto)
        setImge(producto.imgProducto)
        setIsv(producto.isvProducto.toString())
        setPrecio(producto.precioProducto.toString())
    }

    return (
        <div className='container'>
            <div className='row'>

                <div className='col-md-6'>

                    <form className='form'>

                        <input
                            type="text"
                            placeholder='Nombre Producto'
                            className='form-control'
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <br />

                        <input
                            type="text"
                            placeholder='Precio Producto'
                            className='form-control'
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                        <br />

                        <input
                            type="text"
                            placeholder='Isv Producto'
                            className='form-control'
                            value={isv}
                            onChange={(e) => setIsv(e.target.value)}
                        />
                        <br />

                        <input
                            type="text"
                            placeholder='Img Producto'
                            className='form-control'
                            value={img}
                            onChange={(e) => setImge(e.target.value)}
                        />
                        <br />

                        <button
                            type='button'
                            className='btn btn-success'
                            onClick={crear}
                        >
                            {id === 0 ? 'Guardar Producto' : 'Actualizar Producto'}
                        </button>

                    </form>

                </div>

                <div className='col-md-6'>

                    <table className='table'>

                        <thead>
                            <tr>
                                <th>Id Producto</th>
                                <th>Nombre Producto</th>
                                <th>Precio Producto</th>
                                <th>ISV Producto</th>
                                <th>IMG Producto</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                producto.map((producto: Producto) => (
                                    <tr key={producto.idProducto}>

                                        <td>{producto.idProducto}</td>
                                        <td>{producto.nombreProducto}</td>
                                        <td>{producto.precioProducto}</td>
                                        <td>{producto.isvProducto}</td>

                                        <td>
                                            <img
                                                src={producto.imgProducto}
                                                alt={producto.nombreProducto}
                                                width="60"
                                            />
                                        </td>

                                        <td>
                                            <button
                                                className='btn btn-info btn-sm'
                                                onClick={() => editar(producto)}
                                            >
                                                Editar
                                            </button>

                                            {' '}

                                            <button
                                                className='btn btn-danger btn-sm'
                                                onClick={() => eliminarProducto(producto.idProducto)}
                                            >
                                                Eliminar
                                            </button>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}
