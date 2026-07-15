import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { DecryptedText } from "@/components/decrypted-text";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

/**
 * Variante C — "Terminal window".
 * Identidad a la izquierda + una "ventana de terminal" a la derecha donde la
 * firma se descifra como salida de un comando. Se apoya en la metáfora del
 * terminal (z/OS) de forma contenida. El cursor es estático (no añade un 4º
 * patrón de movimiento).
 */
export function VariantC() {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
      {/* Identidad */}
      <div>
        <p className="eyebrow">Miguel Ángel Durán Muñoz</p>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          {siteConfig.role}
        </p>

        <h1 className="mt-6 font-serif text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.06] tracking-tight text-paper">
          Mainframe{" "}
          <span className="text-muted-foreground">crítico</span>, entregado con
          IA.
        </h1>

        <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ingeniero de software en banca y seguros construyendo el puente entre
          los sistemas críticos legacy y el desarrollo moderno con IA.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="#proyectos"
            className="group inline-flex h-11 items-center gap-2 rounded-lg bg-brass px-5 font-mono text-sm font-medium text-ink-2 transition-all hover:bg-brass-soft"
          >
            Ver proyectos
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <div className="flex items-center gap-1">
            <IconLink href={siteConfig.github} label="GitHub">
              <GithubIcon className="size-[18px]" />
            </IconLink>
            <IconLink href={siteConfig.linkedin} label="LinkedIn">
              <LinkedinIcon className="size-[18px]" />
            </IconLink>
            <IconLink href={`mailto:${siteConfig.email}`} label="Email" external={false}>
              <Mail className="size-[18px]" />
            </IconLink>
          </div>
        </div>
      </div>

      {/* Ventana de terminal con la firma */}
      <div className="rounded-xl border border-line bg-ink-2/60 shadow-card">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-3 rounded-full border border-line" />
          <span className="size-3 rounded-full border border-line" />
          <span className="size-3 rounded-full border border-line" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            signature — zsh
          </span>
        </div>
        <div className="space-y-3 p-5 font-mono text-sm sm:p-6">
          <p className="text-muted-foreground">
            <span className="text-brass">mduran@z/OS</span>
            <span className="text-muted-foreground/60"> ~ %</span> decrypt
            --brand
          </p>
          <p className="text-[clamp(1rem,2.2vw,1.4rem)] leading-snug text-paper">
            <DecryptedText text={siteConfig.tagline} />
            <span className="ml-0.5 inline-block h-[1.1em] w-[0.55ch] translate-y-[0.15em] bg-brass/80 align-baseline" />
          </p>
          <p className="pt-1 text-xs text-muted-foreground/70">
            100% remoto · Las Palmas de Gran Canaria · Inglés B2
          </p>
        </div>
      </div>
    </div>
  );
}

function IconLink({
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
      className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-muted-foreground transition-colors hover:border-brass/40 hover:text-brass"
    >
      {children}
    </a>
  );
}
