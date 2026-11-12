'use client';

import { useState } from 'react';
import { useGastoContext } from '../context/GastoContext';

export default function Presupuesto() {

    const [cantidad, setCantidad] = useState('');
    const { presupuesto, setPresupuesto, gastos } = useGastoContext();

    const totalGastos = gastos.reduce((total, gasto) => total + Number(gasto.monto), 0);

    function guardarPresupuesto() {
        if (Number(cantidad) > 0) {
            setPresupuesto(Number(cantidad));
        }
    }

    return (
        <div>
            <h2>Presupuesto mensual</h2>

            <input
                type="number"
                placeholder="Ingrese su presupuesto"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
            />

            <button onClick={guardarPresupuesto}>
                Guardar presupuesto
            </button>

            {presupuesto > 0 && (
                <div>
                    <h3>Presupuesto establecido: L. {presupuesto}</h3>

                    <h3>Total de gastos: L. {totalGastos}</h3>

                    {totalGastos >= presupuesto * 0.8 &&
                        totalGastos <= presupuesto && (
                            <p style={{ color: 'orange' }}>
                                Atención: Has alcanzado el 80% de tu presupuesto.
                            </p>
                        )}

                    {totalGastos > presupuesto && (
                        <p style={{ color: 'red' }}>
                            Has superado el límite del presupuesto, debes ajustar gastos
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}