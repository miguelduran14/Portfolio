import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/**
 * About (Fase 2, rediseñada). Refinamiento "Terminal calm": encabezado
 * numerado, rejilla asimétrica (columna de perfil = retrato + panel de datos
 * en mono que rima con la línea de terminal del hero; columna de bio con lead
 * destacado). Copy real de CONTEXT.md §4, primera persona. Sin métricas
 * inventadas ni nombres de cliente/empleador.
 */

// Datos seguros y reales (CONTEXT.md §4): sector y datos personales, nunca
// nombres de cliente/empleador.
const FACTS = [
  { k: "Ubicación", v: "Las Palmas de G.C." },
  { k: "Modo", v: "100% remoto" },
  { k: "Sector", v: "Banca y seguros" },
  { k: "Idiomas", v: "ES · EN B2 · FR" },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="border-t border-line/60 py-24 sm:py-32"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Sobre mí"
          title="Convierto el legacy en ventaja competitiva"
          id="about-title"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Columna de perfil */}
          <div className="space-y-6 lg:col-span-4">
            <Reveal>
              <PhotoPlaceholder />
            </Reveal>
            <Reveal delay={0.06}>
              <FactsPanel />
            </Reveal>
          </div>

          {/* Columna de bio */}
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <p className="max-w-2xl font-serif text-xl leading-relaxed text-paper/90 sm:text-2xl sm:leading-relaxed">
                Rising Software Engineer especializado en sistemas mainframe
                críticos — COBOL, DB2, JCL, z/OS — en banca y seguros, donde
                desarrollo y evoluciono flujos batch de alta criticidad a partir
                de análisis funcional.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 text-base leading-relaxed text-muted-foreground sm:grid-cols-2 sm:gap-8">
              <Reveal delay={0.15}>
                <p>
                  En paralelo construyo productos propios en stack moderno y
                  aplico IA de forma práctica: tengo{" "}
                  <span className="font-medium text-paper">Memory Map</span>{" "}
                  en producción y desarrollo{" "}
                  <span className="font-medium text-paper">KnowFlow</span>, que
                  usa LLMs para entender COBOL heredado.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  También uso IA en mi día a día para acelerar el análisis
                  —mapeo de datos y diagramas desde copybooks— y me interesa el
                  punto donde el legacy crítico se encuentra con lo moderno.
                  Abierto a roles remotos.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Panel de datos en mono, con cabecera tipo comentario — rima con la línea de
 * terminal del hero. Claves en latón, valores en paper.
 */
function FactsPanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-ink-2/40">
      <div className="border-b border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
        // perfil
      </div>
      <dl className="divide-y divide-line/70">
        {FACTS.map((f) => (
          <div
            key={f.k}
            className="flex items-baseline justify-between gap-4 px-4 py-3"
          >
            <dt className="font-mono text-xs uppercase tracking-wide text-brass/90">
              {f.k}
            </dt>
            <dd className="text-right font-mono text-xs text-paper/85">{f.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * Placeholder de retrato: iniciales "MD" en latón sobre ink, con cantoneras
 * en latón y una etiqueta mono discreta (CONTEXT.md §12). Formato 4:5.
 */
function PhotoPlaceholder() {
  return (
    <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-line bg-gradient-to-b from-ink-3 to-ink-2 shadow-card">
      {/* Rejilla tenue */}
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
      {/* Cantoneras */}
      <Corner className="left-3 top-3 border-l border-t" />
      <Corner className="right-3 top-3 border-r border-t" />
      <Corner className="bottom-10 left-3 border-b border-l" />
      <Corner className="bottom-10 right-3 border-b border-r" />

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

function Corner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute size-4 border-brass/50 ${className}`}
    />
  );
}
