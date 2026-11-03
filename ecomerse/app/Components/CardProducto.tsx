'use client'

import { useContextProducto } from '../Provider/ProviderProducto'

interface CardProductoProps {
    idProducto: number;
    tipo: 'producto' | 'carrito';
}

export default function CardProducto({ idProducto, tipo }: CardProductoProps) {

    const {
        producto,
        carritoProducto,
        agregarCarrito,
        eliminarCarrito
    } = useContextProducto();

    const productoSeleccionado = producto.find(
        p => p.idProducto === idProducto
    );

    if (!productoSeleccionado) return null;

    const cantidad = carritoProducto.filter(
        p => p.idProducto === idProducto
    ).length;

    function eliminarProducto() {
        if (cantidad === 1) {
            eliminarCarrito(idProducto, 1);
        } else {
            const respuesta = prompt(
                `Tienes ${cantidad} unidades. ¿Cuántas deseas eliminar?`
            );

            if (respuesta === null) return;

            const cantidadEliminar = Number(respuesta);

            if (
                !Number.isInteger(cantidadEliminar) ||
                cantidadEliminar < 1 ||
                cantidadEliminar > cantidad
            ) {
                alert('Ingresa una cantidad válida');
                return;
            }

            eliminarCarrito(idProducto, cantidadEliminar);
        }
    }

    return (
        <div className='card'>
            <div className='card-header'>
                {productoSeleccionado.nombreProducto}
            </div>

            <div className='card-body'>
                <p>Precio Producto - Lps {productoSeleccionado.precioProducto}</p>
                <p>Isv Producto - Lps {productoSeleccionado.isvProducto}</p>

                {tipo === 'carrito' && (
                    <p>Cantidad: {cantidad}</p>
                )}
            </div>

            <div className='card-footer'>
                {tipo === 'producto' && (
                    <button
                        className='btn btn-info btn-sm'
                        onClick={() => agregarCarrito(idProducto)}>
                        Agregar al Carrito
                    </button>
                )}

                {tipo === 'carrito' && (
                    <button
                        className='btn btn-danger btn-sm'
                        onClick={eliminarProducto}>
                        Eliminar
                    </button>
                )}
            </div>
        </div>
    )
}