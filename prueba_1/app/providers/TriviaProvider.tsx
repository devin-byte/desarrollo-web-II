"use client";

import { useState } from "react";
import { TriviaContext } from "../context/TriviaContext";

export default function TriviaProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [puntaje, setPuntaje] = useState(0);
    const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);

    const incrementarPuntaje = (puntos: number) => {
        setPuntaje((actual) => actual + puntos);
        setPreguntasRespondidas((actual) => actual + 1);
    };

    const reiniciarJuego = () => {
        setPuntaje(0);
        setPreguntasRespondidas(0);
    };

    return (
        <TriviaContext.Provider
            value={{
                puntaje,
                preguntasRespondidas,
                incrementarPuntaje,
                reiniciarJuego,
            }}>
            {children}
        </TriviaContext.Provider>
    );
}