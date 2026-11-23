'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function GraficoPromedioCategoria() {

    const [productos, setProductos] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/productos/promedio-categoria')
            .then((respuesta) => {
                setProductos(respuesta.data);
            })
            .catch((error) => {
                console.log('Error al cargar los datos:', error);
            });
    }, []);

    const datos = {
        labels: productos.map((producto) => producto.category_code),
        datasets: [
            {
                label: 'Valor promedio',
                data: productos.map((producto) => producto.valor_promedio),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.3
            }
        ]
    };

    return (
    <div className="w-full max-w-2xl mx-auto">
        <h2>Promedio del valor por categoría</h2>
        <Line data={datos} />
    </div>
);
}