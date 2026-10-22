
interface ConversionesProps {
  celsius: number;
  fahrenheit: number;
  kelvin: number;
}

export default function Conversiones({
  celsius,
  fahrenheit,
  kelvin,
}: ConversionesProps) {
  const conversiones = [
    { nombre: "Celsius", valor: celsius, simbolo: "°C" },
    { nombre: "Fahrenheit", valor: fahrenheit, simbolo: "°F" },
    { nombre: "Kelvin", valor: kelvin, simbolo: "K" },
  ];

  return (
    <section className="conversiones">
      <h2>Resultados de las conversiones</h2>

      <ul>
        {conversiones.map((conversion) => (
          <li key={conversion.nombre}>
            <span>{conversion.nombre}</span>
            <strong>
              {conversion.valor.toFixed(2)} {conversion.simbolo}
            </strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
