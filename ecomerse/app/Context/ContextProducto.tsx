import { createContext } from "react";
import { Producto } from "../modelos/Producto";

interface ContextoProducto {
    producto: Producto[];
    carritoProducto: Producto[];
    agregarCarrito: (idProducto: number) => void;
    eliminarCarrito: (idProducto: number, cantidad: number) => void;
}

export const ContexrProducto = createContext<ContextoProducto>({
    producto: [],
    carritoProducto: [],
    agregarCarrito: () => {},
    eliminarCarrito: () => {}
});
