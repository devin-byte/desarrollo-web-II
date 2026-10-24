
interface TarjetaPersonaProps {
  nombre: string;
  ocupacion: string;
  pais: string;
}

export default function TarjetaPersona({
  nombre,
  ocupacion,
  pais,
}: TarjetaPersonaProps) {
  return (
    <article className="tarjeta">
      <div className="avatar">{nombre.charAt(0)}</div>

      <h2>{nombre}</h2>
      <p>
        <strong>Ocupación:</strong> {ocupacion}
      </p>
      <p>
        <strong>País:</strong> {pais}
      </p>
    </article>
  );
}
