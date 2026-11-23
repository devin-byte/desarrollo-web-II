'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title
);

export default function GraficoPorEstado() {

    const [productos, setProductos] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/productos/por-estado')
            .then((respuesta) => {
                setProductos(respuesta.data);
            })
            .catch((error) => {
                console.log('Error al cargar los datos:', error);
            });
    }, []);

    const datos = {
        labels: productos.map((producto) => producto.status),
        datasets: [
            {
                label: 'Cantidad de productos',
                data: productos.map((producto) => producto.total_productos),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ]
            }
        ]
    };

    return (
    <div className="w-full max-w-md mx-auto">
        <h2>Cantidad de productos por estado</h2>
        <Pie data={datos} />
    </div>
);
}