'use client';

import { useEffect, useState } from 'react';
import { useGastoContext } from '../context/GastoContext';

export default function Gastos() {

    const {
        gastos,
        consultarGastos,
        agregarGasto,
        editarGasto,
        eliminarGasto
    } = useGastoContext();

    const [categoria, setCategoria] = useState('');
    const [monto, setMonto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');

    const [idEditar, setIdEditar] = useState(0);

    useEffect(() => {
        consultarGastos();
    }, []);

    function guardarGasto() {

        if (categoria === '' || monto === '' || fecha === '' || descripcion === '') {
            alert('Complete todos los campos');
            return;
        }

        const nuevoGasto = {
            categoria: categoria,
            monto: Number(monto),
            fecha: fecha,
            descripcion: descripcion
        };

        if (idEditar === 0) {
            agregarGasto(nuevoGasto);
        } else {
            editarGasto(idEditar, nuevoGasto);
            setIdEditar(0);
        }

        setCategoria('');
        setMonto('');
        setDescripcion('');
        setFecha('');
    }

    function seleccionarGasto(gasto: any) {
        setIdEditar(gasto.idgasto);
        setCategoria(gasto.categoria);
        setMonto(String(gasto.monto));
        setFecha(gasto.fecha.substring(0, 10));
        setDescripcion(gasto.descripcion || '');
    }

    return (
        <div>
            <h2>Registro de gastos</h2>

            <input
                type="text"
                placeholder="Categoría"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />

            <input
                type="number"
                placeholder="Monto"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
            />

            <input
                type="text"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />

            <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
            />

            <button onClick={guardarGasto}>
                {idEditar === 0 ? 'Registrar gasto' : 'Actualizar gasto'}
            </button>

            <h2>Lista de gastos</h2>

            <button onClick={consultarGastos}>
                Consultar gastos
            </button>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>Monto</th>
                        <th>Descripción</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {gastos.map((gasto: any) => (
                        <tr key={gasto.idgasto}>
                            <td>{gasto.categoria}</td>
                            <td>L. {gasto.monto}</td>
                            <td>{gasto.descripcion}</td>
                            <td>{gasto.fecha.substring(0, 10)}</td>
                            <td>
                                <button onClick={() => seleccionarGasto(gasto)}>
                                    Editar
                                </button>

                                <button onClick={() => eliminarGasto(gasto.idgasto)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
