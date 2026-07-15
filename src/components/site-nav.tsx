"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { navLinks, siteConfig } from "@/lib/site";

/**
 * Navegación fija minimalista (CONTEXT.md §8): mono, tenue, anclas de la home
 * + Blog + iconos GitHub/LinkedIn. Menú desplegable en móvil.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        {/* Marca: iniciales en latón, monoespaciado */}
        <Link
          href="/"
          className="font-mono text-sm tracking-widest text-paper transition-colors hover:text-brass"
        >
          <span className="text-brass">MD</span>
          <span className="text-muted-foreground"> · durán</span>
        </Link>

        {/* Enlaces (desktop) */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Iconos sociales + toggle móvil */}
        <div className="flex items-center gap-1">
          <SocialIcons />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="ml-1 inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-paper md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line/60 bg-ink/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-ink-3 hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function SocialIcons() {
  return (
    <>
      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-brass"
      >
        <GithubIcon className="size-[18px]" />
      </a>
      {siteConfig.linkedin && (
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-brass"
        >
          <LinkedinIcon className="size-[18px]" />
        </a>
      )}
    </>
  );
}
