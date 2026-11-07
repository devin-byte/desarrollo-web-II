"use client";

import { useState, useEffect, useContext } from "react";
import { TriviaContext } from "../context/TriviaContext";
import type { Pregunta } from "../model/Pregunta";

export default function Home() {
    const { incrementarPuntaje, reiniciarJuego } = useContext(TriviaContext);

    const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<boolean | null>(null);


    useEffect(() => {
        const preguntasSimuladas: Pregunta[] = [
            {
                idPregunas: "1",
                DescripcionPregunta: "La Luna es un satélite natural de la Tierra.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1,
            },
            {
                idPregunas: "2",
                DescripcionPregunta: "Los delfines son mamíferos.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1,
            },
            {
                idPregunas: "3",
                DescripcionPregunta: "El agua se congela a 0 grados Celsius.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1,
            },
            {
                idPregunas: "4",
                DescripcionPregunta: "El océano Pacífico es el más grande del mundo.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1,
            },
            {
                idPregunas: "5",
                DescripcionPregunta: "Los peces pueden respirar bajo el agua.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1,
            },
            {
                idPregunas: "6",
                DescripcionPregunta: "Las plantas necesitan luz solar para realizar la fotosíntesis.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1,
            },
            {
                idPregunas: "7",
                DescripcionPregunta: "El corazón humano tiene cuatro cavidades.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1,
            },
            {
                idPregunas: "8",
                DescripcionPregunta: "Japón se encuentra en el continente europeo.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: false,
                puntajePregunta: 1,
            },
            {
                idPregunas: "9",
                DescripcionPregunta: "El hierro es un metal.",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 1,
            },
        ];

        setPreguntas(preguntasSimuladas);
    }, []);

    const seleccionarRespuesta = (respuesta: boolean) => {
        if (respuestaSeleccionada !== null) return;

        setRespuestaSeleccionada(respuesta);

        const pregunta = preguntas[preguntaActual];

        if (respuesta === pregunta.respuestaCorrecta) {
            incrementarPuntaje(pregunta.puntajePregunta);
        } else {
            incrementarPuntaje(0);
        }
    };

    const siguientePregunta = () => {
        setPreguntaActual(preguntaActual + 1);
        setRespuestaSeleccionada(null);
    };

    const nuevoJuego = () => {
        reiniciarJuego();
        setPreguntaActual(0);
        setRespuestaSeleccionada(null);
    };

    if (preguntas.length === 0) {
        return <p>Cargando preguntas...</p>;
    }

    if (preguntaActual >= preguntas.length) {
        return (
            <main className="trivia">
                <h1>¡Fin del Juego!</h1>
                <p>Has respondido las 5 preguntas.</p>
                <button onClick={nuevoJuego}>
                    Volver a jugar
                </button>
            </main>
        );
    }

    const pregunta = preguntas[preguntaActual];

    return (
        <main className="trivia">
            <h1>Juego de Trivia</h1>

            <p>
                Pregunta {preguntaActual + 1} de {preguntas.length}
            </p>

            <div className="contenedor-pregunta">
                <h2>{pregunta.DescripcionPregunta}</h2>

                <div className="opciones">
                    <button
                        onClick={() => seleccionarRespuesta(pregunta.opcionRespuesta1)}
                        disabled={respuestaSeleccionada !== null}>
                        Verdadero
                    </button>

                    <button
                        onClick={() => seleccionarRespuesta(pregunta.opcionRespuesta2)}
                        disabled={respuestaSeleccionada !== null} >
                        Falso
                    </button>
                </div>

                {respuestaSeleccionada !== null && (
                    <div className="resultado">
                        {respuestaSeleccionada === pregunta.respuestaCorrecta ? (
                            <p>¡Correcto! Has ganado {pregunta.puntajePregunta} punto.</p>
                        ) : (
                            <p>Respuesta incorrecta.</p>
                        )}

                        <button onClick={siguientePregunta}>
                            Siguiente pregunta
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}