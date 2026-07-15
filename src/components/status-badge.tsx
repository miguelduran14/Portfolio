/**
 * Badge de disponibilidad — adaptado del patrón "Animated Status Badge" de
 * 21st.dev a la marca Terminal calm: punto en latón, texto mono, píldora con
 * borde de línea. Señal directa para reclutadores.
 *
 * El anillo que "late" (ping) solo se muestra con movimiento permitido
 * (motion-reduce:hidden). Es una micro-animación localizada; si se quiere
 * mantener el presupuesto estricto de 3 patrones, basta con quitar el <span>
 * del ping y dejar el punto estático.
 */
export function StatusBadge({
  label = "Disponible para proyectos",
}: {
  label?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-2/60 py-1.5 pl-2.5 pr-3.5 font-mono text-xs text-muted-foreground">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass/60 motion-reduce:hidden" />
        <span className="relative inline-flex size-2 rounded-full bg-brass" />
      </span>
      <span className="tracking-wide">
        {label}
        <span className="mx-1.5 text-line">·</span>
        <span className="text-paper/70">100% remoto</span>
      </span>
    </span>
  );
}
