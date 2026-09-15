// =============================================================================
// COMPONENTE: CABECERA INTELIGENTE CON SCROLL (SCROLL HEADER)
// - Permite que la barra superior (o botón de menú) se mueva con el usuario:
//   * Al bajar por la página (scroll down), se oculta suavemente hacia arriba.
//   * Al subir (scroll up), reaparece de inmediato para fácil navegación.
// - No empuja ni mueve el contenido de la página porque usa posición fija.
// =============================================================================

"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollHeaderProps {
  children: React.ReactNode;
  className?: string;
  scrolledClassName?: string;
}

export function ScrollHeader({
  children,
  className = "",
  scrolledClassName = "",
}: ScrollHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      // Si el usuario baja más de 80px, oculta la cabecera; si sube, la muestra
      setHidden(y > lastY.current && y > 80);
      // Aplica fondo oscuro con desenfoque si se ha hecho scroll más de 40px
      setScrolled(y > 40);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-40 transition-[transform,background-color,box-shadow] duration-300 ease-out ${
        hidden ? "-translate-y-[150%]" : "translate-y-0"
      } ${className} ${scrolled ? scrolledClassName : ""}`}
    >
      {children}
    </div>
  );
}
