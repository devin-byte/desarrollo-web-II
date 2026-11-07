import { createContext } from "react";

interface TriviaContextType {
    puntaje: number;
    preguntasRespondidas: number;
    incrementarPuntaje: (puntos: number) => void;
    reiniciarJuego: () => void;
}

export const TriviaContext = createContext<TriviaContextType>({
    puntaje: 0,
    preguntasRespondidas: 0,
    incrementarPuntaje: () => {},
    reiniciarJuego: () => {},
});