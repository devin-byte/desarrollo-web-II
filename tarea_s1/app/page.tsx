
import Conversiones from "./componentes/Conversiones";

const temperaturaInicial = 25;
const unidadInicial = "Celsius";

export default function Home() {
  let celsius: number;
  let fahrenheit: number;
  let kelvin: number;

  if (unidadInicial === "Celsius") {
    celsius = temperaturaInicial;
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = celsius + 273.15;
  } else if (unidadInicial === "Fahrenheit") {
    fahrenheit = temperaturaInicial;
    celsius = ((fahrenheit - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else {
    kelvin = temperaturaInicial;
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  const simbolo =
    unidadInicial === "Celsius"
      ? "°C"
      : unidadInicial === "Fahrenheit"
        ? "°F"
        : "K";

  return (
    <main className="contenedor">
      <h1>Conversor de Temperatura</h1>

      <section className="temperatura-inicial">
        <p>Temperatura inicial</p>
        <h2>
          {temperaturaInicial} {simbolo}
        </h2>
        <p>Unidad de origen: {unidadInicial}</p>
      </section>

      <Conversiones
        celsius={celsius}
        fahrenheit={fahrenheit}
        kelvin={kelvin}
      />
    </main>
  );
}
