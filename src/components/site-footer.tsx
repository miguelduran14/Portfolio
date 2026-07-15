import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

/**
 * Footer minimalista: firma, enlaces esenciales y nota de disponibilidad.
 * Contenido real (CONTEXT.md §4/§8): 100% remoto, abierto a oportunidades.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/60 bg-ink-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-serif text-lg text-paper">{siteConfig.name}</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {siteConfig.role} · 100% remoto · Las Palmas de Gran Canaria.
            Abierto a oportunidades.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-brass"
            >
              <Mail className="size-[18px]" />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-brass"
            >
              <GithubIcon className="size-[18px]" />
            </a>
            {/* LinkedIn: pendiente de URL (CONTEXT.md §12). Se añade cuando Miguel la confirme. */}
          </div>
          <p className="font-mono text-xs text-muted-foreground/70">
            © {year} · <Link href="/blog" className="hover:text-paper">Blog</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
