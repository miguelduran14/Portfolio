# MASTER_PROMPT.md — Prompt maestro para arrancar el build

> Pega el bloque de abajo como **primer mensaje** en Claude Code (o Codex) dentro de la
> carpeta del proyecto, con `CONTEXT.md` y `CLAUDE.md` ya en la raíz.
> Está pensado para construir por **fases con checkpoints**, no de un tirón: revisas y das
> el OK antes de que siga. Provider-agnóstico.

---

```
Eres el design lead + ingeniero frontend de este proyecto. Lee CONTEXT.md entero antes de
escribir una sola línea: es la fuente de verdad (marca, audiencia, copy real, sistema de
diseño, la firma del hero, reglas de contención de movimiento y el suelo de calidad). No
inventes hechos, métricas ni contenido que no esté en CONTEXT.md. No uses nunca datos de
clientes o del empleador.

Objetivo: un sitio personal premium para Miguel Ángel Durán que sea a la vez carta de
presentación y prueba de que construye software moderno. Tesis de diseño: "Terminal calm"
— oscuro, editorial, IBM Plex + tinta/latón, 90% silencioso y preciso, con UNA sola firma
memorable (el titular del hero que se descifra de caracteres monoespaciados a texto legible).
Curación con criterio por encima de acumulación de efectos: máximo 3 patrones de movimiento
en todo el sitio y todo respeta prefers-reduced-motion.

Stack: Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Framer Motion, MDX para el
blog, deploy en Vercel. Sin backend, DB ni auth en v1. Móvil primero. Accesibilidad AA y
buen Lighthouse como suelo, no como extra.

Trabaja por FASES y para en cada CHECKPOINT a enseñarme el resultado y esperar mi OK antes de
continuar. No hagas todo de golpe. En cada fase, primero dime en 3-4 líneas qué vas a hacer y
qué decisiones tomas; luego impleméntalo; luego resume qué revisar.

FASE 0 — Cimientos.
Propón (y tras mi OK, crea) la estructura de carpetas, configura Next.js + TS + Tailwind +
shadcn, define los design tokens de CONTEXT.md (colores, IBM Plex vía next/font, escala
tipográfica, radios, sombras) en el tema de Tailwind y globals.css, y monta el layout raíz
con navegación fija minimalista y footer. Sin contenido aún.
>> CHECKPOINT 0: enséñame tokens + layout vacío antes de seguir.

FASE 1 — Hero + la firma.
Construye el hero con el efecto de descifrado del titular (una vez al cargar, elegante, con
fallback a texto estático si reduce-motion). Fondo ambiental solo si es MUY sutil. CTAs y meta
según CONTEXT.md.
>> CHECKPOINT 1: quiero ver y sentir la firma antes de construir el resto. Itera conmigo aquí.

FASE 2 — About + Contacto.
Sección About (3 párrafos del copy real) con placeholder elegante para la foto (iniciales "MD"
en latón). Contacto con email/GitHub/LinkedIn. Reveals suaves al scroll.
>> CHECKPOINT 2.

FASE 3 — Proyectos (bento grid).
Bento grid con Memory Map ("en producción", link a recuerdosmym.online) y KnowFlow
("en desarrollo"), con hueco para un 3er proyecto futuro. Placeholders para capturas reales.
Micro-hover sobrio. Etiquetas de estado en mono/latón.
>> CHECKPOINT 3.

FASE 4 — Experiencia (timeline / tracing beam) + Skills.
Timeline vertical con los 3 roles del copy. Tres cards de skills expandibles (Núcleo / En
desarrollo / IA aplicada) que revelan el detalle al hover/click.
>> CHECKPOINT 4.

FASE 5 — Blog.
Ruta /blog y /blog/[slug] con MDX (frontmatter: title, date, summary, tags, slug), estética
de lectura calmada, resaltado de código sobrio. Crea UN sample-post.mdx de plantilla (no un
artículo falso publicable). Yo escribiré el contenido real.
>> CHECKPOINT 5.

FASE 6 — Pulido.
OG image (nombre + titular), metadatos/SEO por página, sitemap, revisión de accesibilidad
(foco, contraste, reduce-motion), responsive 375px, y pasada de rendimiento. Aplica la
"Chanel rule": quita un efecto que sobre.
>> CHECKPOINT 6: repaso final antes de deploy a Vercel.

Reglas permanentes durante todo el build:
- Ante cualquier duda de contenido o alcance, pregúntame en vez de inventar.
- Mantén el movimiento dentro del presupuesto (3 patrones) y reduce-motion siempre.
- Nada de segundos colores de acento: el latón es el único.
- Commits pequeños y descriptivos. Explica los trade-offs cuando elijas entre opciones.
```

---

## Cómo usarlo

1. Crea la carpeta del proyecto y mete en la raíz: `CONTEXT.md`, `CLAUDE.md` y este
   `MASTER_PROMPT.md`.
2. Abre Claude Code (o Codex) en esa carpeta.
3. Pega el bloque de arriba como primer mensaje.
4. Ve dando OK fase a fase. En el CHECKPOINT 1 (la firma del hero) merece la pena que iteres
   un par de veces hasta que te enamore: es EL momento del sitio.
