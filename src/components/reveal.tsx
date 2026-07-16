"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Reveal — patrón de movimiento nº 2 (CONTEXT.md §6): fade + subida corta
 * cuando el bloque entra en viewport, una sola vez. Con prefers-reduced-motion
 * se renderiza estático (sin opacidad ni desplazamiento).
 */
type RevealProps = {
  children: ReactNode;
  className?: string;
  /** retardo para escalonar bloques hermanos (s) */
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
