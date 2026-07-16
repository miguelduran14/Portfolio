import { Reveal } from "@/components/reveal";

/**
 * About (Fase 2). Tres párrafos del copy real de CONTEXT.md §4, en primera
 * persona (voz "working engineer honesto", §3). Placeholder elegante para la
 * foto: iniciales "MD" en latón sobre ink (CONTEXT.md §12).
 */
export function About() {
  return (
    <section
      id="about"
      className="border-t border-line/60 py-24 sm:py-32"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Sobre mí</p>
          <h2
            id="about-title"
            className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-paper sm:text-4xl"
          >
            Un perfil híbrido poco común
          </h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16">
          {/* Placeholder de foto */}
          <Reveal delay={0.05}>
            <PhotoPlaceholder />
          </Reveal>

          {/* Bio */}
          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <Reveal delay={0.1}>
              <p>
                Soy ingeniero de software especializado en sistemas mainframe
                críticos —{" "}
                <span className="text-paper">COBOL, DB2, JCL, z/OS</span> — en
                banca y seguros, donde desarrollo y evoluciono flujos batch de
                alta criticidad a partir de análisis funcional.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                En paralelo construyo productos propios en stack moderno y
                aplico IA de forma práctica: tengo{" "}
                <span className="font-medium text-paper">Memory Map</span>{" "}
                desplegado en producción y desarrollo{" "}
                <span className="font-medium text-paper">KnowFlow</span>, una
                herramienta que usa LLMs para ayudar a devs a entender COBOL
                heredado. También uso IA en mi trabajo diario para acelerar el
                análisis: mapeo de datos y diagramas desde copybooks.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Aprendo rápido y me interesa el punto exacto donde los sistemas
                legacy críticos se encuentran con el desarrollo moderno y la IA.
                Estoy abierto a roles remotos donde esa combinación aporte
                valor.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Placeholder de retrato: iniciales "MD" en latón sobre ink, con una etiqueta
 * mono discreta que deja claro que es intencional hasta tener la foto real.
 */
function PhotoPlaceholder() {
  return (
    <figure className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-xl border border-line bg-gradient-to-b from-ink-3 to-ink-2 shadow-card">
      {/* Rejilla tenue de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 45%, black 10%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 45%, black 10%, transparent 80%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-7xl font-medium tracking-tight text-brass">
          MD
        </span>
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-line/70 bg-ink-2/70 px-3 py-2 font-mono text-[11px] text-muted-foreground/80 backdrop-blur-sm">
        <span>Miguel Á. Durán</span>
        <span className="text-muted-foreground/60">foto · pronto</span>
      </figcaption>
    </figure>
  );
}
