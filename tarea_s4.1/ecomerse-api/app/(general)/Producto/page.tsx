'use client'

import CardProducto from '@/app/Components/CardProducto'
import { useContextProducto } from '@/app/Provider/ProviderProducto'
import React, { useEffect } from 'react'

export default function Page() {

    const { consultarProducto } = useContextProducto()

    useEffect(() => {
        consultarProducto()
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <CardProducto />
            </div>
        </div>
    )
}