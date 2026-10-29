
"use client";

import { useEffect, useState } from "react";
import BotonEspanol from "./components/BotonEspanol";
import BotonIngles from "./components/BotonIngles";
import {
  IdiomaProvider,
  useIdiomaContext,
} from "./context/IdiomaContext";

type Idioma = "es" | "en";

function Contenido() {
  const { palabras } = useIdiomaContext();

  const [idioma, setIdioma] = useState<Idioma>("es");
  const [listaMostrada, setListaMostrada] = useState<string[]>([]);

  useEffect(() => {
    const lista = palabras.map((palabra) => palabra[idioma]);
    setListaMostrada(lista);
  }, [idioma, palabras]);

  return (
    <main className="contenedor">
      <h1>Traductor de Palabras</h1>

      <p>
        Idioma actual:{" "}
        <strong>
          {idioma === "es" ? "Español" : "Inglés"}
        </strong>
      </p>

      <div className="botones">
        <BotonEspanol onClick={() => setIdioma("es")} />
        <BotonIngles onClick={() => setIdioma("en")} />
      </div>

      <h2>Lista de palabras</h2>

      <ul className="lista">
        {listaMostrada.map((palabra, index) => (
          <li key={index}>{palabra}</li>
        ))}
      </ul>
    </main>
  );
}

export default function Home() {
  return (
    <IdiomaProvider>
      <Contenido />
    </IdiomaProvider>
  );
}
