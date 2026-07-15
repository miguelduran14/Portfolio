/**
 * Home — placeholder de Fase 0 (cimientos).
 * Aún sin contenido de secciones: solo verifica tokens, tipografía y layout.
 * El Hero + la firma llegan en la Fase 1.
 */
export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-24 sm:px-8">
      <p className="eyebrow mb-6">Fase 0 · Cimientos</p>

      <h1 className="max-w-3xl font-serif text-display font-medium tracking-tight text-paper">
        Terminal calm.
        <br />
        <span className="text-muted-foreground">Layout y tokens listos.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Estructura, paleta tinta/latón, IBM Plex Serif · Sans · Mono y el layout
        raíz (nav fija + footer) están montados. El contenido llega por fases.
      </p>

      {/* Muestra de tokens de color (referencia rápida del checkpoint) */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Swatch name="ink" className="bg-ink" hex="#0E2033" />
        <Swatch name="ink-3" className="bg-ink-3" hex="#14273A" />
        <Swatch name="paper" className="bg-paper" hex="#F6F3ED" dark />
        <Swatch name="brass" className="bg-brass" hex="#C6A24C" dark />
      </div>

      {/* Muestra tipográfica */}
      <div className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
        <div>
          <p className="eyebrow mb-2">Serif · display</p>
          <p className="font-serif text-2xl text-paper">Aa Bridging</p>
        </div>
        <div>
          <p className="eyebrow mb-2">Sans · cuerpo</p>
          <p className="font-sans text-2xl text-paper">Aa Bridging</p>
        </div>
        <div>
          <p className="eyebrow mb-2">Mono · datos</p>
          <p className="font-mono text-2xl text-paper">Aa Bridging</p>
        </div>
      </div>
    </section>
  );
}

function Swatch({
  name,
  hex,
  className,
  dark = false,
}: {
  name: string;
  hex: string;
  className: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex h-24 flex-col justify-end rounded-lg border border-line/60 p-3 ${className}`}
    >
      <span
        className={`font-mono text-xs ${dark ? "text-ink" : "text-paper"}`}
      >
        {name}
      </span>
      <span
        className={`font-mono text-[11px] ${dark ? "text-ink/70" : "text-muted-foreground"}`}
      >
        {hex}
      </span>
    </div>
  );
}
