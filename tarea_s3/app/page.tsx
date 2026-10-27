
"use client";

import { useState } from "react";
import ListaTareas from "./components/ListaTareas";

export type EstadoTarea = "Pendiente" | "En Proceso" | "Completada";

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: EstadoTarea;
}

export default function Home() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [siguienteId, setSiguienteId] = useState(1);

  function agregarTarea(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!titulo.trim() || !descripcion.trim()) {
      return;
    }

    const nuevaTarea: Tarea = {
      id: siguienteId,
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      estado: "Pendiente",
    };

    setTareas((tareasActuales) => [...tareasActuales, nuevaTarea]);
    setSiguienteId((idActual) => idActual + 1);
    setTitulo("");
    setDescripcion("");
  }

  function cambiarEstado(id: number, estado: EstadoTarea) {
    setTareas((tareasActuales) =>
      tareasActuales.map((tarea) =>
        tarea.id === id ? { ...tarea, estado } : tarea
      )
    );
  }

  function eliminarTarea(id: number) {
    setTareas((tareasActuales) =>
      tareasActuales.filter((tarea) => tarea.id !== id)
    );
  }

  return (
    <main className="contenedor">
      <h1>Gestor de Tareas</h1>
      <p className="subtitulo">
        Organiza tus actividades de forma sencilla.
      </p>

      <section className="formulario-contenedor">
        <h2>Agregar nueva tarea</h2>

        <form onSubmit={agregarTarea}>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            placeholder="Escribe el título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            placeholder="Escribe la descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows={3}
            required
          />

          <button type="submit" className="boton-agregar">
            Agregar tarea
          </button>
        </form>
      </section>

      <section className="tabla-contenedor">
        <h2>Lista de tareas</h2>

        <ListaTareas
          tareas={tareas}
          onCambiarEstado={cambiarEstado}
          onEliminar={eliminarTarea}
        />
      </section>
    </main>
  );
}
