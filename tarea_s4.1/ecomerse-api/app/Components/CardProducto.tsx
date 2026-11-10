'use client'

import React from 'react'
import { useContextProducto } from '../Provider/ProviderProducto'

export default function CardProducto() {

    const { producto, agregarCarrito } = useContextProducto()

    return (
        <>
            {producto.map((producto) => (
                <div className='col-md-4 mb-4' key={producto.idProducto}>
                    <div className='card'>
                        <div className='card-header'>{producto.nombreProducto}</div>
                        <div className='card-body'>
                            <p>Precio Producto - Lps {producto.precioProducto}</p>
                            <p>Isv Producto - Lps {producto.isvProducto}</p>
                            <img
                                src={producto.imgProducto}
                                alt={producto.nombreProducto}
                                width="100"
                                height="100"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-info btn-sm' onClick={() => agregarCarrito(producto)}>
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}