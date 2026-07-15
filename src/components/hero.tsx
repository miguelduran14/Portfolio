import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { DecryptedText } from "@/components/decrypted-text";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

/**
 * Hero definitivo (Fase 1) — síntesis de las tres variantes:
 * · organización y flujo alineado a la izquierda (variante A),
 * · nombre recalcado en IBM Plex Serif como h1 (variante B),
 * · la firma se descifra dentro de una "línea de terminal" con prompt y
 *   cursor en latón (variante C), sin la caja pesada.
 * Copy real de CONTEXT.md §4. Un solo patrón de movimiento aquí: el descifrado.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <AmbientGrid />

      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        {/* Rol */}
        <p className="eyebrow">{siteConfig.role}</p>

        {/* Nombre — recalcado, es el h1 */}
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.25rem,7vw,4.25rem)] font-medium leading-[1.03] tracking-tight text-paper">
          Miguel Ángel Durán Muñoz
        </h1>

        {/* La firma que se descifra, en una línea de terminal */}
        <div className="mt-7 flex max-w-full items-start gap-3 rounded-lg border border-line bg-ink-2/50 px-4 py-3 sm:w-fit">
          <span
            aria-hidden="true"
            className="mt-0.5 select-none font-mono text-brass"
          >
            ❯
          </span>
          <p className="font-mono text-[clamp(0.9rem,2.6vw,1.35rem)] leading-snug text-paper">
            <DecryptedText text={siteConfig.tagline} />
            <span
              aria-hidden="true"
              className="ml-0.5 inline-block h-[1.05em] w-[0.5ch] translate-y-[0.15em] bg-brass/80"
            />
          </p>
        </div>

        {/* Titular (CONTEXT.md §4) */}
        <p className="mt-7 max-w-2xl font-serif text-xl leading-snug text-paper/85 sm:text-2xl">
          Mainframe{" "}
          <span className="text-muted-foreground">(COBOL · DB2 · z/OS)</span>
          {" + "}
          Desarrollo moderno &amp; IA
        </p>

        {/* Sub */}
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ingeniero de software en banca y seguros construyendo el puente entre
          los sistemas críticos legacy y el desarrollo moderno con IA.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="#proyectos"
            className="group inline-flex h-11 items-center gap-2 rounded-lg bg-brass px-5 font-mono text-sm font-medium text-ink-2 transition-all hover:bg-brass-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Ver proyectos
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <div className="flex items-center gap-1">
            <CtaIcon href={siteConfig.github} label="GitHub">
              <GithubIcon className="size-[18px]" />
            </CtaIcon>
            <CtaIcon href={siteConfig.linkedin} label="LinkedIn">
              <LinkedinIcon className="size-[18px]" />
            </CtaIcon>
            <CtaIcon href={`mailto:${siteConfig.email}`} label="Email" external={false}>
              <Mail className="size-[18px]" />
            </CtaIcon>
          </div>
        </div>

        {/* Meta */}
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/80">
          100% remoto
          <span className="mx-2 text-line">·</span>
          Las Palmas de Gran Canaria
          <span className="mx-2 text-line">·</span>
          Inglés B2
        </p>
      </div>
    </section>
  );
}

function CtaIcon({
  href,
  label,
  children,
  external = true,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-muted-foreground transition-colors hover:border-brass/40 hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {children}
    </a>
  );
}

/**
 * Fondo ambiental MUY sutil (CONTEXT.md §6): rejilla tenue con máscara radial
 * que se desvanece hacia los bordes. Estático, decorativo (aria-hidden).
 */
function AmbientGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 75% 55% at 30% 35%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 55% at 30% 35%, black 0%, transparent 72%)",
        }}
      />
    </div>
  );
}
