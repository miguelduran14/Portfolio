# Portfolio — Miguel Ángel Durán Muñoz

Sitio personal / portfolio. Tesis de diseño **"Terminal calm"**: oscuro, editorial,
IBM Plex + tinta/latón, 90% silencioso, con una sola firma memorable (el titular del
hero que se descifra).

Fuente de verdad del proyecto: [`CONTEXT.md`](./CONTEXT.md) · reglas permanentes en
[`CLAUDE.md`](./CLAUDE.md) · plan por fases en [`MASTER_PROMPT.md`](./MASTER_PROMPT.md).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind v4 · shadcn/ui · Framer Motion (`motion`) ·
IBM Plex vía `next/font`. Deploy en Vercel. Sin backend/DB/auth en v1.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

## Estructura

```
src/
  app/            App Router (layout raíz, globals.css con los design tokens)
  components/     Nav, footer, iconos de marca, y UI de shadcn en components/ui
  lib/            site.ts (nav + enlaces), utils
references/        CV en PDF (referencia viva de paleta/tipografía/contenido)
```

Los design tokens (paleta tinta/latón, IBM Plex, radios, sombras) viven en
`src/app/globals.css`.
