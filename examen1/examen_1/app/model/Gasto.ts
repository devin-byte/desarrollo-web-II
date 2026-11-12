export interface Gasto {
    idgasto: number;
    categoria: string;
    monto: number;
    fecha: string;
}

export interface GastoContextType {
    gastos: Gasto[];
    presupuesto: number;
    setPresupuesto: (presupuesto: number) => void;
    consultarGastos: () => void;
    agregarGasto: (gasto: Omit<Gasto, 'idgasto'>) => void;
    editarGasto: (id: number, gasto: Omit<Gasto, 'idgasto'>) => void;
    eliminarGasto: (id: number) => void;
}