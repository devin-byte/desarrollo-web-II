
"use client";

import { useEffect, useState } from "react";
import TarjetaPersona from "./components/TarjetaPersona";

interface Persona {
  id: number;
  nombre: string;
  ocupacion: string;
  pais: string;
}

export default function Home() {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    const listaPersonas: Persona[] = [
      {
        id: 1,
        nombre: "Carlos López",
        ocupacion: "Medico",
        pais: "Honduras",
      },
      {
        id: 2,
        nombre: "María García",
        ocupacion: "Diseñadora gráfica",
        pais: "México",
      },
      {
        id: 3,
        nombre: "Juan Pérez",
        ocupacion: "Ingeniero en sistemas",
        pais: "Colombia",
      },
      {
        id: 4,
        nombre: "Ana Rodríguez",
        ocupacion: "Abogada",
        pais: "Argentina",
      },
    ];

    setPersonas(listaPersonas);
  }, []);

  return (
    <main className="contenedor">
      <h1>Tarjetas de Personas</h1>
      <p className="subtitulo">
        Información de diferentes personas
      </p>

      <section className="lista-tarjetas">
        {personas.map((persona) => (
          <TarjetaPersona
            key={persona.id}
            nombre={persona.nombre}
            ocupacion={persona.ocupacion}
            pais={persona.pais}
          />
        ))}
      </section>
    </main>
  );
}
