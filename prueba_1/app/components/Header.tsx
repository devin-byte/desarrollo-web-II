"use client";

import { useContext } from "react";
import { TriviaContext } from "../context/TriviaContext";

export default function Header() {
    const { puntaje } = useContext(TriviaContext);

    return (
        <header>
            <h1>Trivia</h1>
            <p>Puntaje actual: {puntaje}</p>
        </header>
    );
}