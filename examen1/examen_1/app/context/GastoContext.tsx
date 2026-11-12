'use client';

import { createContext, useContext, useState } from 'react';
import { Gasto, GastoContextType } from '../model/Gasto';

const GastoContext = createContext<GastoContextType>({
    gastos: [],
    presupuesto: 0,
    setPresupuesto: () => {},
    consultarGastos: () => {},
    agregarGasto: () => {},
    editarGasto: () => {},
    eliminarGasto: () => {}
});

export function useGastoContext() {
    return useContext(GastoContext);
}

export function GastoProvider({ children }: { children: React.ReactNode }) {

    const [gastos, setGastos] = useState<Gasto[]>([]);
    const [presupuesto, setPresupuesto] = useState(0);

    async function consultarGastos() {
        const respuesta = await fetch('http://localhost:5000/gasto');
        const datos = await respuesta.json();
        setGastos(datos);
    }

    async function agregarGasto(gasto: Omit<Gasto, 'idgasto'>) {
        await fetch('http://localhost:5000/gasto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gasto)
        });

        consultarGastos();
    }

    async function editarGasto(id: number, gasto: Omit<Gasto, 'idgasto'>) {
        await fetch(`http://localhost:5000/gasto/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gasto)
        });

        consultarGastos();
    }

    async function eliminarGasto(id: number) {
        await fetch(`http://localhost:5000/gasto/${id}`, {
            method: 'DELETE'
        });

        consultarGastos();
    }

    return (
        <GastoContext.Provider value={{
            gastos,presupuesto,setPresupuesto,consultarGastos,agregarGasto,editarGasto,eliminarGasto
        }}>
            {children}
        </GastoContext.Provider>
    );
}