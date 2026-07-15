import type { Metadata } from "next";
import { VariantA } from "@/components/hero-variants/variant-a";
import { VariantB } from "@/components/hero-variants/variant-b";
import { VariantC } from "@/components/hero-variants/variant-c";

/**
 * Laboratorio de variantes del hero (no enlazado en la nav; solo para revisión
 * y elección de dirección). Se elimina cuando fijemos el hero definitivo.
 */
export const metadata: Metadata = {
  title: "Lab · Variantes de hero",
  robots: { index: false, follow: false },
};

const variants = [
  { id: "A", name: "Terminal", node: <VariantA /> },
  { id: "B", name: "Editorial", node: <VariantB /> },
  { id: "C", name: "Terminal window", node: <VariantC /> },
];

export default function LabPage() {
  return (
    <div>
      {variants.map((v, i) => (
        <section
          key={v.id}
          className={`relative flex min-h-[calc(100svh-4rem)] items-center py-24 ${
            i % 2 === 1 ? "bg-ink-2" : ""
          }`}
        >
          <span className="absolute right-5 top-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/70 sm:right-8">
            Variante {v.id} · {v.name}
          </span>
          {v.node}
        </section>
      ))}
    </div>
  );
}
