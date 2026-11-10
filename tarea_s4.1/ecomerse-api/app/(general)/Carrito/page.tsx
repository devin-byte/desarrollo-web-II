
'use client'

import { useContextProducto } from '@/app/Provider/ProviderProducto'
import React, { useEffect } from 'react'

export default function Page() {

    const { carritoProducto, eliminarCarrito, consultarCarrito } = useContextProducto()

    useEffect(() => {
        consultarCarrito()
    }, [])

    const total = carritoProducto.reduce((acumulado, producto) => {
        return acumulado + Number(producto.precioProducto) + Number(producto.isvProducto)
    }, 0)

    function pagar() {
        if (carritoProducto.length === 0) {
            alert('El carrito está vacío')
            return
        }

        alert('Total a pagar: Lps ' + total.toFixed(2))
    }

    return (
        <div className='container'>
            <h2>Mi carrito</h2>

            <div className='row'>
                {carritoProducto.map((producto) => (
                    <div className='col-md-6 mb-4' key={producto.idcarrito}>
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
                                <button
                                    className='btn btn-danger btn-sm'
                                    onClick={() => eliminarCarrito(producto.idcarrito!)}
                                >
                                    Eliminar del carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {carritoProducto.length === 0 && (
                    <p>El carrito está vacío.</p>
                )}
            </div>

            <div className='mt-3'>
                <h4>Total a pagar: Lps {total.toFixed(2)}</h4>

                <button className='btn btn-success' onClick={pagar}>
                    Pagar
                </button>
            </div>
        </div>
    )
}
