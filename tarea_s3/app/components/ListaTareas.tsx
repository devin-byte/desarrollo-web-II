
import type { Tarea, EstadoTarea } from "../page";

interface TablaTareasProps {
  tareas: Tarea[];
  onCambiarEstado: (id: number, estado: EstadoTarea) => void;
  onEliminar: (id: number) => void;
}

export default function TablaTareas({
  tareas,
  onCambiarEstado,
  onEliminar,
}: TablaTareasProps) {
  if (tareas.length === 0) {
    return <p className="sin-tareas">Todavía no hay tareas registradas.</p>;
  }

  return (
    <div className="tabla-scroll">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td>{tarea.id}</td>
              <td>{tarea.titulo}</td>
              <td>{tarea.descripcion}</td>
              <td>
                <select
                  value={tarea.estado}
                  onChange={(e) =>
                    onCambiarEstado(
                      tarea.id,
                      e.target.value as EstadoTarea
                    )
                  }
                  aria-label={`Estado de ${tarea.titulo}`}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Completada">Completada</option>
                </select>
              </td>
              <td>
                <button
                  type="button"
                  className="boton-eliminar"
                  onClick={() => onEliminar(tarea.id)}
                >
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
