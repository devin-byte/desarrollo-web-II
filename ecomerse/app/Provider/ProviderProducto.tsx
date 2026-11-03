
'use client'

import React, { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Producto } from '../modelos/Producto'
import { ContexrProducto } from '../Context/ContextProducto'

export default function ProviderProducto({ children }: Plantilla) {

    const [producto] = useState<Producto[]>([
        {
            idProducto: 1,
            nombreProducto: 'papas',
            precioProducto: 10,
            isvProducto: 2,
            imgProducto: ''
        },
        {
            idProducto: 2,
            nombreProducto: 'arroz',
            precioProducto: 80,
            isvProducto: 20,
            imgProducto: ''
        },
        {
            idProducto: 3,
            nombreProducto: 'Manzanas',
            precioProducto: 15,
            isvProducto: 4,
            imgProducto: ''
        },
        {
            idProducto: 4,
            nombreProducto: 'uvas',
            precioProducto: 90,
            isvProducto: 7,
            imgProducto: ''
        },
        {
            idProducto: 5,
            nombreProducto: 'zanahorias',
            precioProducto: 67,
            isvProducto: 6,
            imgProducto: ''
        }
    ]);

    const [carritoProducto, setCarritoProducto] = useState<Producto[]>([]);

    function agregarCarrito(idProducto: number) {

        const productoSeleccionado = producto.find(
            p => p.idProducto === idProducto
        );

        if (productoSeleccionado) {
            setCarritoProducto(actual => [
                ...actual,
                productoSeleccionado
            ]);

            alert('Producto agregado al carrito');
        }
    }

    function eliminarCarrito(idProducto: number, cantidad: number) {

        setCarritoProducto(actual => {
            let eliminados = 0;

            return actual.filter(p => {
                if (p.idProducto === idProducto && eliminados < cantidad) {
                    eliminados++;
                    return false;
                }

                return true;
            });
        });
    }

    return (
        <ContexrProducto.Provider
            value={{
                producto,
                carritoProducto,
                agregarCarrito,
                eliminarCarrito
            }}>
            {children}
        </ContexrProducto.Provider>
    )
}

export function useContextProducto() {
    return useContext(ContexrProducto)
}
