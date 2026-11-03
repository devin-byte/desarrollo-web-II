
'use client'

import CardProducto from '@/app/Components/CardProducto';
import { useContextProducto } from '@/app/Provider/ProviderProducto';

export default function Page() {

    const { carritoProducto } = useContextProducto();
    const productosUnicos = carritoProducto.filter(
        (producto, index, self) =>
            self.findIndex(
                p => p.idProducto === producto.idProducto
            ) === index
    );

    return (
        <div className='container'>
            <h2 className='mb-4'>Mi Carrito</h2>

            <div className='row'>
                {productosUnicos.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    productosUnicos.map((item) => (
                        <div className='col-md-4' key={item.idProducto}>
                            <CardProducto
                                idProducto={item.idProducto}
                                tipo='carrito'/>
                            <br />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
