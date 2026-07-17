import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * Encabezado de sección: kicker mono en latón + título en serif.
 * Sistema cohesivo para todas las secciones de la home.
 */
export function SectionHeading({
  kicker,
  title,
  id,
  className,
}: {
  kicker: string;
  title: string;
  id?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">{kicker}</p>
      <h2
        id={id}
        className={cn(
          "mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-paper sm:text-[2.5rem]",
        )}
      >
        {title}
      </h2>
    </Reveal>
  );
}
