'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function GraficoValorTotal() {

    const [productos, setProductos] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/productos/valor-total')
            .then((respuesta) => {
                setProductos(respuesta.data);
            })
            .catch((error) => {
                console.log('Error al cargar los datos:', error);
            });
    }, []);

    const datos = {
        labels: productos.map((producto) => producto.productType),
        datasets: [
            {
                label: 'Valor total',
                data: productos.map((producto) => producto.valor_total),
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }
        ]
    };

    return (
    <div className="w-full max-w-2xl mx-auto">
        <h2>Valor total por tipo de producto</h2>
        <Bar data={datos} />
    </div>
);
}