
import { createContext } from "react";
import { Producto } from "../modelos/Producto";

export const ContexrProducto = createContext({
    producto: [] as Producto[],
    carritoProducto: [] as Producto[],
    agregarCarrito: (producto: Producto) => { },
    eliminarCarrito: (id: number) => { },
    consultarCarrito: () => { },
    consultarProducto: () => { },
    agregarProducto: (producto: Producto) => { },
    eliminarProducto: (id: any) => { },
    editarProducto: (producto: Producto) => { },
})
