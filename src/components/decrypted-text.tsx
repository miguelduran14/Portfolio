"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * La firma del sitio (CONTEXT.md §6): un texto que aparece como caracteres
 * monoespaciados aleatorios y se descifra carácter a carácter hasta el texto
 * final. Ocurre UNA sola vez al cargar. Con prefers-reduced-motion se muestra
 * ya descifrado, sin animación.
 *
 * Accesibilidad: el texto real vive en el DOM (sr-only, legible por lectores de
 * pantalla e indexable); la capa animada es aria-hidden.
 */

const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>-_/\\[]{}=+*#%$&";

function scramble(text: string, revealed: number) {
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === " ") out += " ";
    else if (i < revealed) out += ch;
    else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  }
  return out;
}

type Props = {
  text: string;
  className?: string;
  /** ms antes de empezar (deja respirar al primer paint) */
  startDelay?: number;
  /** ms entre revelar un carácter y el siguiente */
  revealSpeed?: number;
};

export function DecryptedText({
  text,
  className,
  startDelay = 250,
  revealSpeed = 42,
}: Props) {
  const reduceMotion = useReducedMotion();
  // Estado inicial = texto real → SSR y primer render de cliente coinciden.
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(text);
      return;
    }

    let revealed = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      // Arranca ya revuelto para que no se vea el texto final antes de tiempo.
      setDisplay(scramble(text, 0));
      intervalId = setInterval(() => {
        revealed += 1;
        setDisplay(scramble(text, revealed));
        if (revealed >= text.length && intervalId) {
          clearInterval(intervalId);
        }
      }, revealSpeed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, reduceMotion, startDelay, revealSpeed]);

  return (
    <span className={cn("font-mono", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
