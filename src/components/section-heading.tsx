import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * Encabezado de sección con numeración editorial: `01 —— SOBRE MÍ` en mono,
 * con hairline en latón, seguido del título en serif. Sistema cohesivo para
 * todas las secciones de la home (01 About · 02 Proyectos · 03 Experiencia …).
 */
export function SectionHeading({
  index,
  kicker,
  title,
  id,
  className,
}: {
  index: string;
  kicker: string;
  title: string;
  id?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs tabular-nums text-brass">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-line" />
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {kicker}
        </span>
      </div>
      <h2
        id={id}
        className={cn(
          "mt-5 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-paper sm:text-[2.5rem]",
        )}
      >
        {title}
      </h2>
    </Reveal>
  );
}
