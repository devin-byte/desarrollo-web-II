
'use client'

import React, { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Producto } from '../modelos/Producto'
import { ContexrProducto } from '../Context/ContextProducto';

export default function ProviderProducto({ children }: Plantilla) {

    const [producto, setProducto] = useState<Producto[]>([]);

    const [carritoProducto, setCarritoProducto] = useState<Producto[]>([]);

    async function agregarCarrito(producto: Producto) {
        try {

            const res = await fetch('http://localhost:5000/carrito', {
                method: 'POST',
                body: JSON.stringify({
                    idproducto: producto.idProducto,
                    isvProducto: producto.isvProducto,
                    ordenCompra: 1
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                throw new Error('Error al agregar producto');
            }

            const data = await res.json();

            setCarritoProducto([
                ...carritoProducto,
                {
                    ...producto,
                    idcarrito: data.idcarrito
                }
            ]);

            alert('Producto Agregado al carrito');

        } catch (error) {
            alert('Ocurrio un error al agregar el producto al carrito');
        }
    }

    async function eliminarCarrito(id: number) {
        try {

            const res = await fetch('http://localhost:5000/carrito/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                throw new Error('Error al eliminar producto');
            }

            setCarritoProducto(
                carritoProducto.filter(producto => producto.idcarrito !== id)
            );

            alert('Producto eliminado del carrito');

        } catch (error) {
            alert('Ocurrio un error al eliminar el producto del carrito');
        }
    }

    async function consultarCarrito() {
        try {

            const resProductos = await fetch('http://localhost:5000/producto');
            const productos = await resProductos.json();

            const resCarrito = await fetch('http://localhost:5000/carrito');
            const carrito = await resCarrito.json();

            if (!resProductos.ok || !resCarrito.ok) {
                throw new Error('Error al consultar el carrito');
            }

            const productosCarrito = carrito.map((item: any) => {

                const encontrado = productos.find(
                    (producto: Producto) => producto.idProducto === item.idproducto
                );

                if (encontrado) {
                    return {
                        ...encontrado,
                        idcarrito: item.idcarrito
                    };
                }

                return null;

            }).filter((producto: Producto | null) => producto !== null);

            setProducto(productos);
            setCarritoProducto(productosCarrito);

        } catch (error) {
            alert('Ocurrio un error al consultar el carrito');
        }
    }

    async function consultarProducto() {
        try {

            const res = await fetch('http://localhost:5000/producto');

            if (!res.ok) {
                throw new Error('Error al consultar productos');
            }

            const data = await res.json();

            console.log("Respuesta del backend:", data);

            setProducto(data);

        } catch (error) {
            alert('Ocurrio un error al cargar los productos');
        }
    }

    async function agregarProducto(producto: Producto) {
        try {

            const res = await fetch('http://localhost:5000/producto', {
                method: 'POST',
                body: JSON.stringify(producto),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                throw new Error('Error al guardar producto');
            }

            await consultarProducto();

            alert('Producto creado');

        } catch (error) {
            alert('Ocurrio un error al guardar el producto');
        }
    }

    async function editarProducto(producto: Producto) {
        try {

            const res = await fetch('http://localhost:5000/producto/' + producto.idProducto, {
                method: 'PUT',
                body: JSON.stringify(producto),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                throw new Error('Error al actualizar producto');
            }

            await consultarProducto();

            alert('Producto Actualizado');

        } catch (error) {
            alert('Ocurrio un error al actualizar el producto');
        }
    }

    async function eliminarProducto(id: number) {
        try {

            const res = await fetch('http://localhost:5000/producto/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                throw new Error('Error al eliminar producto');
            }

            await consultarProducto();

            alert('Producto Eliminado');

        } catch (error) {
            alert('Ocurrio un error al eliminar el producto');
        }
    }

    return (
        <ContexrProducto.Provider value={{
            producto, carritoProducto,agregarCarrito,eliminarCarrito,consultarCarrito,consultarProducto,agregarProducto,eliminarProducto,editarProducto}}>
            {children}
        </ContexrProducto.Provider>
    )
}

export function useContextProducto() {
    return useContext(ContexrProducto)
}
