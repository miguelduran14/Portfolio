# CLAUDE.md

> Claude Code carga este archivo automáticamente en cada sesión. Son las reglas permanentes
> del proyecto. El brief completo (marca, copy, diseño) está en **CONTEXT.md** — léelo.

## Qué es este proyecto
Sitio personal / portfolio de Miguel Ángel Durán: ingeniero mainframe (COBOL/DB2/z/OS) que
construye moderno + IA. El sitio es a la vez carta de presentación y prueba de capacidad.
Fuente de verdad: `CONTEXT.md`. Plan de construcción: `MASTER_PROMPT.md`.

## Tesis de diseño
"Terminal calm": oscuro, editorial, IBM Plex + tinta/latón. 90% silencioso; UNA firma (el
titular del hero que se descifra). Curación > acumulación.

## Reglas innegociables
1. **Contención de movimiento:** máximo 3 patrones (descifrado del hero · reveals al scroll ·
   micro-hover). `prefers-reduced-motion` siempre respetado.
2. **Un solo acento:** latón (`--brass #C6A24C`). Ningún segundo color de acento.
3. **Tipografía:** IBM Plex Serif (display) · Sans (cuerpo) · Mono (datos/etiquetas/firma).
4. **Honestidad:** cero hechos o métricas inventadas. Solo el contenido de CONTEXT.md.
5. **Privacidad:** jamás datos, código, tablas o nombres de clientes/empleador — en ningún
   sitio (copy, comentarios, commits, capturas).
6. **Suelo de calidad:** accesibilidad AA, foco de teclado visible, responsive desde 375px,
   Lighthouse alto, imágenes optimizadas. No es opcional.
7. **Sin secretos en el repo.** Nada de API keys ni tokens versionados.
8. **Ante duda de contenido o alcance, preguntar** — no rellenar con invención.

## Stack
Next.js (App Router) · TypeScript · Tailwind · shadcn/ui · Framer Motion · MDX · Vercel.
Sin backend/DB/auth en v1.

## Flujo de trabajo
Construir por fases con checkpoints (ver MASTER_PROMPT.md). Parar y enseñar en cada checkpoint.
Commits pequeños y descriptivos. Explicar trade-offs al elegir entre opciones.
