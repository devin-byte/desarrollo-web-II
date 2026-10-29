"use client";

import { createContext, useContext } from "react";
import palabras from "../Datos/palabras.json";

type Palabra = {
  es: string;
  en: string;
};

type IdiomaContextType = {
  palabras: Palabra[];
};

const IdiomaContext = createContext<IdiomaContextType | undefined>(
  undefined
);

export function IdiomaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IdiomaContext.Provider value={{ palabras }}>
      {children}
    </IdiomaContext.Provider>
  );
}

export function useIdiomaContext() {
  const context = useContext(IdiomaContext);

  if (!context) {
    throw new Error("useIdiomaContext debe usarse dentro de IdiomaProvider");
  }

  return context;
}