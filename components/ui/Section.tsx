import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  tone?: "light" | "white" | "dark";
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}

const tones = {
  light: "bg-paper text-ink",
  white: "bg-white text-ink border-y border-line",
  dark: "bg-night text-paper",
};

export function Section({ id, tone = "light", children, className = "", labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface HeaderProps {
  eyebrow: string;
  title: string;
  id: string;
  intro?: string;
  dark?: boolean;
}

/** Titre de section : petite étiquette monospace + titre + introduction. */
export function SectionHeader({ eyebrow, title, id, intro, dark }: HeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className={`font-mono text-[13px] uppercase tracking-[0.08em] ${dark ? "text-electric-soft" : "text-electric-ink"}`}>
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg ${dark ? "text-mist-light" : "text-ink-3"}`}>{intro}</p>}
    </div>
  );
}

/** En-tête sombre des pages intérieures. */
export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="bg-night text-paper">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-electric-soft">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-mist-light">{intro}</p>}
      </div>
    </div>
  );
}
