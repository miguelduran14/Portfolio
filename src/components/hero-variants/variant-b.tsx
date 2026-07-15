import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { DecryptedText } from "@/components/decrypted-text";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

/**
 * Variante B — "Editorial".
 * Nombre grande en IBM Plex Serif como ancla visual; la firma en Mono se
 * descifra debajo como tagline en latón. Composición centrada, mucho aire.
 * Más cálida y "name-forward" (bueno para reclutadores).
 */
export function VariantB() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center sm:px-8">
      <p className="eyebrow">{siteConfig.role}</p>

      <h1 className="mt-5 font-serif text-[clamp(2.5rem,8vw,4.75rem)] font-medium leading-[1.02] tracking-tight text-paper">
        Miguel Ángel
        <br />
        Durán Muñoz
      </h1>

      {/* La firma que se descifra, como tagline */}
      <p className="mt-7 font-mono text-[clamp(0.85rem,2.6vw,1.15rem)] tracking-[0.06em] text-brass">
        <DecryptedText text={siteConfig.tagline} />
      </p>

      <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Ingeniero de software en banca y seguros. Mainframe (COBOL · DB2 · z/OS)
        + desarrollo moderno &amp; IA: construyo el puente entre los sistemas
        críticos legacy y lo que viene después.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
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

      <p className="mt-9 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/80">
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
