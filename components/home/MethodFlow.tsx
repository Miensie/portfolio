import { method } from "@/content/vision";

/** Les cinq étapes de ma démarche, reliées par une ligne qui se trace au défilement. */
export function MethodFlow({ dark = false }: { dark?: boolean }) {
  return (
    <div className="reveal relative">
      {/* Ligne horizontale (écrans larges) */}
      <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-[22px] hidden h-px lg:block">
        <div className={`draw-x h-full w-full ${dark ? "bg-electric-soft/60" : "bg-electric/50"}`} />
      </div>
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {method.map((step, i) => (
          <li key={step.title} className="reveal relative" style={{ ["--delay" as string]: `${150 + i * 140}ms` }}>
            <span
              className={`relative z-10 flex size-11 items-center justify-center rounded-full border font-mono text-sm ${
                dark ? "border-electric-soft bg-night text-electric-soft" : "border-electric bg-paper text-electric-ink"
              }`}
            >
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className={`mt-1.5 text-[15px] ${dark ? "text-mist-light" : "text-ink-3"}`}>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
