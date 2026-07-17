import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

/**
 * Contacto (Fase 2) — última ancla de la home. Email destacado + GitHub /
 * LinkedIn y la nota de disponibilidad. Copy real de CONTEXT.md §4.
 */
export function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-line/60 py-24 sm:py-32"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Contacto"
          title="Abierto a oportunidades"
          id="contact-title"
        />
        <Reveal delay={0.04}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            100% remoto. Si buscas a alguien que entienda el legacy crítico y
            construya moderno con IA, escríbeme.
          </p>
        </Reveal>

        {/* Email destacado */}
        <Reveal delay={0.08}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group mt-10 inline-flex items-center gap-3 font-mono text-xl text-paper transition-colors hover:text-brass sm:text-2xl"
          >
            <Mail className="size-5 text-brass" />
            {siteConfig.email}
            <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass" />
          </a>
        </Reveal>

        {/* Enlaces */}
        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-wrap gap-3">
            <ContactLink href={siteConfig.github} label="GitHub">
              <GithubIcon className="size-[18px]" />
              GitHub
            </ContactLink>
            <ContactLink href={siteConfig.linkedin} label="LinkedIn">
              <LinkedinIcon className="size-[18px]" />
              LinkedIn
            </ContactLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-brass/40 hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {children}
    </a>
  );
}
