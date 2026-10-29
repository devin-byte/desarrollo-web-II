"use client";

type Props = {
  onClick: () => void;
};

export default function BotonIngles({ onClick }: Props) {
  return (
    <button className="boton" onClick={onClick}>
      Cambiar Idioma Inglés
    </button>
  );
}