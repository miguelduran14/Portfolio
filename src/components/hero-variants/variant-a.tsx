import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { DecryptedText } from "@/components/decrypted-text";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

/**
 * Variante A — "Terminal".
 * La firma en Mono es la pieza central y se descifra. Titular serif debajo.
 * (Es la dirección del hero actual.)
 */
export function VariantA() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <p className="eyebrow">Miguel Ángel Durán Muñoz</p>
      <p className="mt-2 font-mono text-sm text-muted-foreground">
        {siteConfig.role}
      </p>

      <h1 className="mt-8 max-w-4xl text-[clamp(1.75rem,6vw,3.5rem)] font-medium leading-[1.08] tracking-tight text-paper">
        <DecryptedText text={siteConfig.tagline} />
      </h1>

      <p className="mt-6 max-w-2xl font-serif text-xl leading-snug text-paper/85 sm:text-2xl">
        Mainframe{" "}
        <span className="text-muted-foreground">(COBOL · DB2 · z/OS)</span>
        {" + "}
        Desarrollo moderno &amp; IA
      </p>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
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
        100% remoto
        <span className="mx-2 text-line">·</span>
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
