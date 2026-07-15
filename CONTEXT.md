# CONTEXT.md — Sitio personal / portfolio de Miguel Ángel Durán

> Este documento es la fuente de verdad del proyecto. Cualquier decisión de diseño,
> copy o arquitectura debe poder justificarse contra lo que hay aquí. Si algo no
> encaja con esto, no se hace.

---

## 1. Qué es esto y para quién

Sitio personal de **Miguel Ángel Durán Muñoz** — ingeniero de software con un perfil
**híbrido poco común**: mainframe crítico (COBOL, DB2, JCL, z/OS) en banca y seguros,
+ desarrollo moderno (Next.js, TypeScript) + IA aplicada (LLMs) en proyectos propios.

No es un CV online más. Es una **carta de presentación viva**: un sitio que, además de
contar quién es, **demuestra** que construye software moderno de verdad (porque el sitio
mismo lo es).

**Audiencia principal**, por orden:
1. Reclutadores y managers técnicos de empresas con sistemas legacy (banca, seguros, finanzas).
2. CTOs / leads que buscan perfiles con hambre y capacidad de aprender.
3. Otros devs (comunidad, credibilidad, networking).

**El "job to be done":** posicionar a Miguel como *el ingeniero que convierte el legacy en
ventaja competitiva*. Objetivo a 10 años (marca), no solo "la siguiente oferta".

**Lo que alguien debe pensar en los primeros 10 segundos:**
> "Este tío entiende de verdad los sistemas que dan miedo (mainframe) y a la vez construye
> cosas modernas con IA. Esa combinación es rara y valiosa."

---

## 2. Tesis de marca / posicionamiento

**Frase ancla (EN):** *Bridging legacy systems and modern AI.*
**Versión ES:** *Convierto el legacy en ventaja competitiva.*

El insight: casi nadie en mainframe habla de IA; casi nadie en IA entiende el mainframe.
Miguel está en la intersección y sabe explicar **por qué eso importa**. Ese es el foso.

**Reglas de honestidad (heredadas del CV, innegociables):**
- Cero métricas inventadas. Si no hay dato real, no se pone.
- Miguel **dirige, integra y depura** el stack moderno y aprende sobre la marcha; tiene base
  de programación (PHP, SQL, PL/SQL de FP). No se le vende como "senior full-stack".
  Se le posiciona como *ingeniero mainframe sólido que construye y aprende moderno + IA*.
- Nunca aparece código, nombres de tablas, programas ni datos de clientes reales
  (ni de su empleador). Los proyectos se describen a nivel de arquitectura y propósito.

---

## 3. Voz y tono

Working engineer honesto. Técnico pero accesible: un junior entiende el primer párrafo,
un senior aprende algo en los detalles. Nada de "developer bro", nada de corporativo frío,
nada de hype de IA vacío. Frases cortas. Verbos concretos. Confianza sin fanfarronería.

---

## 4. Contenido real (copy de partida — usar tal cual o pulir, no inventar hechos nuevos)

### Hero
- **Nombre:** Miguel Ángel Durán Muñoz
- **Rol:** Rising Software Engineer
- **Titular:** Mainframe (COBOL · DB2 · z/OS) + Desarrollo moderno & IA
- **Frase firma (la que se "descifra"):** `Bridging legacy systems and modern AI`
- **Sub:** Ingeniero de software en banca y seguros construyendo el puente entre los
  sistemas críticos legacy y el desarrollo moderno con IA.
- **CTAs:** primario → "Ver proyectos"; secundarios → GitHub, LinkedIn, Email.
- **Meta:** 100% remoto · Las Palmas de Gran Canaria · Inglés B2 (trabajo/entrevista).

### About (3 párrafos)
1. Ingeniero de software especializado en sistemas mainframe críticos (COBOL, DB2, JCL,
   z/OS) en banca y seguros, donde desarrolla y evoluciona flujos batch de alta criticidad
   a partir de análisis funcional.
2. En paralelo construye productos propios en stack moderno y aplica IA de forma práctica:
   ha desplegado **Memory Map** en producción y desarrolla **KnowFlow**, una herramienta que
   usa LLMs para ayudar a devs a entender COBOL heredado. Usa IA también en su trabajo diario
   para acelerar el análisis (mapeo de datos y diagramas desde copybooks).
3. Aprende rápido y le interesa el punto donde los sistemas legacy críticos se encuentran con
   el desarrollo moderno y la IA. Abierto a roles remotos donde esa combinación aporte valor.

### Proyectos (bento grid)
**Memory Map** — `en producción` · recuerdosmym.online
App de recuerdos de viaje (mapa interactivo + fotos/vídeos + diario), desplegada y en uso real.
- Arquitectura resiliente: lectura vía caché con fallback automático a snapshot en object
  storage si la BD falla; patrón "driver" de almacenamiento intercambiable por configuración.
- Robustez de media: normalización de vídeo (.mov→MP4/H.264), HEIC→JPEG, limpieza de EXIF,
  optimización (blur-up), subida directa vía URLs firmadas.
- Stack: Next.js 16 · React 19 · TypeScript · Tailwind · Leaflet · Supabase · Cloudflare R2
  · Vercel · Sentry · Capacitor (iOS/PWA).

**KnowFlow** — `en desarrollo`
Herramienta local que recibe un COBOL + copybooks y genera un "paquete de onboarding" para
quien hereda código legacy: resumen en lenguaje llano, esquema de datos, inventario de lo que
toca el programa y avisos. Enfoque: parser COBOL determinista + capa de explicación con LLM,
en TypeScript/Node con interfaz propia. Nace de un problema real: reducir el tiempo de
entender un COBOL heredado.

*(Dejar hueco para un tercer proyecto futuro sin romper el layout.)*

### Experiencia (timeline / tracing beam)
- **Rising Software Engineer · Mainframe COBOL/DB2** — NTT DATA · Proyecto ASISA (seguros).
  Remoto. Dic 2025 – Actualidad. Desarrollo/evolución de flujos contables COBOL/DB2, análisis
  funcional, mantenimiento correctivo y evolutivo, reporting sobre DB2/macros, y utilidades
  internas con IA (Claude Code/Codex) para mapear datos y generar diagramas desde copybooks.
- **Técnico de Sistemas Mainframe · Planificación** — Métrica Consulting (Kyndryl) · Banco
  Sabadell. Remoto. Nov 2023 – Nov 2025. Planificación batch (OPC/Procman/current plan), JCL,
  control operativo y SLAs en producción bancaria 24/7.
- **Técnico Informático · Prácticas** — Fractalia Remote Systems. Mar–Jun 2022.

### Skills (3 cards expandibles — hover/click revela el detalle)
- **Núcleo (experiencia profesional):** COBOL · DB2 · SQL · JCL · z/OS · OPC/Procman ·
  Batch · Análisis funcional · Mantenimiento correctivo y evolutivo.
- **En desarrollo activo (proyectos reales):** TypeScript · React/Next.js · Node.js ·
  Supabase · Cloudflare R2 · Vercel · Git/GitHub.
- **IA aplicada:** LLMs (API de Anthropic) · Claude Code · Codex · Cursor · automatización
  de análisis y documentación.

### Contacto
Email: miguelduran14@gmail.com · GitHub: github.com/miguelduran14 · LinkedIn (añadir URL).
Nota: 100% remoto, abierto a oportunidades.

### Idiomas
Español (nativo) · Inglés B2 – First (trabajo/entrevista) · Francés (básico).

---

## 5. Sistema de diseño

Coherente con el CV para que sitio + CV se sientan una sola marca.

**Paleta** (web = dark-first; es la inversión del CV claro):
```
--ink        #0E2033   /* fondo principal */
--ink-2      #0A1826   /* fondo más profundo / secciones */
--ink-3      #14273A   /* superficies / cards */
--paper      #F6F3ED   /* texto principal sobre ink */
--brass      #C6A24C   /* acento único */
--brass-soft #E7D6A8   /* acento tenue */
--muted      #8598AB   /* texto secundario sobre ink */
--line       #213649   /* divisores */
```
El **latón es el único acento**. Nada de segundos colores de acento. Un color, usado con
disciplina, es más premium que un degradado multicolor.

**Tipografía — IBM Plex (elección con significado: es la tipografía de IBM, casa de z/OS/DB2):**
- Display / nombre: **IBM Plex Serif** (gravedad, oficio).
- Cuerpo / UI: **IBM Plex Sans**.
- Datos / etiquetas / la firma que se descifra / eyebrows: **IBM Plex Mono** (evoca el
  terminal sin caer en la "pantalla verde").

**Espaciado y ritmo:** generoso, editorial, calmado (referencia: refero.design, no los
showcases de componentes). Escala de tipo clara. Line-height cómodo. Mucho aire.

---

## 6. La firma (gastar la audacia aquí y solo aquí)

En el **hero**, la frase `Bridging legacy systems and modern AI` aparece primero como
caracteres monoespaciados aleatorios y se **descifra** carácter a carácter hasta el texto
final (efecto tipo *Decrypted Text* de React Bits). Es la marca hecha movimiento: lo
ilegible se vuelve legible. Ocurre **una vez**, al cargar, con elegancia, y no se repite en
bucle molesto.

**Regla de contención (crítica para que sea profesional y no "AI slop"):**
- Máximo **3 patrones de movimiento** en todo el sitio: (1) el descifrado del hero,
  (2) reveals suaves al hacer scroll (fade/subida corta), (3) micro-hover en cards/enlaces.
- Fondo ambiental permitido **solo si es muy sutil** (p. ej. un grid tenue o puntos casi
  imperceptibles en el hero). Si distrae, fuera. Nada de auroras saturadas ni partículas
  ruidosas.
- Todo respeta `prefers-reduced-motion`: sin ese permiso, el texto aparece ya descifrado y
  los reveals se desactivan.

---

## 7. "Lo mejor de cada uno" — qué tomar y qué NO

| Fuente | Qué tomamos | Qué evitamos |
|---|---|---|
| **Aceternity UI** | Bento grid (proyectos), Tracing Beam/Timeline (experiencia), Text Generate/Spotlight con moderación, Card Hover | Meter 10 efectos; lamp/beams saturados; look de "demo de componentes" |
| **React Bits** | Decrypted Text (firma del hero); un fondo ambiental muy sutil | Fondos ruidosos (ballpit, aurora fuerte), animaciones en bucle |
| **21st.dev** | Filosofía "not AI slop" + base shadcn + su MCP/CLI para tirar de componentes crafteados concretos | Copiar una plantilla entera tal cual |
| **refero.design** | Referencia de *gusto*: espaciado, tipografía y calma de producto real | — (es solo inspiración, no código) |
| **componentry.dev** | Patrones concretos de apoyo si hace falta | Sobre-componentizar |

Principio rector: **curación con criterio > acumulación**. Chanel rule: antes de publicar,
quita un efecto.

---

## 8. Estructura del sitio

```
/               Home (one-page con anclas): Hero · About · Proyectos · Experiencia · Skills · Contacto
/blog           Índice de artículos
/blog/[slug]    Artículo (MDX)
```
Navegación fija minimalista (mono, tenue) con anclas + enlace a Blog + iconos GitHub/LinkedIn.
CTA principal del sitio: "Ver proyectos" (y, cuando haya artículos, "Leer el blog").

---

## 9. Blog

- Contenido en **MDX** en `src/content/blog/*.mdx` (frontmatter: title, date, summary, tags, slug).
- Estética de lectura calmada (IBM Plex Sans para el cuerpo, ancho de línea cómodo, Mono para
  bloques de código con resaltado sobrio).
- Se lanza con **1 artículo ancla**. Ideas (elegir 1 para empezar):
  - "Por qué el mainframe está más vivo que nunca (y yo construyo el puente)".
  - "KnowFlow: el problema de heredar un COBOL que nadie te explica".
  - "Cómo uso IA para mapear un flujo COBOL en minutos".
- Frecuencia realista: 1 cada 2–3 semanas. Mejor pocos y buenos que muchos y vacíos.
- **Miguel escribe el contenido; nunca inventar artículos ni datos.** Dejar un `sample-post.mdx`
  de plantilla con la estructura, no un artículo falso publicable.

---

## 10. Stack técnico

- **Next.js (App Router) + TypeScript** — mismo mundo que Memory Map (coherencia + reutiliza skills).
- **Tailwind** para estilos; **shadcn/ui** como base de componentes.
- **Framer Motion** (o `motion`) para las 3 animaciones permitidas.
- **MDX** para el blog (vía App Router; `next-mdx-remote` o loader MDX nativo).
- **Deploy en Vercel**. Sin backend propio de momento (todo estático/SSG).
- Sin base de datos ni auth en v1. El formulario de contacto, si se pone, es `mailto:` o un
  servicio simple (Formspree/Resend) — **nunca** meter secretos en el repo.

---

## 11. Calidad — suelo innegociable

- **Rendimiento:** Lighthouse alto; imágenes optimizadas (`next/image`); JS mínimo; fuentes
  con `display: swap` y subset.
- **Accesibilidad:** contraste AA (ink/paper/brass cumplen), foco de teclado visible, HTML
  semántico, `alt` en imágenes, `prefers-reduced-motion` respetado.
- **Responsive:** móvil primero; el hero y el bento deben verse bien en 375px.
- **SEO:** metadatos, Open Graph (generar una OG image con nombre + titular), sitemap, título
  y descripción por página.
- **Sin datos de cliente/empleador** en ningún sitio (copy, comentarios, commits, capturas).

---

## 12. Assets pendientes (Miguel los añade después — dejar huecos, no bloquear)

- Foto profesional (se la hace esta semana) → hueco en Hero/About con placeholder elegante
  (iniciales "MD" en latón sobre ink) hasta entonces.
- Capturas reales de Memory Map y KnowFlow para el bento (placeholder mientras tanto).
- Dominio (`miguelduran.dev` u otro, aún sin comprar) → funcionar en subdominio Vercel hasta
  que se configure.
- URL de LinkedIn (añadir cuando la confirme).
