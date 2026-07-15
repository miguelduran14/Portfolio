/**
 * Fila de tags del stack — pastillas mono, estáticas (sin movimiento).
 * Palabras clave escaneables para reclutadores. Contenido real de las skills
 * de CONTEXT.md §4 (nada inventado).
 */
const TAGS = [
  "COBOL",
  "DB2",
  "z/OS",
  "TypeScript",
  "Next.js",
  "IA (LLMs)",
] as const;

export function TechTags() {
  return (
    <ul className="flex flex-wrap gap-2">
      {TAGS.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-line bg-ink-3/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
