
'use client'

import CardProducto from '@/app/Components/CardProducto';
import { useContextProducto } from '@/app/Provider/ProviderProducto';

export default function Page() {

    const { producto } = useContextProducto();

    return (
        <div className='container'>
            <div className='row'>
                {
                    producto.map((item) => (
                        <div className='col-md-4' key={item.idProducto}>
                            <CardProducto
                                idProducto={item.idProducto}
                                tipo='producto'/>
                            <br />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}