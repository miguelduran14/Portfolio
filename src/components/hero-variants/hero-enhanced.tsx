import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { DecryptedText } from "@/components/decrypted-text";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { StatusBadge } from "@/components/status-badge";
import { TechTags } from "@/components/tech-tags";
import { siteConfig } from "@/lib/site";

/**
 * Hero "enhanced" — el hero definitivo + dos piezas adaptadas de 21st.dev:
 * un badge de disponibilidad (arriba) y una fila de tags de stack (tras el
 * titular). Solo para comparación en /lab/hero.
 */
export function HeroEnhanced() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      {/* Badge de estado (21st.dev · Animated Status Badge, adaptado) */}
      <StatusBadge />

      <p className="eyebrow mt-6">{siteConfig.role}</p>

      <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.25rem,7vw,4.25rem)] font-medium leading-[1.03] tracking-tight text-paper">
        Miguel Ángel Durán Muñoz
      </h1>

      <div className="mt-7 flex max-w-full items-start gap-3 rounded-lg border border-line bg-ink-2/50 px-4 py-3 sm:w-fit">
        <span aria-hidden="true" className="mt-0.5 select-none font-mono text-brass">
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

      <p className="mt-7 max-w-2xl font-serif text-xl leading-snug text-paper/85 sm:text-2xl">
        Mainframe{" "}
        <span className="text-muted-foreground">(COBOL · DB2 · z/OS)</span>
        {" + "}
        Desarrollo moderno &amp; IA
      </p>

      {/* Tags de stack (21st.dev · badge row, adaptado) */}
      <div className="mt-6">
        <TechTags />
      </div>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Ingeniero de software en banca y seguros construyendo el puente entre
        los sistemas críticos legacy y el desarrollo moderno con IA.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
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

      <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/80">
        Las Palmas de Gran Canaria
        <span className="mx-2 text-line">·</span>
        Inglés B2
      </p>
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
