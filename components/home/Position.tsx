import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { position } from "@/content/vision";

const accents = [
  "border-t-electric",
  "border-t-electric-soft",
  "border-t-night",
];

/** Acquis, exploration, vision : trois niveaux bien séparés. */
export function Position() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {position.map((item, i) => (
        <article
          key={item.label}
          className={`reveal lift flex flex-col rounded-xl border border-line border-t-4 bg-white p-7 ${accents[i]}`}
          style={{ ["--delay" as string]: `${i * 140}ms` }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-electric-ink">{item.label}</p>
          <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
          <p className="mt-3 flex-1 text-ink-2">{item.text}</p>
          <Link
            href={item.href}
            className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-electric-ink hover:underline"
          >
            {item.cta} <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </article>
      ))}
    </div>
  );
}
