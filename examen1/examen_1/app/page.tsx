'use client';

import { useState, useEffect } from 'react';
import Login from './components/Login';
import Presupuesto from './components/Presupuesto';
import Gastos from './components/Gastos';

export default function Home() {

    const [sesion, setSesion] = useState(false);
    const [pantalla, setPantalla] = useState('presupuesto');

    useEffect(() => {
        if (localStorage.getItem('sesion') === 'activa') {
            setSesion(true);
        }
    }, []);

    function cerrarSesion() {
        localStorage.removeItem('sesion');
        setSesion(false);
    }

    if (!sesion) {
        return <Login />;
    }

    return (
        <main>
            <h1>Administrador de Gastos Personales</h1>

            <button onClick={() => setPantalla('presupuesto')}>
                Presupuesto
            </button>

            <button onClick={() => setPantalla('gastos')}>
                Gastos
            </button>

            <button onClick={cerrarSesion}>
                Cerrar sesión
            </button>

            {pantalla === 'presupuesto' && <Presupuesto />}

            {pantalla === 'gastos' && <Gastos />}
        </main>
    );
}