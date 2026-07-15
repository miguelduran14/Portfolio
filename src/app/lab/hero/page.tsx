import type { Metadata } from "next";
import { HeroEnhanced } from "@/components/hero-variants/hero-enhanced";

/**
 * Comparación del hero definitivo con la alternativa "enhanced"
 * (badge de disponibilidad + tags de stack, adaptados de 21st.dev).
 * No enlazado; solo para revisión.
 */
export const metadata: Metadata = {
  title: "Lab · Hero enhanced",
  robots: { index: false, follow: false },
};

export default function HeroLabPage() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center py-24">
      <span className="absolute right-5 top-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/70 sm:right-8">
        Alternativa · badge + tags
      </span>
      <HeroEnhanced />
    </section>
  );
}
